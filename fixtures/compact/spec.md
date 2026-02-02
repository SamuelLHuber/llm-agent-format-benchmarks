id: 000
v: 1
t: Base Cron + Webhook Execution Service

goals:
- Execute webhooks
- Run scheduled jobs

non-goals:
- No UI
- No multi-tenant

req.api:
- GET /_health
- POST /webhook

req.behavior:
- async 202
- idempotent 48h

req.obs:
- otel
- loki
- sentry

cfg:
- PORT
- LOG_LEVEL
- WEBHOOK_SECRET
- OTLP_ENDPOINT
- SENTRY_DSN
- RUN_STORE
- RUN_STORE_SQLITE_PATH
- RUN_RETENTION_DAYS

accept:
- Idempotency verified
- Metrics exported

assume:
- Single region
- SQLite allowed
