# 050 Alerts

## Goals
- Detect failed runs and notify webhook
- Provide retry with backoff
- Include context payload and links

## Non-goals
- No email/SMS providers
- No UI configuration

## Requirements
### API
- POST /alerts
- GET /alerts/:id
- GET /_health

### Behavior
- 202 on accept
- 5 retries over 15 minutes
- idempotent 6h

### Observability
- otel traces
- logs include alert_id

## Config
- ALERTS_WEBHOOK_URL
- ALERTS_RETRY_LIMIT
- ALERTS_RETRY_BACKOFF_MS

## Acceptance
- Alerts are retried on 5xx
- Duplicate alert ids ignored

## Assumptions
- Single destination URL
