---
sidebar_position: 3
---

# Rate Limit

Rate limiting is a crucial mechanism implemented to manage the flow of incoming requests to our system, ensuring optimal performance, stability, and fair resource allocation.

**Staging Environment** : 50 requests/min\
**Production Environment** : 400 requests/min


When the rate limit is exceeded, the server will respond with **HTTP status code 429**, with the message **Too many requests, please try again later.** This informs clients that they have exceeded the allowed request quota and should retry their request after some time.


