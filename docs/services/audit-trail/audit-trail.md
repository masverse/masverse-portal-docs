---
sidebar_position: 3
---

# Audit Trail

## Get Audit Trails list

Retrieves all audit trail records for an organization from the database.

>**GET** 

```
API_URL/api/audit/audit
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
            "transactionhashId": "0x53943ca80435fff4f155b0d0bee...",
            "created_at": "2024-03-01T03:34:32.000000Z",
            "updated_at": "2024-03-01T03:34:32.000000Z",
            "deleted_at": null
        }
    ]
}
```

<br/>

## Get Audit Trial by Transaction ID

Retrieves a specific audit trail record by its ID from the database.

>**GET** 

```
API_URL/api/audit/audit/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

```js title="Sample result"
{
    "status": 200,
    "result": {
        "transactionHash": "0x2da075d49a7ffb9ae491abbdfea32e4b....",
        "nonce": 39,
        "status": "pending",
        "metadatahash": "$2y$12$2OHVfoc/2ZdZSwEU.1mzEe2LUrexmlGBh8.E295LJqPs2KrihfAT.",
        "metadata": "{\"name\" : \"xxxxxxxx\",\"data\" : \"yyyyyyyy\",\"entity_id\" : \"zzzzzzzzz\",\"content\" : \"wwwwwwwwwwww\"}",
        "form": "0x40095850F2bb577b364..."
    }
}
```

<br/>

## Create Audit Trail

Creates an audit trail with category and tags, storing it in MasChain.

>**POST** 

```
API_URL/api/audit/audit
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
| Name  | Type  | Required |
| :----: | :----: | :-----------: |
|  wallet_address | string  | Yes|
|  contract_address | string  | Yes|
|  metadata |  any | Yes |
|  callbackUrl | url  | Yes |
|  category_id | array  | No |
|  tag_id |  array | No |
|  file |  file | No |



```js title="Sample request"
{
    "category_id":[1,5],
    "tag_id":[5,6],
    "contract_address":"0xc02161D9e08E620dD1B9a243Fa8BdA82acCB9df4",
    "metadata":{"name" : "xxxxxxxx","data" : "yyyyyyyy","entity_id" : "zzzzzzzzz","content" : "wwwwwwwwwwww"},
    "wallet_address":"0x40095850F2bb577b364414af444EdFcCa3324322",
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
        "transactionhashId": "0x53943ca80435fff4f155b0d0bee...",
        "file": "file",
        "updated_at": "2024-03-01T03:34:32.000000Z",
        "created_at": "2024-03-01T03:34:32.000000Z",
        "id": 14
    }
}
```
<br/>


## Update Audit Trail by Transaction ID

UPDATE an audit trail with category and tags

>**PUT** 

```
API_URL/api/audit/audit/{id}
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
| Name  | Type  | Required |
| :----: | :----: | :-----------: |
|  wallet_address | string  | Yes|
|  contract_address | string  | Yes|
|  category_id | array  | No |
|  tag_id |  array | No |



```js title="Sample request"
{
    "category_id":[1,5],
    "tag_id":[5,6],
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "organisation_id": 1,
        "metadata": "{\"name\":\"xxxxxxxx\",\"data\":\"yyyyyyyy\",\"entity_id\":\"zzzzzzzzz\",\"content\":\"wwwwwwwwwwww\"}",
        "metadatahash": "$2y$12$FRatvUHwhnpagErZdlpg4uRYYQ5np4o9xep0.AiqEMhzEvJRRE2Qi",
        "transactionhashId": "0x53943ca80435fff4f155b0d0bee...",
        "file": "file",
        "updated_at": "2024-03-01T03:34:32.000000Z",
        "created_at": "2024-03-01T03:34:32.000000Z",
        "id": 14
    }
}
```
<br/>
