# Token Benchmark Results

Last run: 2026-02-02T14:40:52.590Z

## Notes

- Overall format comparison uses equivalent fixtures only (compact, full, real-equivalent).
- o200k_base is the closest public tokenizer to GPT-5 style tokenization.
- cl100k_base included for comparison with earlier GPT-4 style models.
- tokenx is a heuristic estimator and may deviate from true token counts.

## Overall format comparison

| rank | format | files | avg bytes | avg tokens(o200k) | tok/byte(o200k) |
| --- | --- | --- | --- | --- | --- |
| 1 🥇 | md (strict) | 11 | 471 | 130 | 0.275 |
| 2 🥈 | json (min) | 11 | 541 | 137 | 0.253 |
| 3 🥉 | toon | 11 | 512 | 150 | 0.293 |
| 4 | md | 11 | 534 | 151 | 0.282 |
| 5 | yaml (flow) | 11 | 553 | 153 | 0.276 |
| 6 | toon (tab) | 11 | 519 | 157 | 0.303 |
| 7 | yaml | 11 | 592 | 182 | 0.306 |
| 8 | json | 11 | 659 | 192 | 0.292 |
| 9 | xml | 11 | 750 | 248 | 0.330 |

Command:

```bash
node bench.js
```

## Results

| fixture | bytes | chars | lines | tokens(o200k) | tokens(cl100k) | tokens(tokenx) | tok/byte(o200k) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| compact/report.flow.yaml | 217 | 217 | 2 | 67 | 69 | 73 | 0.309 |
| compact/report.json | 251 | 251 | 11 | 84 | 86 | 74 | 0.335 |
| compact/report.md | 212 | 212 | 15 | 64 | 65 | 64 | 0.302 |
| compact/report.min.json | 216 | 216 | 2 | 61 | 60 | 69 | 0.282 |
| compact/report.strict.md | 172 | 172 | 7 | 56 | 57 | 61 | 0.326 |
| compact/report.tab.toon | 199 | 199 | 9 | 71 | 72 | 67 | 0.357 |
| compact/report.toon | 194 | 194 | 9 | 67 | 68 | 69 | 0.345 |
| compact/report.xml | 240 | 240 | 9 | 87 | 88 | 90 | 0.362 |
| compact/report.yaml | 222 | 222 | 15 | 78 | 80 | 65 | 0.351 |
| compact/spec.flow.yaml | 489 | 489 | 2 | 157 | 157 | 152 | 0.321 |
| compact/spec.json | 549 | 549 | 16 | 183 | 183 | 154 | 0.333 |
| compact/spec.md | 479 | 479 | 43 | 160 | 158 | 138 | 0.334 |
| compact/spec.min.json | 476 | 476 | 2 | 136 | 130 | 143 | 0.286 |
| compact/spec.strict.md | 386 | 386 | 10 | 127 | 128 | 129 | 0.329 |
| compact/spec.tab.toon | 434 | 434 | 13 | 152 | 154 | 124 | 0.350 |
| compact/spec.toon | 426 | 426 | 13 | 146 | 147 | 139 | 0.343 |
| compact/spec.xml | 686 | 686 | 28 | 257 | 258 | 240 | 0.375 |
| compact/spec.yaml | 556 | 556 | 36 | 203 | 203 | 139 | 0.365 |
| compact/todo.flow.yaml | 256 | 256 | 2 | 78 | 81 | 74 | 0.305 |
| compact/todo.json | 290 | 290 | 11 | 93 | 97 | 77 | 0.321 |
| compact/todo.md | 238 | 238 | 11 | 74 | 76 | 63 | 0.311 |
| compact/todo.min.json | 251 | 251 | 2 | 71 | 73 | 71 | 0.283 |
| compact/todo.strict.md | 213 | 213 | 3 | 65 | 67 | 62 | 0.305 |
| compact/todo.tab.toon | 248 | 248 | 8 | 86 | 88 | 67 | 0.347 |
| compact/todo.toon | 244 | 244 | 8 | 82 | 84 | 70 | 0.336 |
| compact/todo.xml | 385 | 385 | 15 | 131 | 136 | 115 | 0.340 |
| compact/todo.yaml | 260 | 260 | 10 | 84 | 88 | 71 | 0.323 |
| full/report.flow.yaml | 493 | 493 | 2 | 129 | 135 | 141 | 0.262 |
| full/report.json | 595 | 595 | 28 | 173 | 179 | 142 | 0.291 |
| full/report.md | 481 | 481 | 21 | 125 | 129 | 128 | 0.260 |
| full/report.min.json | 487 | 487 | 2 | 119 | 120 | 136 | 0.244 |
| full/report.strict.md | 431 | 431 | 7 | 112 | 116 | 124 | 0.260 |
| full/report.tab.toon | 459 | 459 | 9 | 128 | 132 | 126 | 0.279 |
| full/report.toon | 454 | 454 | 9 | 124 | 128 | 132 | 0.273 |
| full/report.xml | 554 | 554 | 15 | 180 | 184 | 184 | 0.325 |
| full/report.yaml | 515 | 515 | 21 | 152 | 158 | 132 | 0.295 |
| full/spec.flow.yaml | 1320 | 1320 | 2 | 353 | 351 | 363 | 0.267 |
| full/spec.json | 1624 | 1624 | 68 | 447 | 445 | 365 | 0.275 |
| full/spec.md | 1289 | 1289 | 64 | 358 | 352 | 344 | 0.278 |
| full/spec.min.json | 1286 | 1286 | 2 | 311 | 303 | 354 | 0.242 |
| full/spec.strict.md | 1154 | 1154 | 10 | 302 | 300 | 335 | 0.262 |
| full/spec.tab.toon | 1207 | 1207 | 13 | 328 | 326 | 309 | 0.272 |
| full/spec.toon | 1199 | 1199 | 13 | 321 | 316 | 345 | 0.268 |
| full/spec.xml | 1733 | 1733 | 49 | 560 | 559 | 555 | 0.323 |
| full/spec.yaml | 1466 | 1466 | 57 | 441 | 439 | 350 | 0.301 |
| full/todo.flow.yaml | 707 | 707 | 2 | 179 | 181 | 189 | 0.253 |
| full/todo.json | 757 | 757 | 15 | 198 | 201 | 192 | 0.262 |
| full/todo.md | 669 | 669 | 15 | 170 | 171 | 169 | 0.254 |
| full/todo.min.json | 690 | 690 | 2 | 164 | 161 | 182 | 0.238 |
| full/todo.strict.md | 620 | 620 | 3 | 154 | 155 | 164 | 0.248 |
| full/todo.tab.toon | 695 | 695 | 12 | 198 | 199 | 177 | 0.285 |
| full/todo.toon | 687 | 687 | 12 | 190 | 191 | 184 | 0.277 |
| full/todo.xml | 1056 | 1056 | 35 | 324 | 328 | 301 | 0.307 |
| full/todo.yaml | 723 | 723 | 14 | 193 | 196 | 190 | 0.267 |
| real-equivalent/040-ingest-pipeline.spec.flow.yaml | 825 | 825 | 2 | 223 | 223 | 227 | 0.270 |
| real-equivalent/040-ingest-pipeline.spec.json | 1047 | 1047 | 50 | 299 | 299 | 229 | 0.286 |
| real-equivalent/040-ingest-pipeline.spec.md | 812 | 812 | 46 | 227 | 225 | 209 | 0.280 |
| real-equivalent/040-ingest-pipeline.spec.min.json | 809 | 809 | 2 | 199 | 193 | 218 | 0.246 |
| real-equivalent/040-ingest-pipeline.spec.strict.md | 713 | 713 | 10 | 192 | 192 | 200 | 0.269 |
| real-equivalent/040-ingest-pipeline.spec.tab.toon | 767 | 767 | 13 | 222 | 222 | 192 | 0.289 |
| real-equivalent/040-ingest-pipeline.spec.toon | 761 | 761 | 13 | 212 | 210 | 210 | 0.279 |
| real-equivalent/040-ingest-pipeline.spec.xml | 1048 | 1048 | 31 | 339 | 339 | 327 | 0.323 |
| real-equivalent/040-ingest-pipeline.spec.yaml | 907 | 907 | 39 | 275 | 275 | 214 | 0.303 |
| real-equivalent/040-ingest-pipeline.todo.flow.yaml | 523 | 523 | 2 | 136 | 140 | 139 | 0.260 |
| real-equivalent/040-ingest-pipeline.todo.json | 569 | 569 | 14 | 154 | 159 | 142 | 0.271 |
| real-equivalent/040-ingest-pipeline.todo.md | 490 | 490 | 14 | 129 | 132 | 123 | 0.263 |
| real-equivalent/040-ingest-pipeline.todo.min.json | 509 | 509 | 2 | 123 | 123 | 133 | 0.242 |
| real-equivalent/040-ingest-pipeline.todo.strict.md | 447 | 447 | 3 | 114 | 117 | 119 | 0.255 |
| real-equivalent/040-ingest-pipeline.todo.tab.toon | 514 | 514 | 11 | 155 | 158 | 131 | 0.302 |
| real-equivalent/040-ingest-pipeline.todo.toon | 507 | 507 | 11 | 146 | 149 | 138 | 0.288 |
| real-equivalent/040-ingest-pipeline.todo.xml | 817 | 817 | 30 | 257 | 263 | 235 | 0.315 |
| real-equivalent/040-ingest-pipeline.todo.yaml | 536 | 536 | 13 | 148 | 153 | 139 | 0.276 |
| real-equivalent/050-alerts.spec.flow.yaml | 557 | 557 | 2 | 166 | 166 | 169 | 0.298 |
| real-equivalent/050-alerts.spec.json | 747 | 747 | 43 | 235 | 235 | 171 | 0.315 |
| real-equivalent/050-alerts.spec.md | 551 | 551 | 39 | 168 | 164 | 152 | 0.305 |
| real-equivalent/050-alerts.spec.min.json | 548 | 548 | 2 | 149 | 143 | 160 | 0.272 |
| real-equivalent/050-alerts.spec.strict.md | 466 | 466 | 10 | 142 | 142 | 143 | 0.305 |
| real-equivalent/050-alerts.spec.tab.toon | 516 | 516 | 13 | 172 | 168 | 142 | 0.333 |
| real-equivalent/050-alerts.spec.toon | 508 | 508 | 13 | 162 | 159 | 153 | 0.319 |
| real-equivalent/050-alerts.spec.xml | 712 | 712 | 24 | 248 | 248 | 235 | 0.348 |
| real-equivalent/050-alerts.spec.yaml | 614 | 614 | 32 | 204 | 204 | 156 | 0.332 |
| real-equivalent/050-alerts.todo.flow.yaml | 447 | 447 | 2 | 123 | 127 | 125 | 0.275 |
| real-equivalent/050-alerts.todo.json | 493 | 493 | 14 | 141 | 146 | 128 | 0.286 |
| real-equivalent/050-alerts.todo.md | 414 | 414 | 14 | 116 | 119 | 108 | 0.280 |
| real-equivalent/050-alerts.todo.min.json | 433 | 433 | 2 | 110 | 110 | 119 | 0.254 |
| real-equivalent/050-alerts.todo.strict.md | 371 | 371 | 3 | 101 | 104 | 104 | 0.272 |
| real-equivalent/050-alerts.todo.tab.toon | 438 | 438 | 11 | 142 | 145 | 116 | 0.324 |
| real-equivalent/050-alerts.todo.toon | 431 | 431 | 11 | 133 | 136 | 123 | 0.309 |
| real-equivalent/050-alerts.todo.xml | 741 | 741 | 30 | 244 | 250 | 220 | 0.329 |
| real-equivalent/050-alerts.todo.yaml | 460 | 460 | 13 | 135 | 140 | 125 | 0.293 |
| real-equivalent/report-sample.flow.yaml | 250 | 250 | 2 | 71 | 72 | 82 | 0.284 |
| real-equivalent/report-sample.json | 332 | 332 | 23 | 110 | 111 | 83 | 0.331 |
| real-equivalent/report-sample.md | 243 | 243 | 16 | 67 | 67 | 72 | 0.276 |
| real-equivalent/report-sample.min.json | 249 | 249 | 2 | 65 | 62 | 77 | 0.261 |
| real-equivalent/report-sample.strict.md | 203 | 203 | 7 | 60 | 60 | 69 | 0.296 |
| real-equivalent/report-sample.tab.toon | 231 | 231 | 9 | 74 | 74 | 75 | 0.320 |
| real-equivalent/report-sample.toon | 226 | 226 | 9 | 70 | 70 | 77 | 0.310 |
| real-equivalent/report-sample.xml | 281 | 281 | 10 | 97 | 97 | 103 | 0.345 |
| real-equivalent/report-sample.yaml | 257 | 257 | 16 | 84 | 85 | 73 | 0.327 |
| real-generated/040-ingest-pipeline.md | 847 | 847 | 45 | 226 | 227 | 204 | 0.267 |
| real-generated/040-ingest-pipeline.TODO.md | 401 | 401 | 13 | 99 | 100 | 99 | 0.247 |
| real-generated/050-alerts.md | 586 | 586 | 38 | 167 | 166 | 147 | 0.285 |
| real-generated/050-alerts.TODO.md | 321 | 321 | 13 | 84 | 85 | 83 | 0.262 |
| real-generated/report-sample.md | 284 | 284 | 17 | 80 | 79 | 78 | 0.282 |
| real/000-base.md | 4668 | 4668 | 110 | 1089 | 1081 | 1183 | 0.233 |
| real/000-base.TODO.md | 1955 | 1951 | 26 | 440 | 438 | 487 | 0.225 |
| real/010-weekly-summary.md | 4556 | 4550 | 124 | 1110 | 1107 | 1178 | 0.244 |
| real/010-weekly-summary.TODO.md | 1670 | 1664 | 25 | 376 | 376 | 423 | 0.225 |
| real/011-weekly-summary-ralph.md | 3267 | 3251 | 80 | 800 | 797 | 864 | 0.245 |
| real/011-weekly-summary-ralph.TODO.md | 1389 | 1385 | 23 | 317 | 316 | 352 | 0.228 |
| real/020-release-verification.md | 5253 | 5197 | 154 | 1263 | 1274 | 1343 | 0.240 |
| real/020-release-verification.TODO.md | 1795 | 1790 | 26 | 387 | 389 | 447 | 0.216 |
| real/030-ui-dashboard.md | 4131 | 4109 | 133 | 1078 | 1075 | 1097 | 0.261 |
| real/030-ui-dashboard.TODO.md | 1605 | 1601 | 24 | 373 | 373 | 417 | 0.232 |
| real/TESTING-STACK.md | 1143 | 1143 | 25 | 284 | 279 | 308 | 0.248 |
