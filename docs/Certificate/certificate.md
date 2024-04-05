---
sidebar_position: 2
---

# Certificate 

## Get Smart Contract list

Retrieves all smart contract records for an organization.

>**GET** 

```
API_URL/api/certificate/get-all-sc-list
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; json/application**

```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "contract_address": "0xab3379af6e256063b92B82071D57AB082A2b51bA",
            "name": "Certificate",
            "limit_to_org": 1
        },
        {
            "contract_address": "0x49DbCCC560CE46A582436e195576D3ea55DE72D4",
            "name": "Certificate",
            "limit_to_org": 1
        },
        {
            "contract_address": "0xb988C69344505faf6F804A7bfcC7c81FdFb59B4c",
            "name": "Certificate",
            "limit_to_org": 1
        },
        {
            "contract_address": "0x724C89385ea32B60F1776Bf5A78DbC4966451890",
            "name": "Certificate",
            "limit_to_org": 1
        }
    ]
}
```

<br/>

## Create Smart Contract

Create New Smart Contract to MasChain with field by call API_URL//api/certificate/get-deploy-field

>**POST** 

```
API_URL/api/certificate/create-smartcontract
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; json/application**

    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |
    | name                 | string          | Yes                 |
    | field                | [object](#get-deployment-field)          | Yes                 |
    | callbackUrl          | string          | No                  |

#### BODY
```js title="Sample request"
{
    "wallet_address":"0x3423BF219008A8D6b644b7955a664A4452F14bF1",
    "name" : "NFT2",
    "field":{
        "address":"0x3423BF219008A8D6b644b7955a664A4452F14bF1",
        "max-supply":1000,
        "name":"Maschain",
        "symbol":"MT"
    }
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "status": "success",
        "message": "Success contract creation"
    }
}
```

<br/>

## Mint Certificate

Mint Certificate by contract_address and storing it in MasChain.

>**POST** 

```
API_URL/api/certificate/mint-certificate
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; json/application**

**body &emsp; form-data**

    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |
    | to                   | string          | Yes                 |
    | contract_address     | string          | Yes                 |
    | file                 | file            | Yes                 |
    | attribute[0][value]  | string          | No                  |
    | attribute[0][text]   | string          | No                  |
    | attribute[1][value]  | string          | No                  |
    | attribute[2][text]   | string          | No                  |
    | name                 | string          | Yes                 |
    | decription           | string          | Yes                 |

`NOTE : Attribute fields can be empty or many`

#### BODY(form-data)
```
wallet_address        : 0x3423BF219008A8D6b644b7955a664A4452F14bF1
to                    : 0xbD8992F758B4429b92D1Afc1b53aB5Bc16bD8475
contract_address      : 0xb988C69344505faf6F804A7bfcC7c81FdFb59B4c
file                  : upload an image
attribute[0][value]   : 123
attribute[0][text]    : 123
name                  : NFT CERT
description           : NFT CERT
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "status": "success",
        "result": {
            "requestId": 128,
            "from": "0x3423BF219008A8D6b644b7955a664A4452F14bF1",
            "nonce": 114,
            "transactionHash": "0xbf6f349fd7b54dfe9b91f9725be43cec89136e39fcaeae5e48672e45e9b1b2ae",
            "status": 1
        }
    }
}
```
<br/>

## Get Certificate

Get Certificate details. Parameter can be null.

>**GET** 

```
API_URL/api/certificate/get-certificate?wallet_address=0x3423BF219008A8D6b644b7955a664A4452F14bF1&contract_address=0xb988C69344505faf6F804A7bfcC7c81FdFb59B4c&transaction_id=ds21342eds90f71fe1-6f7b-4edf-8cdd-77ce7d1afc7720240402073926.jpeg
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; json/application**

#### Params
```
wallet_address        : 0x3423BF219008A8D6b644b7955a664A4452F14bF1
contract_address      : 0xb988C69344505faf6F804A7bfcC7c81FdFb59B4c
transaction_id        : 0x3b1d66bd24a7614db9624f0018f99dcedc2d3b887422d1127e37a2d4ac3269e5

```

```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "id": 16,
            "wallet_id": 3,
            "organisation_id": 2,
            "token_id": 36,
            "nft_token_id": 16,
            "transaction_id": "0x4321e57df1f3fbebaaf82be22cb68abc13cd752f83c572a73cf2c3b1a58a30f1",
            "certificate_file": "ds21342eds2f3af8b0-3094-4337-aa76-9da12ed3c9ac20240402073524.jpeg",
            "block_number": 1130699,
            "is_mint": 1,
            "created_at": "2024-04-02T07:35:25.000000Z",
            "updated_at": "2024-04-02T07:35:30.000000Z",
            "deleted_at": null
        }
    ]
}
```

<br/>

## Get Deployment Field

Get Certificate Mint API field property

>**GET** 

```
API_URL/api/certificate/get-deploy-field
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; json/application**

    | Field Type           | Category         | Description      | 
    |:--------------------:|:---------------: |:--------------- |
    | 1                    | string           | Contain alphanumeric  | 
    | 2                    | int              | Number            |
    | 3                    | decimal          | ERC20 Decimal (Max 18)  |
    | 4                    | wallet           | Wallet Address within your organisation            |
 


```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "property": "address",
            "field_type": 4,
            "description" : "Wallet address that will be the owner of the smart contract"
        },
        {
            "property": "max-supply",
            "field_type": 2
            "description" : "Max supply available for your smart contract"
        },
        {
            "property": "name",
            "field_type": 1
            "description" : "Token name"

        },
        {
            "property": "decimal",
            "field_type": 3
            "description" : "Smart contract decimal"

        }
    ]
}
```

<br/>
