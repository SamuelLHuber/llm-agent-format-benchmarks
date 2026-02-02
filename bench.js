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

function formatKey(relPath) {
  const lower = relPath.toLowerCase();
  if (lower.endsWith(".min.json")) return "json (min)";
  if (lower.endsWith(".flow.yaml") || lower.endsWith(".flow.yml")) return "yaml (flow)";
  if (lower.endsWith(".strict.md")) return "md (strict)";
  if (lower.endsWith(".tab.toon")) return "toon (tab)";
  if (lower.endsWith(".toon")) return "toon";
  if (lower.endsWith(".json")) return "json";
  if (lower.endsWith(".yaml") || lower.endsWith(".yml")) return "yaml";
  if (lower.endsWith(".md")) return "md";
  if (lower.endsWith(".xml")) return "xml";
  return path.extname(lower).replace(".", "") || "other";
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
const summary = new Map();
const SUMMARY_DIRS = new Set(["compact", "full", "real-equivalent"]);

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

  const topDir = rel.split(path.sep)[0];
  if (SUMMARY_DIRS.has(topDir)) {
    const key = formatKey(rel);
    const entry = summary.get(key) || {
      count: 0,
      bytes: 0,
      tokensO: 0
    };
    entry.count += 1;
    entry.bytes += b;
    entry.tokensO += tO;
    summary.set(key, entry);
  }
}

console.log(formatTable(rows));
console.log("\nNotes:");
console.log("- o200k_base is the closest public tokenizer to GPT-5 style tokenization.");
console.log("- cl100k_base included for comparison with earlier GPT-4 style models.");

const now = new Date().toISOString();
const summaryRows = [
  ["rank", "format", "files", "avg bytes", "avg tokens(o200k)", "tok/byte(o200k)"]
];
const summaryBody = Array.from(summary.entries())
  .map(([format, entry]) => {
    const avgBytes = Math.round(entry.bytes / entry.count);
    const avgTokens = Math.round(entry.tokensO / entry.count);
    const tokPerByte = entry.tokensO / entry.bytes;
    return [format, entry.count, avgBytes, avgTokens, tokPerByte.toFixed(3)];
  })
  .sort((a, b) => Number(a[3]) - Number(b[3]));
const medals = ["🥇", "🥈", "🥉"];
const rankedSummaryBody = summaryBody.map((row, i) => [
  i < medals.length ? `${i + 1} ${medals[i]}` : i + 1,
  row[0],
  row[1],
  row[2],
  row[3],
  row[4]
]);
summaryRows.push(...rankedSummaryBody);

const md = [
  "# Token Benchmark Results",
  "",
  `Last run: ${now}`,
  "",
  "## Notes",
  "",
  "- Overall format comparison uses equivalent fixtures only (compact, full, real-equivalent).",
  "- o200k_base is the closest public tokenizer to GPT-5 style tokenization.",
  "- cl100k_base included for comparison with earlier GPT-4 style models.",
  "- tokenx is a heuristic estimator and may deviate from true token counts.",
  "",
  "## Overall format comparison",
  "",
  formatMarkdownTable(summaryRows),
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
  ""
].join("\n");

fs.writeFileSync(README_PATH, md);
