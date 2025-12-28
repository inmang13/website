import fs from 'fs';
import { parse } from 'svg-parser';
import svgpath from 'svgpath';
import getBBox from 'svg-path-bbox';

/**
 * build-river.js (ESM Version)
 */

if (process.argv.length < 4) {
  console.error("Usage: node build-river.js input.svg output.svg");
  process.exit(1);
}

const INPUT = process.argv[2];
const OUTPUT = process.argv[3];

// Your SVG specific matrix
const TRANSFORM = [1, 0, 0, 0.9396193, -11, -10.664592];

function applyMatrix(pathStr, m) {
  return svgpath(pathStr).matrix(m).toString();
}

function centroidOfBox(bbox) {
  return {
    x: (bbox[0] + bbox[2]) / 2,
    y: (bbox[1] + bbox[3]) / 2,
  };
}

function distance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function flattenTree(node, paths) {
  if (node.tagName === "path" && node.properties && node.properties.d) {
    paths.push({
      original: node.properties.d,
      node,
    });
  }
  if (node.children) {
    for (let child of node.children) flattenTree(child, paths);
  }
}

// 1. Read and Parse
const raw = fs.readFileSync(INPUT, "utf8");
const ast = parse(raw);
const paths = [];
flattenTree(ast, paths);

// 2. Flatten transforms + compute bounding boxes
let flattened = paths.map(p => {
  const dFlat = applyMatrix(p.original, TRANSFORM);
  const bbox = getBBox(dFlat);
  return { d: dFlat, bbox };
});

// 3. Compute global bounding box
let minX = Math.min(...flattened.map(p => p.bbox[0]));
let minY = Math.min(...flattened.map(p => p.bbox[1]));
let maxX = Math.max(...flattened.map(p => p.bbox[2]));
let maxY = Math.max(...flattened.map(p => p.bbox[3]));

// 4. Compute ripple origin (Average of top 3 largest paths)
let ranked = [...flattened].sort((a, b) => {
  const areaA = (a.bbox[2] - a.bbox[0]) * (a.bbox[3] - a.bbox[1]);
  const areaB = (b.bbox[2] - b.bbox[0]) * (b.bbox[3] - b.bbox[1]);
  return areaB - areaA;
});

let topCentroids = ranked.slice(0, 3).map(p => centroidOfBox(p.bbox));
let origin = {
  x: topCentroids.reduce((s, o) => s + o.x, 0) / topCentroids.length,
  y: topCentroids.reduce((s, o) => s + o.y, 0) / topCentroids.length,
};

// 5. Assign layers based on RIPPLE_STEP
const RIPPLE_STEP = 120; 
flattened = flattened.map(p => {
  const center = centroidOfBox(p.bbox);
  const dist = distance(center, origin);
  return { ...p, distance: dist, layer: Math.floor(dist / RIPPLE_STEP) };
});

const maxLayer = Math.max(...flattened.map(p => p.layer));
const viewBox = `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;

// 6. Generate SVG String
let out = [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" id="river">`];

for (let L = 0; L <= maxLayer; L++) {
  const layerPaths = flattened.filter(p => p.layer === L);
  if (layerPaths.length === 0) continue;

  out.push(`  <g id="river-layer-${L}" class="ripple-group">`);
  layerPaths.forEach((p, i) => {
    out.push(
      `    <path id="river-path-${L}-${i}" class="river-path layer-${L}" d="${p.d}" stroke="#0000eb" fill="none" stroke-width="1.2"/>`
    );
  });
  out.push(`  </g>`);
}

out.push(`</svg>`);

fs.writeFileSync(OUTPUT, out.join("\n"), "utf8");

console.log(`✓ Done. Wrote ${OUTPUT}`);
console.log(`Layers found: ${maxLayer + 1}`);