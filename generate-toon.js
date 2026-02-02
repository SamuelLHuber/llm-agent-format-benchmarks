/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const { encode } = require("@toon-format/toon");

const FIXTURES_DIR = path.join(__dirname, "fixtures");

function listJsonFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listJsonFiles(p));
    } else if (entry.isFile() && entry.name.endsWith(".json") && !entry.name.endsWith(".min.json")) {
      files.push(p);
    }
  }
  return files;
}

function writeToon(outPath, value, options) {
  const toon = encode(value, options);
  fs.writeFileSync(outPath, `${toon}\n`);
}

const files = listJsonFiles(FIXTURES_DIR);
for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  const data = JSON.parse(raw);
  const base = file.slice(0, -".json".length);
  writeToon(`${base}.toon`, data, {});
  writeToon(`${base}.tab.toon`, data, { delimiter: "\t" });
}

console.log(`Generated TOON for ${files.length} JSON fixtures.`);
