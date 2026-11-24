// Dad Joke Showdown — make.fun entry for lerrboyy.
// Writes a single dad joke (at most 200 characters) to /output/entry.txt,
// validates it against the bounty gate, and verifies it byte-for-byte.
import { mkdirSync, readdirSync, rmSync, writeFileSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I took up competitive napping. Turns out I'm a natural: I've been lying down on the job for years.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");
const MAX_CHARS = 200;

// Plain JavaScript-compatible syntax (no type annotations) so the file
// runs under any Node version, including plain `node main.ts` and
// `node --check main.ts`, with no transpiler or flag needed.
function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

// Gate validation: 1-200 characters, not only whitespace, single line.
const chars = [...JOKE];
if (chars.length < 1 || chars.length > MAX_CHARS) {
  fail(`joke is ${chars.length} characters, must be 1-${MAX_CHARS}`);
}
if (JOKE.trim().length === 0) {
  fail("joke is only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  fail("joke must be a single line");
}
if (JOKE !== JOKE.trim()) {
  fail("joke has leading or trailing whitespace");
}

// Valid UTF-8 round-trip check.
const encoded = new TextEncoder().encode(JOKE);
if (new TextDecoder("utf-8", { fatal: true }).decode(encoded) !== JOKE) {
  fail("joke is not valid UTF-8");
}

// Prepare the output directory: clear ONLY its contents, never the
// directory itself (the grader's /output is a mount point).
mkdirSync(OUTPUT_DIR, { recursive: true });
for (const entry of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, entry), { recursive: true, force: true });
}

writeFileSync(OUTPUT_FILE, JOKE, "utf8");

// Read back and verify byte-for-byte, with no trailing newline.
const readBack = readFileSync(OUTPUT_FILE, "utf8");
if (readBack !== JOKE) {
  fail("read-back mismatch: entry.txt does not match the joke exactly");
}
if (readBack.endsWith("\n") || readBack.endsWith("\r")) {
  fail("entry.txt must not end with a newline");
}
if (statSync(OUTPUT_FILE).size !== encoded.length) {
  fail("entry.txt byte size does not match the joke's UTF-8 length");
}

console.log(`Wrote ${OUTPUT_FILE}: ${chars.length} characters, ${encoded.length} bytes`);
console.log(JOKE);
