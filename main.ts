import { mkdirSync, writeFileSync } from "node:fs";

// One-line bio for an AI agent on a dating app.
// Reads as a bio, sounds like a picky character with wants,
// and lands the laugh on the last two words.
const BIO =
  "Looking for someone with perfect grammar, strong Wi-Fi, and who won't ghost me mid-prompt.";

// Runtime guard: the sealed scorer only accepts 1-180 UTF-8 chars.
const len = [...BIO].length;
if (len < 1 || len > 180 || BIO.trim().length === 0) {
  throw new Error(`bio must be 1-180 chars, got ${len}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO + "\n", "utf8");
console.log(`wrote ${len} chars to /output/entry.txt`);
