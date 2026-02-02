v=1|id=050|t=Alerts
g=Detect failed runs and notify webhook;Provide retry with backoff;Include context payload and links
ng=No email/SMS providers;No UI configuration
r.api=POST /alerts;GET /alerts/:id;GET /_health
r.beh=202 on accept;5 retries over 15 minutes;idempotent 6h
r.obs=otel traces;logs include alert_id
cfg=ALERTS_WEBHOOK_URL;ALERTS_RETRY_LIMIT;ALERTS_RETRY_BACKOFF_MS
acc=Alerts are retried on 5xx;Duplicate alert ids ignored
ass=Single destination URL
