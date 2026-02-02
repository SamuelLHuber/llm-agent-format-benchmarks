id: 050
v: 1
t: Alerts

goals:
- Detect failed runs and notify webhook
- Provide retry with backoff
- Include context payload and links

non-goals:
- No email/SMS providers
- No UI configuration

req.api:
- POST /alerts
- GET /alerts/:id
- GET /_health

req.behavior:
- 202 on accept
- 5 retries over 15 minutes
- idempotent 6h

req.obs:
- otel traces
- logs include alert_id

cfg:
- ALERTS_WEBHOOK_URL
- ALERTS_RETRY_LIMIT
- ALERTS_RETRY_BACKOFF_MS

accept:
- Alerts are retried on 5xx
- Duplicate alert ids ignored

assume:
- Single destination URL
