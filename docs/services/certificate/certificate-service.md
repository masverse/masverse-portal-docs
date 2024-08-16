---
sidebar_position: 3
---

# Certificate 

## Get Smart Contract list

Retrieves all smart contract records for an organization.

>**GET** 

```
API_URL/api/certificate/get-smart-contract
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
            "transactionHash" : "0xf519ba69ba0e60351...."
            "contract_address": "0xab3379af6e256063b....",
        },
        {
            "transactionHash" : "0xf519ba6s85786f5ad1..."
            "contract_address": "0x49DbCCC560CE46A582...",
        }
    ]
}
```

<br/>

## Get Smart Contract by contract address

Retrieves all smart contract records for an organization.

>**GET** 

```
API_URL/api/certificate/get-smart-contract/{id}
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
        "name": "Maschain",
        "symbol": "MEI"
        "logo" : "image.pdf"
    },
}
```

<br/>

## Create Smart Contract

Create New Certificate Smart Contract to MasChain with fields. You may also create this smart contract in the portal.
>**POST** 

```
API_URL/api/certificate/create-smartcontract
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

<br/>

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |
    | name                 | string          | Yes                 |
    | field                | object          | Yes                 |
    | callback_url          | string          | No                  |
    | image                | string          | No                  |

* ***wallet_address*** is used to deploy this smart contract and it can set a different or separate owner for this contract in the **ownerAddress** field. Be careful to set a proper owner address.
* ***name*** is just to give a nickname for the smart contract.
* ***field*** is an object that contains the required properties to create this smart contract.
    * **wallet_address_owner** : owner of the smart contract
    * **max_supply** : Total maximum supply of certificates ( max 2^256 ) *Put 0 for unlimited supply
    * **name** : Name of the certificate 
    * **symbol** : Symbol of the certificate
* ***image*** A base64 image with max size of 0.5mb
* ***callback_url*** response after data is minted into blockchain

>****IMPORTANT : Only Owner can mint certificates**

```js title="Sample request"
{
    "wallet_address":"0x3423BF219008A8D6b644b79.....", //Address used to deploy this contract
    "name" : "NFT2", //Contract Nickname
    "field":{
        "wallet_address_owner":"0x3423BF219008A8D6b644b79.....", //Owner of the Certificate contract
        "max_supply":1000, //Maximum supply 
        "name":"MasChain", //Name of Certificate
        "symbol":"MT" //Certificate Symbol
    },
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAA..."
    "callback_url": "https://postman-echo.com/post?"
}
```


```js title="Sample result"
{
    "status": 200,
    "result": {
        "status": "pending",
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1...."
    }
}
```
```js title="Sample Callback Success response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1...",
        "nonce": 752,
        "from": "0x147f20a28739da15419AdC0...",
        "status": "success"
        "receipt" : { Transaction Receipt Object }
    }
}
```

```js title="Sample Callback Fail response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1...",
        "nonce": 752,
        "from": "0x147f20a28739da15419AdC0...",
        "status": "failed"
        "message": "Error message"
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

**content-type &emsp; multipart/form-data**

**body &emsp; form-data**

#### BODY ( form-data )
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |
    | to                   | string          | Yes                 |
    | contract_address     | string          | Yes                 |
    | file                 | file            | Yes                 |
    | attributes           | json            | No                  |
    | name                 | string          | Yes                 |
    | description           | string         | Yes                 |
    | callback_url          | string         | Yes                  |


`NOTE : Attributes fields can be empty or many`

```
wallet_address        : 0x3423BF219008A8D6b644b79.....
to                    : 0xbD8992F758B4429b92D1Afc1b53aB5Bc16bD8475
contract_address      : 0xb988C69344505faf6F804A7bfcC7c81FdFb59B4c
file                  : upload an image
attributes            : [{"trait":"New Cert","value":"10001"},{"Student":"yes","value":"Chan"}]
name                  : NFT CERT
description           : NFT CERT
callback_url           : https://your.domain/
```
* ***wallet_address*** must be the owner of the smart contract.
* ***to*** is the receiver of the certificate.
* ***contract_address*** is the certificate contract address.
* ***attributes*** is the additional attribute of a certificate being minted. Could be none and not required. Also no limitation.
* ***name*** name of the certificate being minted.
* ***file*** max size of 1mb
* ***description*** description of the certificate being minted.
* ***callback_url*** response after data is minted into blockchain

