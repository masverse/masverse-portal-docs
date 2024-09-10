---
sidebar_class_name: hidden
---

# Ekyc

## Generate H5 Verification links

Generate H5  Ekyc link 

>**POST** 

```
API_URL/api/ekyc/verifications
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    | Name                 | Required            |  Description |
    |:--------------------:|:-------------------:|:-------------------:|
    | type       | Yes                 |        00 or 01 |
    | id_country     | Yes             | Country Code ( ISO-3166 alpha-3 format) |     
    | id_type   | Yes | ID_CARD or PASSPORT |
    | redirect_url   | Yes | link to redirect after completion |

```js title="Sample result"
{
{
    "status": 200,
    "result": {
        "url": "http://localhost:3001?token=4KK6FYHVZ...",
        "token": "4KK6FYHVZ..."
    }
}
}
```

<br/>

## Get Ekyc Verification

Get the Ekyc Details

>**GET** 

```
API_URL/api/ekyc/verifications/{token}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***



```js title="Sample result"
{
    "status": 200,
    "result" : {
        "is_success": true,
        "verification": {
            "id": 8,
            "organisation_id": 31,
            "type": "00",
            "token": "4KK6FYHVZVN1OD9ZZK219XM0W57UD6",
            "url": "http://localhost:3001?token=4KK6FYHVZVN1OD9ZZK219XM0W57UD6",
            "redirect_url": "https://localhost",
            "medias": null,
            "ocr_country": "MYS",
            "ocr_type": "ID_CARD",
            "ocr_success": 0,
            "ocr_result": null,
            "face_id_success": 0,
            "face_id_result": null,
            "is_success": 0,
            "latest_error": null,
            "retries": 0,
            "expire_at": "2024-09-10T08:16:31.000Z",
            "created_at": "2024-09-10T08:01:31.000Z",
            "updated_at": "2024-09-10T08:01:31.000Z"
        }
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
