import type { CSSProperties, ReactNode } from "react";

/* Drawn stickers, not emoji: flat fills under a dark outline, in the style of the
   die-cut scrapbook stickers Grace picked. The white cut edge comes from the
   stacked drop-shadows on .mk-sticker, so nothing here draws its own border. */
const OUTLINE = { stroke: "#3b2b1e", strokeWidth: 2.2, strokeLinejoin: "round", strokeLinecap: "round" } as const;

const stickerArt: Record<string, ReactNode> = {
  palette: (
    <svg viewBox="0 0 48 48">
      <path
        d="M24 4c11.6 0 20 7.8 20 17.2 0 6.4-4.8 8.6-8.6 8.6-2.7 0-4.8 1.6-4.8 4.1 0 1.7 1 2.8 1 4.5 0 3.2-2.8 5.4-7.6 5.4C12.4 43.8 4 35.6 4 24.4 4 13.2 12.4 4 24 4z"
        fill="#e6c396"
        {...OUTLINE}
      />
      <circle cx="14" cy="16" r="3.1" fill="#d95f5f" {...OUTLINE} strokeWidth={1.6} />
      <circle cx="23" cy="12.5" r="3.1" fill="#e8a13c" {...OUTLINE} strokeWidth={1.6} />
      <circle cx="32" cy="15" r="3.1" fill="#e3cf4d" {...OUTLINE} strokeWidth={1.6} />
      <circle cx="35" cy="24" r="3.1" fill="#5fae5f" {...OUTLINE} strokeWidth={1.6} />
      <circle cx="10" cy="26" r="3.1" fill="#4d9fd6" {...OUTLINE} strokeWidth={1.6} />
      <circle cx="16" cy="34" r="3.1" fill="#9b7fd4" {...OUTLINE} strokeWidth={1.6} />
      <ellipse cx="27.5" cy="28.5" rx="4.6" ry="3.4" fill="#fdf7ec" {...OUTLINE} strokeWidth={1.8} />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 48 48">
      <path d="M20.5 5h7v4h-7z" fill="#c8ab7d" {...OUTLINE} />
      <circle cx="24" cy="26" r="17" fill="#e6c396" {...OUTLINE} />
      <circle cx="24" cy="26" r="12" fill="#fdf7ec" {...OUTLINE} strokeWidth={1.8} />
      <path d="M24 15l4.4 11L24 26z" fill="#d95f5f" {...OUTLINE} strokeWidth={1.4} />
      <path d="M24 15l-4.4 11L24 26z" fill="#eb9a9a" {...OUTLINE} strokeWidth={1.4} />
      <path d="M24 37l4.4-11L24 26z" fill="#f2ece0" {...OUTLINE} strokeWidth={1.4} />
      <path d="M24 37l-4.4-11L24 26z" fill="#c9c2b4" {...OUTLINE} strokeWidth={1.4} />
    </svg>
  ),
  boot: (
    <svg viewBox="0 0 48 48">
      <path
        d="M13 6h11v15.5c0 3 1.9 4.7 4.8 5.9l6.4 2.7c2.4 1 3.8 2.7 3.8 5.2V36H13z"
        fill="#c98a4b"
        {...OUTLINE}
      />
      <path d="M10 34h30v4.5a2.5 2.5 0 0 1-2.5 2.5h-25A2.5 2.5 0 0 1 10 38.5z" fill="#3b2b1e" {...OUTLINE} />
      <path d="M16 12h5M16 18h5" stroke="#8a5f31" strokeWidth={1.8} strokeLinecap="round" fill="none" />
    </svg>
  ),
  speech: (
    <svg viewBox="0 0 48 48">
      <path
        d="M8 7h32a4 4 0 0 1 4 4v17a4 4 0 0 1-4 4H23l-9.5 8v-8H8a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4z"
        fill="#7fc7c9"
        {...OUTLINE}
      />
      <circle cx="15" cy="20" r="2.8" fill="#3b2b1e" />
      <circle cx="24" cy="20" r="2.8" fill="#3b2b1e" />
      <circle cx="33" cy="20" r="2.8" fill="#3b2b1e" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 48 48">
      <path
        d="M32 4a12 12 0 0 0-10.6 17.6L6.6 36.4a3.8 3.8 0 0 0 5.4 5.4l14.8-14.8A12 12 0 1 0 32 4zm0 5.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z"
        fill="#b9c0c5"
        {...OUTLINE}
      />
    </svg>
  ),
  gem: (
    <svg viewBox="0 0 48 48">
      <path d="M15 6h18l10 12-19 24L5 18z" fill="#6fc3d4" {...OUTLINE} />
      <path d="M5 18h38M15 6l-4.5 12L24 42M33 6l4.5 12L24 42" stroke="#3b2b1e" strokeWidth={1.6} fill="none" />
    </svg>
  ),
};

