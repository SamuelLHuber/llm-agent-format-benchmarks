id: idempotency
v: 1
st: blocked
work:
- Added request header parsing
- Added in-memory dedupe map
- Added tests for duplicate delivery
files:
- src/server.ts
- src/idempotency.ts
- tests/idempotency.test.ts
tests:
- bun test tests/idempotency.test.ts
- bun run typecheck
issues:
- Need persistent store for dedupe; in-memory fails restart case
- Spec unclear on delivery id header for non-GitHub providers
next:
- Confirm required header name(s)
- Decide store backend for dedupe
