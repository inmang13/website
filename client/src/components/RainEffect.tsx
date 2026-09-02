import { useEffect, useRef } from "react";

/* Ported from an artifact prototype: dots fall from the top of the page,
   bounce off card-shaped elements like small balls (losing energy each
   bounce), roll off the nearest edge once they've settled, and collide with
   each other along the way. Obstacles are measured in document coordinates
   (not viewport-relative) so the canvas can be one absolutely-positioned
   layer over the whole page instead of re-measuring on every scroll frame. */

const OBSTACLE_SELECTOR = ".mk-fcard, .mk-exp-card, .mk-paper";
const DENSITY = 180;
const GRAVITY = 340;
const RESTITUTION = 0.28;
const GRID_CELL = 18;
const DOT_COLOR = "84, 168, 170"; // --mk-accent, as an rgb() triple

interface Obstacle {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

interface Dot {
  id: number;
  kind: "fall" | "roll";
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  bounces: number;
  rollDir: number;
  obstacle: Obstacle | null;
}

export default function RainEffect({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    let obstacles: Obstacle[] = [];
    let dots: Dot[] = [];
    let nextId = 1;
    let raf = 0;
    let lastT = performance.now();
    let grid = new Map<string, Dot[]>();
    let spawnTimer = 0;
    const FILL_SECONDS = 5; // how long a steady trickle takes to reach full density
    const SPAWN_INTERVAL = FILL_SECONDS / DENSITY;

    function spawnDot(y?: number): Dot {
      return {
        id: nextId++,
        kind: "fall",
        x: Math.random() * W,
        y: y ?? -10,
        vy: 60 + Math.random() * 60,
        vx: 0,
        r: 1.2 + Math.random() * 1.4,
        bounces: 0,
        rollDir: 1,
        obstacle: null,
      };
    }

    function measure() {
      H = document.documentElement.scrollHeight;
      W = document.documentElement.clientWidth;
      canvas.width = W;
      canvas.height = H;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      const scrollY = window.scrollY || window.pageYOffset;
      obstacles = Array.from(document.querySelectorAll<HTMLElement>(OBSTACLE_SELECTOR)).map((el) => {
        const r = el.getBoundingClientRect();
        return { left: r.left, right: r.left + r.width, top: r.top + scrollY, bottom: r.top + scrollY + r.height };
      });
    }

    function findHit(d: Dot): Obstacle | null {
      for (const o of obstacles) {
        if (d.x > o.left && d.x < o.right && d.y + d.r >= o.top && d.y - d.r <= o.top + 10 && d.vy > 0) {
          return o;
        }
      }
      return null;
    }

    function cellKey(cx: number, cy: number) {
      return `${cx},${cy}`;
    }

    function resolveCollisions() {
      grid.clear();
      for (const d of dots) {
        const key = cellKey(Math.floor(d.x / GRID_CELL), Math.floor(d.y / GRID_CELL));
        let bucket = grid.get(key);
        if (!bucket) { bucket = []; grid.set(key, bucket); }
        bucket.push(d);
      }
      const seen = new Set<string>();
      for (const d of dots) {
        const cx = Math.floor(d.x / GRID_CELL), cy = Math.floor(d.y / GRID_CELL);
        for (let ox = -1; ox <= 1; ox++) {
          for (let oy = -1; oy <= 1; oy++) {
            const bucket = grid.get(cellKey(cx + ox, cy + oy));
            if (!bucket) continue;
            for (const other of bucket) {
              if (other === d) continue;
              const pairKey = d.id < other.id ? `${d.id}_${other.id}` : `${other.id}_${d.id}`;
              if (seen.has(pairKey)) continue;
              const dx = other.x - d.x, dy = other.y - d.y;
              const minDist = d.r + other.r;
              const dist2 = dx * dx + dy * dy;
              if (dist2 >= minDist * minDist || dist2 < 0.0001) continue;
              seen.add(pairKey);

              const dist = Math.sqrt(dist2);
              const nx = dx / dist, ny = dy / dist;
              const overlap = minDist - dist;
              const aMovable = d.kind === "fall";
              const bMovable = other.kind === "fall";

              if (aMovable && bMovable) {
                d.x -= nx * overlap * 0.5; d.y -= ny * overlap * 0.5;
                other.x += nx * overlap * 0.5; other.y += ny * overlap * 0.5;
              } else if (aMovable) {
                d.x -= nx * overlap; d.y -= ny * overlap;
              } else if (bMovable) {
                other.x += nx * overlap; other.y += ny * overlap;
              }

              const relVx = other.vx - d.vx, relVy = other.vy - d.vy;
              const velAlongNormal = relVx * nx + relVy * ny;
              if (velAlongNormal > 0) continue;
              const restitution = 0.45;
              const denom = (aMovable ? 1 : 0) + (bMovable ? 1 : 0) || 1;
              const impulse = (-(1 + restitution) * velAlongNormal) / denom;
              if (aMovable) { d.vx -= impulse * nx; d.vy -= impulse * ny; }
              if (bMovable) { other.vx += impulse * nx; other.vy += impulse * ny; }
            }
          }
        }
      }
    }

    function step(dt: number) {
      ctx!.clearRect(0, 0, W, H);

      // Trickle new dots in one at a time at a steady rate rather than
      // seeding all of them at once — staggering by *starting position*
      // still lets dots arrive in visible clumps by chance (a well-known
      // "random looks clumpy" artifact), staggering by *spawn time* doesn't.
      spawnTimer += dt;
      while (dots.length < DENSITY && spawnTimer > SPAWN_INTERVAL) {
        spawnTimer -= SPAWN_INTERVAL;
        dots.push(spawnDot());
      }

      for (const d of dots) {
        if (d.kind === "fall") {
          d.vy += GRAVITY * dt;
          d.y += d.vy * dt;
          d.vx *= 0.98;
          d.x += d.vx * dt;
          const hit = findHit(d);
          if (hit) {
            d.y = hit.top - d.r;
            d.vy = -d.vy * RESTITUTION;
            d.vx += (Math.random() - 0.5) * 40;
            d.bounces++;
            if (d.bounces > 2 && Math.abs(d.vy) < 40) {
              d.kind = "roll";
              d.obstacle = hit;
              d.rollDir = d.x < (hit.left + hit.right) / 2 ? -1 : 1;
              d.vy = 0;
            }
          }
        } else if (d.kind === "roll" && d.obstacle) {
          const o = d.obstacle;
          d.x += d.rollDir * 55 * dt;
          d.y = o.top - d.r;
          if (d.x < o.left - d.r || d.x > o.right + d.r) {
            d.kind = "fall";
            d.vy = 20;
            d.obstacle = null;
            d.bounces = 0;
          }
        }
        if (d.y > H + 10 || d.x < -20 || d.x > W + 20) Object.assign(d, spawnDot(-10));
      }

      resolveCollisions();

      ctx!.fillStyle = `rgba(${DOT_COLOR}, 0.55)`;
      for (const d of dots) {
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function loop(t: number) {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;
      step(dt);
      raf = requestAnimationFrame(loop);
    }

    measure();
    // Start empty — the spawn queue in step() fills it in gradually from
    // the top instead of seeding every dot (or a scattered range of
    // positions) all at once.
    dots = [];
    window.addEventListener("resize", measure);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [active]);

  if (!active) return null;
  return <canvas ref={canvasRef} className="mk-rain-canvas" aria-hidden="true" />;
}
