---
sidebar_position: 2
---

# Calling APIs

## Use API keys to authenticate API requests.

Maschain authenticates your API requests using your account’s API keys. If a request doesn’t include a valid key, Maschain returns an invalid request error. If a request includes a deleted or expired key, Maschain returns an authentication error.

Go to Enterprise Portal **API Service** to create, activate, and deactivate API keys. To access your API keys, select the API Keys tab in your Dashboard.


## Example
```shell
curl -X GET \
  -H "client_id: AXCD..." \
  -H "client_secret: ACXS..." \
  $URL
```