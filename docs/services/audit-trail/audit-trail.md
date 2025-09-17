---
sidebar_position: 3
---

# Audit Trail

## Get Smart Contract list

Retrieves all smart contract records for an organization.

>**GET** 

```
API_URL/api/audit/contracts
```

#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "contract_address": "0xab3379af6e256063b....",
            "transactionHash" : "0xf519ba69ba0e60351....",
            "contract_name": "Contract 1",
            "logo_path": null
        },
        {
            "contract_address": "0x49DbCCC560CE46A582...",
            "transactionHash" : "0xf519ba69ba0e60351....",
            "contract_name": "Contract 2",
            "logo_path": null
        }
    ]
}
```

## Get Smart Contract by contract address

Retrieves all smart contract records for an organization.

>**GET** 

```
API_URL/api/audit/contracts/{address}
```

#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "transactionHash" : "0xf519ba69ba0e603583e0e...."
        "contract_address": "0xab3379af6e256063b92B8...",
        "contract_name": "Test Contract",
         "logo_path": null
    },
}
```

<br/>

## Create Smart Contract

Create New Audit Trail Smart Contract to MasChain with fields. You may also create this smart contract in the portal.

>**POST** 

```
API_URL/api/audit/contracts
```

#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

<br/>

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | contract name        | string          | Yes                 |
    | field                | object          | Yes                 |
    | callback_url         | string          | No                  |

* ***name*** is just to give a nickname for the smart contract.
* ***field*** is an object that contains the required properties to create this smart contract.
    * **encrypt_data**  Encrypt data - boolean (TRUE | FALSE)
* ***callback_url*** response after data is minted into blockchain

```js title="Sample Request"
{
    "name" : "Tree #1",
    "field":{
        "encrypt_data": true
    },
    "callback_url": "https://postman-echo.com/post?"
}
```

```js title="Sample Response"
{
    "status": 200,
    "result": {
        "status": "pending",
        "message": "Contract creation in progress"
    }
}
```

```js title="Sample Callback Success Response"
{
    "status": "success",
    "from": "0x1a0BA2b4d8830496Beb8469...",
    "nonce": 129,
    "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1...",
    "receipt": { Transaction Receipt Object }
}
```

```js title="Sample Callback Fail Response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1...",
        "nonce": 752,
        "from": "0x1a0BA2b4d8830496Beb8469...",
        "status": "failed"
        "message": "Error message"
    }
}
```

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
    | category             | No                  |
    | tag                  | No                  |

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
        "id": 439,
        "organisation_id": 71,
        "token_status_id": 10917,
        "metadata": "test",
        "file": null,
        "metadatahash": "$2y$12$OW5v6vG8iBbwB23SJ9iRT.QC1f.gKCH1LZvwYeoy0wuRsHEEw8y9q",
        "transactionhashId": "0x9700798dec7319a82229c33a573fb5...",
        "created_at": "2025-09-10T08:06:35.000000Z",
        "updated_at": "2025-09-10T08:06:35.000000Z",
        "deleted_at": null,
        "categories": [
            {
                "id": 1,
                "name": "Food"
            }
        ],
        "tags": [
            {
                "id": 4,
                "name": "allocate"
            }
        ]
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



```js title="Sample request"
{
    "category_id":[1,5],
    "tag_id":[5,6],
    "contract_address":"0xc02161D9e08E620...",
    "metadata":{"name" : "xxxxxxxx","data" : "yyyyyyyy","entity_id" : "zzzzzzzzz","content" : "wwwwwwwwwwww"},
    "wallet_address":"0x40095850F2bb577b3644...",
    "callback_url": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "transactionHash": "0x76578bb22a17d1fa06165570...",
        "nonce": 175,
        "status": "pending",
        "metadatahash": "$2y$12$JCdgqkB1QKI5cRHTVaQXqu2JZPMj5MH8qT6GU7vb0NR4ONjgR1i62",
        "metadata": "test",
        "form": "0x44Ce5799F1d0672e6577..."
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
            "to": null,
            "from": "0x44Ce5799F1d0672e6577C4F0038729177dB65FD7",
            "status": "success",
            "blockNumber": 8717499,
            "transactionHash": "0x899bcb62f70b9ac51da499f0bcdebbf4ec528ed37cc00596c4598b1e0ec42d6c",
            "method": "mint",
            "timestamp": "2025-09-11T04:16:05.000000Z",
            "metadata": "testing data"
        }
    ],
    "pagination": {
        "current_page": 1,
        "first_page_url": "/api/get-audit-transaction?page=1",
        "last_page": 2,"/api/get-audit-transaction?page=1",
        "next_page_url": "/api/get-audit-transaction?page=1",
        "per_page": 3,
        "prev_page_url": null,
        "total": 4
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
    "category_id":[1],
    "tag_id":[2]
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 439,
        "organisation_id": 71,
        "metadata": "test",
        "file": null,
        "metadatahash": "$2y$12$OW5v6vG8iBbwB23SJ9iRT.QC1f.gKCH1LZvwYeoy0wuRsHEEw8y9q",
        "transactionHash": "0x9700798dec7319a822...",
        "created_at": "2025-09-10T08:06:35.000000Z",
        "categories": [
            {
                "id": 1,
                "name": "test"
            }
        ],
        "tags": [
            {
                "id": 2,
                "name": "test"
            }
        ]
    }
}
```
<br/>
