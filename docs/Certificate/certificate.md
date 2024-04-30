---
sidebar_position: 3
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

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "transactionHash" : "0xf519ba69ba0e603583e0e885786f5ad1...."
            "contract_address": "0xab3379af6e256063b92B82071D57AB082A2b51bA",
            "name": "Certificate",
            "limit_to_org": 1
        },
        {
            "transactionHash" : "0xf519ba69ba0e603583e0e885786f5ad1...."
            "contract_address": "0x49DbCCC560CE46A582436e195576D3ea55DE72D4",
            "name": "Certificate",
            "limit_to_org": 1
        }
    ]
}
```

<br/>

## Get Smart Contract by transaction hash

Retrieves all smart contract records for an organization.

>**GET** 

```
API_URL/api/certificate/contract
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "transactionHash" : "0xf519ba69ba0e603583e0e885786f5ad1...."
        "contract_address": "0xab3379af6e256063b92B82071D57AB082A2b51bA",
        "name": "Certificate",
        "limit_to_org": 1
    },
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

**content-type &emsp; application/json**

<br/>

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |
    | name                 | string          | Yes                 |
    | field                | object          | Yes                 |
    | callbackUrl          | string          | No                  |

```js title="Sample request"
{
    "wallet_address":"0x3423BF219008A8D6b644b79.....", //Address used to deploy this contract
    "name" : "NFT2", //Contract Nickname
    "field":{
        "wallet_address_owner":"0x3423BF219008A8D6b644b79.....", //Owner of the Certificate contract
        "max_supply":1000, //Maximum supply 
        "name":"Maschain", //Name of Certificate
        "symbol":"MT" //Certificate Symbol
    },
    "callbackUrl": "https://postman-echo.com/post?"
}
```
>****IMPORTANT : Only Owner can mint certificates**

* ***wallet_address*** is used to deploy this smart contract and it can set a different or separate owner for this contract in the **ownerAddress** field. Be careful to set a proper owner address.
* ***name*** is just to give a nickname for the smart contract.
* ***field*** is an object that contains the required properties to create this smart contract.
    * **wallet_address_owner** : owner of the smart contract
    * **max_supply** : Total maximum supply of certificates ( max 2^256 )
    * **name** : Name of the certificate 
    * **symbol** : Symbol of the certificate
* ***callbackUrl*** response after data is minted into blockchain
<br/>

```js title="Sample result"
{
    "status": 200,
    "result": {
        "status": "success",
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1...."
    }
}
```
```js title="Sample Callback Success response"
{
    "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1....",
    "wallet_address": "0x147f20a28739da15419AdC04e61....",
    "block_number" : 1001
    'contract_address' : "0xf519ba69ba0e6035.....",
    "status": "success"
}
```

```js title="Sample Callback Fail response"
{
    "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1....",
    "status": "failed"
    "message": "Error message"
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
    | attributes[0][value]  | string          | No                  |
    | attributes[0][text]   | string          | No                  |
    | attributes[1][value]  | string          | No                  |
    | attributes[2][text]   | string          | No                  |
    | name                 | string          | Yes                 |
    | decription           | string          | Yes                 |
    | callbackUrl          | string          | No                 |


`NOTE : Attributes fields can be empty or many`

```
wallet_address        : 0x3423BF219008A8D6b644b79.....
to                    : 0xbD8992F758B4429b92D1Afc1b53aB5Bc16bD8475
contract_address      : 0xb988C69344505faf6F804A7bfcC7c81FdFb59B4c
file                  : upload an image
attributes[0][value]   : 123
attributes[0][text]    : 123
name                  : NFT CERT
description           : NFT CERT
callbackUrl           : https://your.domain/
```
* ***wallet_address*** must be the owner of the smart contract.
* ***to*** is the receiver of the certificate.
* ***contract_address*** is the certificate contract address.
* ***attributes*** is the additional attribute of a certificate being minted. Could be none and not required. Also no limitation.
    * **attributes[0]** : **Key** of a attribute (eg. Month)
    * **attributes[0]** : **Value** of a attribute (eg. December)
* ***name*** name of the certificate being minted.
* ***description*** description of the certificate being minted.
* ***callbackUrl*** response after data is minted into blockchain

<br/>

```js title="Sample result"
{
    "status": 200,
    "result": {
        "nft_token_id": 17,
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad19dbc0c295d09b4027fd3406d30759df8",
        "nonce": 752,
        "from": "0x147f20a28739da15419AdC04e61fd83e60962683",
        "receiver_wallet_address": "0x147f20a28739da15419AdC04e61fd83e60962683",
        "organisation_id": 2,
        "certificate": "https://maschain-staging.obs.ap-southeast-3.myhuaweicloud.com/15e7ce3a2fa248889ce17320dcf26676/metadata/17.json",
        "certificate_image": "https://maschain-staging.obs.ap-southeast-3.myhuaweicloud.com/15e7ce3a2fa248889ce17320dcf26676/image/4643ce2433774554aeeda92d0851133420240411074630.pdf",
        "status": "pending"
    }
}
```

```js title="Sample Callback Success response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad19dbc0c295d09b4027fd3406d30759df8",
        "nonce": 752,
        "from": "0x147f20a28739da15419AdC04e61fd83e60962683",
        "status": "success"
        "receipt" : { Transaction Receipt Object }
    }
}
```

```js title="Sample Callback Fail response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad19dbc0c295d09b4027fd3406d30759df8",
        "nonce": 752,
        "from": "0x147f20a28739da15419AdC04e61fd83e60962683",
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
API_URL/api/certificate/get-certificate?wallet_address=0x3423BF219008A8D6b644b79.....&contract_address=0xb988C69344505faf6F804A7bfcC7c81FdFb59B4c&transaction_id=ds21342eds90f71fe1-6f7b-4edf-8cdd-77ce7d1afc7720240402073926.jpeg
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

#### Params
```
wallet_address        : 0x3423BF219008A8D6b644b79.....
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
            "wallet_address": '0x40848317995B5702.....',
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
    | callbackUrl          | string          | No                  |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da1.....",
    "to":"0xbD8992F758B4429b92D1Af....",
    "contract_address":"0x4175a3EE7fbD167EAd1a.....",
    "callbackUrl": "https://postman-echo.com/post?"
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