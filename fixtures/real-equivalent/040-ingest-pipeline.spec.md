id: 040
v: 1
t: Ingest Pipeline

goals:
- Accept batch uploads over HTTP
- Validate schema and store in queue
- Expose status and error details
- Support retry on transient failures

non-goals:
- No UI or admin portal
- No multi-tenant isolation
- No realtime streaming

req.api:
- POST /ingest
- GET /ingest/:id
- GET /_health

req.behavior:
- 202 on accept, 400 on validation error
- idempotent 24h by client-provided id
- max payload 5MB
- retries: 3x exponential backoff

req.obs:
- structured logs
- otel traces
- metrics: ingest.count, ingest.fail

cfg:
- PORT
- LOG_LEVEL
- INGEST_MAX_BYTES
- INGEST_IDEMPOTENCY_HOURS

accept:
- Duplicate request within window ignored
- Validation error contains field + reason
- Trace spans for ingest pipeline

assume:
- Single region
- At-least-once delivery upstream
