id: 050
v: 1
tdd: true
dod:
- bun test
- bun run typecheck

tasks:
- enqueue | Write tests for /alerts enqueue; then implement. | Tests pass
- retry | Write tests for retry schedule; then implement. | Tests pass
- idempotency | Write tests for idempotency 6h; then implement. | Tests pass
- get | Write tests for GET /alerts/:id; then implement. | Tests pass
- logging | Add logging fields and tests. | Tests pass
