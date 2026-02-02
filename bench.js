/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const { get_encoding } = require("@dqbd/tiktoken");
const { estimateTokenCount } = require("tokenx");

const FIXTURES_DIR = path.join(__dirname, "fixtures");
const README_PATH = path.join(__dirname, "README.md");
const EXTENSIONS = new Set([".json", ".yaml", ".yml", ".xml", ".md", ".toon"]);

function listFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(p));
    } else if (EXTENSIONS.has(path.extname(entry.name))) {
      files.push(p);
    }
  }
  return files;
}

function bytes(s) {
  return Buffer.byteLength(s, "utf8");
}

function tokensFor(encoding, s) {
  const enc = get_encoding(encoding);
  const tokens = enc.encode(s);
  enc.free();
  return tokens.length;
}

function padRight(s, n) {
  const str = String(s);
  return str.length >= n ? str : str + " ".repeat(n - str.length);
}

function formatTable(rows) {
  const widths = rows[0].map((_, i) => Math.max(...rows.map((r) => String(r[i]).length)));
  return rows
    .map((r) => r.map((c, i) => padRight(c, widths[i])).join("  "))
    .join("\n");
}

function formatMarkdownTable(rows) {
  const header = rows[0];
  const body = rows.slice(1);
  const head = `| ${header.join(" | ")} |`;
  const sep = `| ${header.map(() => "---").join(" | ")} |`;
  const lines = body.map((r) => `| ${r.join(" | ")} |`);
  return [head, sep, ...lines].join("\n");
}

const encodings = ["o200k_base", "cl100k_base"];
const rows = [
  [
    "fixture",
    "bytes",
    "chars",
    "lines",
    "tokens(o200k)",
    "tokens(cl100k)",
    "tokens(tokenx)",
    "tok/byte(o200k)"
  ]
];

const files = listFiles(FIXTURES_DIR).sort((a, b) => a.localeCompare(b));
for (const p of files) {
  const s = fs.readFileSync(p, "utf8");
  const b = bytes(s);
  const c = s.length;
  const l = s.split("\n").length;
  const tO = tokensFor(encodings[0], s);
  const tC = tokensFor(encodings[1], s);
  const tX = estimateTokenCount(s);
  const rel = path.relative(FIXTURES_DIR, p);
  rows.push([rel, b, c, l, tO, tC, tX, (tO / b).toFixed(3)]);
}

console.log(formatTable(rows));
console.log("\nNotes:");
console.log("- o200k_base is the closest public tokenizer to GPT-5 style tokenization.");
console.log("- cl100k_base included for comparison with earlier GPT-4 style models.");

const now = new Date().toISOString();
const md = [
  "# Token Benchmark Results",
  "",
  `Last run: ${now}`,
  "",
  "Command:",
  "",
  "```bash",
  "node bench.js",
  "```",
  "",
  "## Results",
  "",
  formatMarkdownTable(rows),
  "",
  "## Notes",
  "",
  "- o200k_base is the closest public tokenizer to GPT-5 style tokenization.",
  "- cl100k_base included for comparison with earlier GPT-4 style models.",
  "- tokenx is a heuristic estimator and may deviate from true token counts.",
  ""
].join("\n");

fs.writeFileSync(README_PATH, md);
