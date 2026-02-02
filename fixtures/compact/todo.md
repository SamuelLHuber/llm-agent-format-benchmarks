id: 000
v: 1
tdd: true
dod:
- bun test
- bun run typecheck

tasks:
- runstore-schema | Write tests for SQLite schema; then implement. | Tests pass
- idempotency | Write tests for X-GitHub-Delivery dedupe 48h; then implement. | Tests pass