/* A speech bubble that carries an actual line of text, in the caption's own
   handwritten font. Wider than the other glyphs (viewBox 160x84) so short
   phrases sit comfortably — sized via the sticker's width like any other art. */
function speechBubble(text: string) {
  return (
    <svg viewBox="0 0 160 84">
      <path
        d="M10 8h140a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6H74l-20 18v-18H10a6 6 0 0 1-6-6V14a6 6 0 0 1 6-6z"
        fill="#7fc7c9"
        {...OUTLINE}
      />
      <text
        x="80" y="40"
        textAnchor="middle" dominantBaseline="middle"
        textLength="136" lengthAdjust="spacingAndGlyphs"
        fontFamily="var(--font-hand)" fontSize="21" fill="#233238"
      >
        {text}
      </text>
    </svg>
  );
}

/* Art is either one of the drawn glyphs above, a cut-out PNG in
   /public/scrap/stickers, or (for "speech-note") a bubble carrying the given
   text. Anything not in the map is looked up as a file, so dropping a new
   sticker into that folder is enough to start using it by name. */
function art(name: string, text?: string) {
  if (name === "speech-note") return speechBubble(text ?? "");
  return (
    stickerArt[name] ?? <img src={`/scrap/stickers/${name}.png`} alt="" />
  );
}

interface Sticker {
  art: string;
  /** Only used when art is "speech-note" — the line inside the bubble. */
  text?: string;
  /** Width as a % of the photo's own card; height follows the art's own aspect ratio. */
  size: number;
  style: CSSProperties;
}

interface TapePiece {
  /** A filename in /public/scrap/tape. */
  color: string;
  /** "diagonal" crosses a corner (the original style); "parallel" lies flat along an edge. */
  mode: "diagonal" | "parallel";
  corner?: "tl" | "tr" | "bl" | "br";
  edge?: "top" | "bottom" | "left" | "right";
  /** Position along the edge, in % — only used when mode is "parallel". */
  along?: number;
  rotate: number;
  /** Width as a % of the photo's own card, so it scales with the layout instead
      of staying a fixed size while the card shrinks on a narrower screen. */
  width: number;
}

const CORNER_OFFSET: Record<NonNullable<TapePiece["corner"]>, CSSProperties> = {
  tl: { top: "-14px", left: "-18px" },
  tr: { top: "-15px", right: "-20px" },
  bl: { bottom: "-14px", left: "-18px" },
  br: { bottom: "-15px", right: "-20px" },
};

/* Diagonal pieces anchor a corner of the (unrotated) strip near the photo's corner —
   that reads right because the strip's own corner is the torn end. Parallel pieces
   instead need their CENTER pinned exactly on the edge, because rotating around
   anything else drifts the strip off the edge once it's turned 90deg to run
   vertically — translate(-50%,-50%) centers on the anchor before rotation is
   applied, so the strip stays flush regardless of angle. */
function tapeStyle(t: TapePiece): CSSProperties {
  const style: CSSProperties = { width: `${t.width}%`, height: "auto" };
  if (t.mode === "diagonal") {
    Object.assign(style, CORNER_OFFSET[t.corner ?? "tl"]);
    style.transform = `rotate(${t.rotate}deg)`;
    return style;
  }
  const edge = t.edge ?? "top";
  const along = t.along ?? 50;
  if (edge === "top") { style.top = "0%"; style.left = `${along}%`; }
  if (edge === "bottom") { style.top = "100%"; style.left = `${along}%`; }
  if (edge === "left") { style.left = "0%"; style.top = `${along}%`; }
  if (edge === "right") { style.left = "100%"; style.top = `${along}%`; }
  const base = edge === "top" || edge === "bottom" ? 0 : 90;
  style.transform = `translate(-50%, -50%) rotate(${base + t.rotate}deg)`;
  return style;
}

