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

Create New Certificate Smart Contract to MasChain with fields.
>**POST** 

```
API_URL/api/certificate/create-smartcontract
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; json/application**

<br/>

#### BODY

```js title="Sample request"
{
    "wallet_address":"0x3423BF219008A8D6b644b7955a664A4452F14bF1", //Address used to deploy this contract
    "name" : "NFT2", //Contract Nickname
    "field":{
        "ownerAddress":"0x3423BF219008A8D6b644b7955a664A4452F14bF1", //Owner of the Certificate contract
        "max-supply":1000, //Maximum supply 
        "name":"Maschain", //Name of Certificate
        "symbol":"MT" //Certificate Symbol
    }
}
```
>****IMPORTANT : Only Owner can mint certificates**

* ***wallet_address*** is used to deploy this smart contract and it can set a different or separate owner for this contract in the **ownerAddress** field. Be careful to set a proper owner address.
* ***name*** is just to give a nickname for the smart contract.
* ***field*** is an object that contains the required properties to create this smart contract.
    * **ownerAddress** : owner of the smart contract
    * **max-supply** : Total maximum supply of certificates ( max 2^256 )
    * **name** : Name of the certificate 
    * **symbol** : Symbol of the certificate
<br/>

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

#### BODY ( form-data )
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
* ***wallet_address*** must be the owner of the smart contract.
* ***to*** is the receiver of the certificate.
* ***contract_address*** is the certificate contract address.
* ***attribute*** is the additional attribute of a certificate being minted. Could be none and not required. Also no limitation.
    * **attribute[0]** : **Key** of a attribute (eg. Month)
    * **attribute[0]** : **Value** of a attribute (eg. December)
* ***name*** name of the certificate being minted.
* ***description*** description of the certificate being minted.

<br/>

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

