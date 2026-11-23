// One Line, Zero Use: The Useless Superpower Sprint — make.fun entry.
// Writes a single original useless-superpower line to $OUTPUT_DIR/entry.txt (Node 22, stdlib only).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I can stop time, but only while I'm asleep, so I wake up every morning exactly as late as I would have been anyway.";

// The gate requires 1-200 characters: count Unicode code points, not UTF-16 units,
// so the guard measures what the judge measures.
const len = [...line].length;
if (len < 1 || len > 200) {
  throw new Error(`line must be 1-200 characters, got ${len}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