<br/>

```js title="Sample result"
{
    "status": 200,
    "result": {
        "nft_token_id": 17,
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1...",
        "nonce": 752,
        "from": "0x147f20a28739da15419AdC0...",
        "receiver_wallet_address": "0x147f20a28739da15419AdC0...",
        "organisation_id": 2,
        "certificate": "https://storage.maschain.con/....../metadata/1.json",
        "certificate_image": "https://storage.maschain.con/....../image/example_image.pdf",
        "status": "pending"
    }
}
```

```js title="Sample Callback Success response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1...",
        "nonce": 752,
        "from": "0x147f20a28739da15419AdC0...",
        "status": "success"
        "receipt" : { Transaction Receipt Object }
    }
}
```

```js title="Sample Callback Fail response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1...",
        "nonce": 752,
        "from": "0x147f20a28739da15419AdC0...",
        "status": "failed"
        "message": "Error message"
    }
}
```
<br/>

## Get Certificate

Get Certificate details. Parameter can be null.

>**GET** 

```
API_URL/api/certificate/get-certificate?from={address}&to={address}&contract_address={address}&transaction_id={tx_id}&status={status}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

#### Params 
    | Name                 | Required            |
    |:--------------------:|:-------------------:|
    | from                 | No                 |
    | to                   | No                 |
    | contract_address     | No                 |
    | tx_id                | No                 |
    | status               | No                 |

```
from                  : 0x3PLABF2maSAE8D6Fb6g4edf.....
to                    : 0x3423BF219008A8D6b644b79.....
contract_address      : 0xb988C69344505faf....
tx_id                 : 0x3b1d66bd24a7614db9....
status                : success or fail or pending , default success
```



```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "from_wallet": "0xeC986877959353dD4...",
            "to_wallet": "0xD6C0868b79A0Fcb50...",
            "is_mint": 1,
            "blockNumber": 2805251,
            "nft_token_id": 1,
            "transactionHash": "0x19801b1d1fad1ce549b9a8af239ed865cd1a0ecb1bf65824651c26735e82d1c2",
            "certificate_image_file": null,
            "certificate_file": "1.json",
            "created_at": "2024-07-27T06:30:40.000000Z",
            "token": {
                "contract_address": "0x5DFE5cbC5E56E7....",
                "name": "Chain",
                "symbol": "CC",
                "logo": "0e8951ba31014bdfbb9fa62e4b6b8ad720240727212548.png"
            }
        },
    ]
}
```

<br/>

## Get Certificate Transactions

Get success Certificate Transactions

>**GET** 

```
API_URL/api/token/get-certificate-transaction
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
            "method": "mint",
            "token": {
                "contract_address": "0x0d4987628e0a736...",
                "name": "Certificate",
                "symbol": "CERT"
            },
            "timestamp": "2024-07-24T19:20:09.000000Z"
        }
    ],
    "pagination": {
        "current_page": 1,
        "first_page_url": "/api/get-token-transaction?page=1",
        "last_page": 1,
        "last_page_url": "/api/get-token-transaction?page=1",
        "next_page_url": null,
        "per_page": 20,
        "prev_page_url": null,
        "total": 1
    }
}
```
<br/>


## Transfer Ownership

Transfer ownership to another wallet address

>**POST** 

```
API_URL/api/certificate/owner-transfer
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |----------------------|-----------------|---------------------|
    | wallet_address       | string          | Yes                 |
    | to                   | string          | Yes                 |
    | contract_address     | string          | Yes                 |
    | callback_url          | string          | No                  |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da1.....",
    "to":"0xbD8992F758B4429b92D1Af....",
    "contract_address":"0x4175a3EE7fbD167EAd1a.....",
    "callback_url": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": "success",
    "result": {
        "requestId": "118628",
        "from": "0xC5477130AB175674ce.....",
        "nonce": 4,
        "transactionHash": "0x5ce8fd99c9a1656d0c1005a36e8073ca1568d3dc....",
        "status": 1
    }
}
```

<br/>