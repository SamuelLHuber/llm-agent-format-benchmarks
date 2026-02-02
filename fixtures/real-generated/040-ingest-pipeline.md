# 040 Ingest Pipeline

## Goals
- Accept batch uploads over HTTP
- Validate schema and store in queue
- Expose status and error details
- Support retry on transient failures

## Non-goals
- No UI or admin portal
- No multi-tenant isolation
- No realtime streaming

## Requirements
### API
- POST /ingest
- GET /ingest/:id
- GET /_health

### Behavior
- 202 on accept, 400 on validation error
- idempotent 24h by client-provided id
- max payload 5MB
- retries: 3x exponential backoff

### Observability
- structured logs
- otel traces
- metrics: ingest.count, ingest.fail

## Config
- PORT
- LOG_LEVEL
- INGEST_MAX_BYTES
- INGEST_IDEMPOTENCY_HOURS

## Acceptance
- Duplicate request within window ignored
- Validation error contains field + reason
- Trace spans for ingest pipeline

## Assumptions
- Single region
- At-least-once delivery upstream
