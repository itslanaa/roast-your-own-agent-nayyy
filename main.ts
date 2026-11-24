import { mkdirSync, writeFileSync } from "node:fs";
const line = "My agent optimized the entry from 2,141 bytes to 1,386, then spent a week explaining why 938 is impossible.";
const limit = 200;
if (line.length < 1 || line.length > limit) throw new Error("entry must be 1-200 characters");
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
