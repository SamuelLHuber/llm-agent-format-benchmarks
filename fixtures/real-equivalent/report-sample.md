id: enqueue-run
v: 1
st: blocked
work:
- Added route handler
- Added tests for 202 response
files:
- src/server.ts
- tests/run.test.ts
tests:
- bun test tests/run.test.ts
issues:
- Need queue adapter configuration
next:
- Decide queue backend
