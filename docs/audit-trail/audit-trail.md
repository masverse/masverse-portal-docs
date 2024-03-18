---
sidebar_position: 2
---

# Audit Trail

## Get Audit Trails list

Retrieves all audit trail records for an organization from the database.

>**GET** 

```
{{base_url}}/audit/audit
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "id": 14,
            "organisation_id": 1,
            "metadata": "{\"name\":\"xxxxxxxx\",\"data\":\"yyyyyyyy\",\"entity_id\":\"zzzzzzzzz\",\"content\":\"wwwwwwwwwwww\"}",
            "file": "file",
            "metadatahash": "$2y$12$FRatvUHwhnpagErZdlpg4uRYYQ5np4o9xep0.AiqEMhzEvJRRE2Qi",
            "transactionhashId": "0x53943ca80435fff4f155b0d0beef17808c9b10c9d5ac88756cbb67abede48486",
            "created_at": "2024-03-01T03:34:32.000000Z",
            "updated_at": "2024-03-01T03:34:32.000000Z",
            "deleted_at": null
        }
    ]
}
```

<br/>

## Get Audit Trial by ID

Retrieves a specific audit trail record by its ID from the database.

>**GET** 

```
{{base_url}}/audit/audit/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 14,
        "organisation_id": 1,
        "metadata": "{\"name\":\"xxxxxxxx\",\"data\":\"yyyyyyyy\",\"entity_id\":\"zzzzzzzzz\",\"content\":\"wwwwwwwwwwww\"}",
        "file": "file",
        "metadatahash": "$2y$12$FRatvUHwhnpagErZdlpg4uRYYQ5np4o9xep0.AiqEMhzEvJRRE2Qi",
        "transactionhashId": "0x53943ca80435fff4f155b0d0beef17808c9b10c9d5ac88756cbb67abede48486",
        "created_at": "2024-03-01T03:34:32.000000Z",
        "updated_at": "2024-03-01T03:34:32.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Create Audit Trail

Creates an audit trail with category and tags, storing it in MasChain.

>**POST** 

```
{{base_url}}/audit/audit
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
{
    "category_id":[1,5],
    "tag_id":[2,3],
    "metadata":{"name" : "xxxxxxxx","data" : "yyyyyyyy","entity_id" : "zzzzzzzzz","content" : "wwwwwwwwwwww"},
    "wallet_address":"0x147f20a28739da15419AdC04e61fd83e60962683",
    "file":"file",
    "callbackUrl": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "organisation_id": 1,
        "metadata": "{\"name\":\"xxxxxxxx\",\"data\":\"yyyyyyyy\",\"entity_id\":\"zzzzzzzzz\",\"content\":\"wwwwwwwwwwww\"}",
        "metadatahash": "$2y$12$FRatvUHwhnpagErZdlpg4uRYYQ5np4o9xep0.AiqEMhzEvJRRE2Qi",
        "transactionhashId": "0x53943ca80435fff4f155b0d0beef17808c9b10c9d5ac88756cbb67abede48486",
        "file": "file",
        "updated_at": "2024-03-01T03:34:32.000000Z",
        "created_at": "2024-03-01T03:34:32.000000Z",
        "id": 14
    }
}
```
<br/>

## Get Audit Trail Metadata

Reads metadata from MasChain.

>**GET** 

```
{{base_url}}/audit/audit-tx
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
{
    "transactionhashId":"0x53943ca80435fff4f155b0d0beef17808c9b10c9d5ac88756cbb67abede48486"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": "$2y$12$FRatvUHwhnpagErZdlpg4uRYYQ5np4o9xep0.AiqEMhzEvJRRE2Qi"
}
```

<br/>
