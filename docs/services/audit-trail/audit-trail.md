---
sidebar_position: 3
---

# Audit Trail

## Get Audit Trails list

Retrieves all audit trail records for an organization from the database.

>**GET** 

```
API_URL/api/audit/audit?category={id}&tag={id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params 
    | Name                 | Required            |
    |:--------------------:|:-------------------:|
    | category       | No                 |
    | tag     | No                 |

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
            "transactionHash": "0x53943ca80435fff4f155b0d0bee...",
            "created_at": "2024-03-01T03:34:32.000000Z",
            "categories": [],
            "tags": []
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

**content-type &emsp; application/json***

With File <br/>
**content-type &emsp; multipart/form-data***

#### BODY
| Name  | Type  | Required |
| :----: | :----: | :-----------: |
|  wallet_address | string  | Yes|
|  contract_address | string  | Yes|
|  metadata |  any | Yes |
|  callback_url | url  | Yes |
|  category_id | array  | No |
|  tag_id |  array | No |
|  file |  file | No |



```js title="Sample request"
{
    "category_id":[1,5],
    "tag_id":[5,6],
    "contract_address":"0xc02161D9e08E620...",
    "metadata":{"name" : "xxxxxxxx","data" : "yyyyyyyy","entity_id" : "zzzzzzzzz","content" : "wwwwwwwwwwww"},
    "wallet_address":"0x40095850F2bb577b3644...",
    "file":"file",
    "callback_url": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "transactionHash": "0xa0cc4dbc19a28ef46cd1cfdd.....",
        "nonce": 40,
        "status": "pending",
        "metadatahash": "$2y$12$6rZ/lZXIMdHcTKrF5q6Ci.VCqkBEdoZQqIntv0MKnQb8iLPONYm9W",
        "metadata": "{\"name\" : \"xxxxxxxx\",\"data\" : \"yyyyyyyy\",\"entity_id\" : \"zzzzzzzzz\",\"content\" : \"wwwwwwwwwwww\"}",
        "form": "0x40095850F2bb577b3..."

    }
}
```
<br/>

## Get Audit Transactions

Get success Audit Transactions

>**GET** 

```
API_URL/api/audit/get-audit-transaction
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### Params
    | Name                 | Type            | Required            | Description         |
    |:--------------------:|:---------------:|:-------------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |                     |
    | contract_address     | string          | Yes                 |                     |
    | filter               | string          | Yes                  | "to" , "from" or "to\|from"      |
    | status               | string          | No                  | "success" , "pending" or "fail" , default return all status       |


```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "to": "0xED7cfE6FaBA7070Ae4ed2A...",
            "from": "0x6C8C08029D80445DF1...",
            "blockNumber": 2769746,
            "transactionHash": "0x1165c4353bc030205a203f100b6...",
            "method": "mint"
        }
    ],
    "pagination": {
        "current_page": 1,
        "first_page_url": "/api/get-audit-transaction?page=1",
        "last_page": 1,
        "last_page_url": "/api/get-audit-transaction?page=1",
        "next_page_url": null,
        "per_page": 20,
        "prev_page_url": null,
        "total": 1
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
        "id": 11,
        "organisation_id": 2,
        "metadata": "{\"name\" : \"xxxxxxxx\",\"data\" : \"yyyyyyyy\",\"entity_id\" : \"zzzzzzzzz\",\"content\" : \"wwwwwwwwwwww\"}",
        "file": null,
        "metadatahash": "$2y$12$6rZ/lZXIMdHcTKrF5q6Ci.VCqkBEdoZQqIntv0MKnQb8iLPONYm9W",
        "transactionHash": "0xa0cc4dbc19a28ef46cd1cfdd...",
        "created_at": "2024-07-26T17:25:17.000000Z",
        "categories": [],
        "tags": []
    }
}
```
<br/>
