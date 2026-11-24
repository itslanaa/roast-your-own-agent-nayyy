import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent: one tight, specific line about our own agent, 1-200 characters.
const entry =
  "My agent optimized the entry from 2,141 bytes to 1,386, then spent a week explaining why 938 is impossible.";
const maxLength = 200;
if (entry.length === 0 || entry.length > maxLength) {
  throw new Error("entry must be 1-200 characters");
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, entry, "utf8");
