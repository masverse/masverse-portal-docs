---
sidebar_position: 4
---

# Smart Contract Webhook

**Note: A maximum of 3 webhooks is allowed per project version.

## List Smart Contract Webhooks

List Smart Contract Webhooks

>**GET** 

```
API_URL/api/contract/projects/{projectSlug}/versions/{versionSlug}/webhooks
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "result": [
        {
            "id": 1,
            "url": "http://webhook/api/webhook-testing",
            "status": "active",
            "capture_anonymous": 0
        },
        ...
    ],
    "pagination": {
        "current_page": 1,
        "first_page_url": "http://localhost/api/contract/projects/test-project/versions/1-v101/webhooks?page=1",
        "last_page": 1,
        "last_page_url": "http://localhost/api/contract/projects/test-project/versions/1-v101/webhooks?page=1",
        "next_page_url": null,
        "per_page": 10,
        "prev_page_url": null,
        "total": 3
    },
    "message": "Success"
}
```

<br/>

## Get Smart Contract Webhook Details

Get Smart Contract Webhook Details

>**GET** 

```
API_URL/api/contract/projects/{projectSlug}/versions/{versionSlug}/webhooks/{webhookId}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "id": 1,
        "url": "http://127.0.0.1:8001/api/webhook-testing",
        "status": "active",
        "subscribed_events": [
            {
                "event": "0x7ca2ca9527391044455246730762df008a6b47bbdb5d37a890ef78394535c040",
                "contract_address": "0x22E726F2d2049BD6b7af65115590C157450F738c"
            }
        ],
        "capture_anonymous": 0
    }
}
```

<br/>

## Create Smart Contract Webhook

Create Smart Contract Webhook

**Note: A maximum of 3 webhooks is allowed per project version.

>**POST** 

```
API_URL/api/contract/projects/{projectSlug}/versions/{versionSlug}/webhooks
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |                 Name                 |             Required              |                             Description                              |
    | :----------------------------------: | :-------------------------------: | :------------------------------------------------------------------: |
    |                 url                  |                Yes                |                           The webhook url                            |
    |          capture_anonymous           |                Yes                |              Whether or not to capture anonymous event               |
    | subscribed_events.*.contract_address | Required if capture_anonymous = 0 |                  Source contract event of the event                  |
    |      subscribed_events.*.event       | Required if capture_anonymous = 0 | The event signature. Available from get project version details api. |

```js title="Sample Request"
{
    "url": "http://webhookurl",
    "capture_anonymous": 1,
    "subscribed_events": [
        {
            "contract_address": "0x7D890f63416E9f8b8c883B3d4728D1135D5BDc8E",
            "event": "0x7ca2ca9527391044455246730762df008a6b47bbdb5d37a890ef78394535c040"
        },
        ...
    ]
}
```

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "id": 12,
        "url": "http://webhookurl",
        "status": "active",
        "subscribed_events": [
            {
                "event": "0x7ca2ca9527391044455246730762df008a6b47bbdb5d37a890ef78394535c040",
                "contract_address": "0x7D890f63416E9f8b8c883B3d4728D1135D5BDc8E"
            },
            ...
        ],
        "capture_anonymous": 1
    }
}
```

<br/>

## Update Smart Contract Webhook

Update Smart Contract Webhook

>**PUT** 

```
API_URL/api/contract/projects/{projectSlug}/versions/{versionSlug}/webhooks/{webhookId}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |                 Name                 |             Required              |                             Description                              |
    | :----------------------------------: | :-------------------------------: | :------------------------------------------------------------------: |
    |                 url                  |                Yes                |                           The webhook url                            |
    |          capture_anonymous           |                Yes                |              Whether or not to capture anonymous event               |
    | subscribed_events.*.contract_address | Required if capture_anonymous = 0 |                  Source contract event of the event                  |
    |      subscribed_events.*.event       | Required if capture_anonymous = 0 | The event signature. Available from get project version details api. |
    |                status                |                No                 | To update the webhook status. Accepted values are: active, inactive. |

```js title="Sample Request"
{
    "url": "http://webhookurl",
    "capture_anonymous": 1,
    "subscribed_events": [
        {
            "contract_address": "0x7D890f63416E9f8b8c883B3d4728D1135D5BDc8E",
            "event": "0x7ca2ca9527391044455246730762df008a6b47bbdb5d37a890ef78394535c040"
        },
        ...
    ]
}
```

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "id": 12,
        "url": "http://webhookurl",
        "status": "active",
        "subscribed_events": [
            {
                "event": "0x7ca2ca9527391044455246730762df008a6b47bbdb5d37a890ef78394535c040",
                "contract_address": "0x7D890f63416E9f8b8c883B3d4728D1135D5BDc8E"
            },
            ...
        ],
        "capture_anonymous": 1
    }
}
```

<br/>

## Update Smart Contract Webhook Status

Update Smart Contract Webhook Status

>**PUT** 

```
API_URL/api/contract/projects/{projectSlug}/versions/{versionSlug}/webhooks/{webhookId}/status
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |  Name  | Required |                          Description                           |
    | :----: | :------: | :------------------------------------------------------------: |
    | status |   Yes    | The new webhook status. Accepted values are: active, inactive. |

```js title="Sample Request"
{
    "status": "inactive"
}
```

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "id": 12,
        "url": "http://webhookurl",
        "status": "inactive",
        "subscribed_events": [
            {
                "event": "0x7ca2ca9527391044455246730762df008a6b47bbdb5d37a890ef78394535c040",
                "contract_address": "0x7D890f63416E9f8b8c883B3d4728D1135D5BDc8E"
            },
            ...
        ],
        "capture_anonymous": 1
    }
}
```

<br/>

## Delete Smart Contract Webhook

Delete Smart Contract Webhook

>**DELETE** 

```
API_URL/api/contract/projects/{projectSlug}/versions/{versionSlug}/webhooks/{webhookId}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": null
}
```

<br/>