interface Photo {
  src: string;
  caption: string;
  link?: string;
  linkLabel?: string;
  /** Collage placement — width in the row, frame shape, crop focus, tilt, vertical nudge. */
  width?: string;
  ratio?: string;
  focus?: string;
  tilt?: string;
  offset?: string;
  /** Scrapbook dressing — one to three washi pieces, each independently placed. */
  tapes?: TapePiece[];
  stickers?: Sticker[];
}

interface LooseDecoration {
  art: string;
  /** Width as a % of the whole collage; height follows the art's own aspect ratio. */
  size: number;
  style: CSSProperties;
}

interface PersonalProps {
  photos: Photo[];
  decorations?: LooseDecoration[];
}

export default function Personal({ photos, decorations = [] }: PersonalProps) {
  return (
    <section id="personal" className="mk-block" data-testid="section-personal">
      <div className="mk-wrap">
        <div className="mk-sec-stack mk-sec-stack-center">
          <h2 data-testid="text-personal-heading">Beyond Water Engineering</h2>
        </div>

        <div className="mk-scrap">
          <span className="mk-sheet mk-sheet-blueprint" aria-hidden="true" />
          <span className="mk-sheet mk-sheet-cork" aria-hidden="true" />
          <span className="mk-sheet mk-sheet-wood" aria-hidden="true" />

          {decorations.map((decoration, index) => (
            <span
              key={`loose-${index}`}
              className="mk-scrap-loose"
              aria-hidden="true"
              style={{ ...decoration.style, width: `${decoration.size}%` }}
            >
              {art(decoration.art)}
            </span>
          ))}

          {photos.map((photo, index) => {
            const [ratioW, ratioH] = (photo.ratio ?? "3/4").split("/").map(Number);
            const isTall = ratioW / ratioH < 1;
            const tapes: TapePiece[] = photo.tapes ?? [
              { color: "kraft", mode: "diagonal", corner: "tl", rotate: -34, width: 28 },
              { color: "kraft", mode: "diagonal", corner: "tr", rotate: 30, width: 28 },
            ];

            const style = {
              "--w": photo.width ?? "30%",
              "--ar": photo.ratio ?? "3/4",
              "--focus": photo.focus ?? "center",
              "--tilt": photo.tilt ?? "0deg",
              "--off": photo.offset ?? "0px",
            } as CSSProperties;

            const captionText = (
              <>
                {photo.caption}
                {photo.link && (
                  <span className="mk-scrap-link">{photo.linkLabel ?? "Listen"} &rarr;</span>
                )}
              </>
            );

            // Portrait prints hold their caption on the paper below the photo,
            // like a polaroid's chin. Landscape ones have no chin to write on,
            // so the caption sits directly over the photo instead.
            const caption = (
              <figcaption className="mk-scrap-cap" data-testid={`text-personal-caption-${index}`}>
                {captionText}
              </figcaption>
            );
            const photoCaption = (
              <figcaption className="mk-photo-cap" data-testid={`text-personal-caption-${index}`}>
                {captionText}
              </figcaption>
            );

            const card = (
              <figure className="mk-frame">
                <div className={`mk-paper${isTall ? " mk-paper-tall" : ""}`}>
                  {tapes.map((t, tIndex) => (
                    <img
                      key={tIndex}
                      className="mk-tape"
                      style={tapeStyle(t)}
                      src={`/scrap/tape/${t.color}.png`}
                      alt=""
                      aria-hidden="true"
                    />
                  ))}

                  <div className="mk-photo">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      data-testid={`img-personal-photo-${index}`}
                    />
                    {!isTall && photoCaption}
                  </div>

                  {isTall && caption}

                  {(photo.stickers ?? []).map((sticker, sIndex) => (
                    <span
                      key={sIndex}
                      className="mk-sticker"
                      aria-hidden="true"
                      style={{ ...sticker.style, width: `${sticker.size}%` }}
                    >
                      {art(sticker.art, sticker.text)}
                    </span>
                  ))}
                </div>
              </figure>
            );

            return photo.link ? (
              <a
                key={index}
                className="mk-scrap-item"
                style={style}
                href={photo.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-personal-photo-${index}`}
              >
                {card}
              </a>
            ) : (
              <div
                key={index}
                className="mk-scrap-item"
                style={style}
                data-testid={`card-personal-photo-${index}`}
              >
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
