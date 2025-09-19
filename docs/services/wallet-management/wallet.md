---
sidebar_position: 2
---

# Wallet 

## Get Wallet list

Retrieves all wallet records for an organization from the database.

>**GET** 

```
API_URL/api/wallet/wallet?type=1
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

<!-- #### Params
```
type 1 : organisation
type 2 : end_user

``` -->

#### Params
    | Name                 | Input            | Required            | Description            |
    |:--------------------:|:---------------:|:-------------------:|:-------------------:|
    | type                 | 1 or 2          | No                 |1 = organisation <br/> 2 = end_user


```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "wallet_type": "organisation",
            "address": "0x44Ce5799F1d0672e657...",
            "id": 5493,
            "name": "Wallet 1",
            "is_active": 1
        },
        {
            "wallet_type": "end_user",
            "address": "0x77eAFD1BbDB0dF4d...",
            "id": 6416,
            "name": "Wallet 2",
            "is_active": 1
        }
    ],
    "pagination": {
        "current_page": 1,
        "first_page_url": "https://service-testnet.maschain.com/api/wallet/wallet?page=1",
        "last_page": 5,
        "last_page_url": "https://service-testnet.maschain.com/api/wallet/wallet?page=5",
        "next_page_url": "https://service-testnet.maschain.com/api/wallet/wallet?page=2",
        "per_page": 20,
        "prev_page_url": null,
        "total": 95
    }
}
```

<br/>

## Get Wallet by address

Retrieves a specific wallet record by its ID from the database.

>**GET** 

```
API_URL/api/wallet/wallet/{address}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 6416,
        "address": "0x77eAFD1BbDB0dF4d1A...",
        "entity_id": null,
        "name": "Wallet 1",
        "is_active": 1,
        "wallet_type": "end_user"
    }
}
```

<br/>

## Create Organisation Wallet 

Creates an wallet by organisation id and storing it in MasChain.

>**POST** 

```
API_URL/api/wallet/wallet
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | name                 | string          | yes                 |
    | wallet_category_id   | array           | No                  |
    | entity_id            | int             | No                  |
    | entity_category_id   | int             | No                  |
   

```js title="Sample request"
{
    "name":"Wallet Test"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 13239,
        "address": "0x550BD3D7363bd0Fea7...",
        "name": "Wallet Test",
        "wallet_type": "organisation",
        "is_active": 1,
        "entity_id": null,
        "entity_category_id": null
    }
}
```
<br/>

## Create User Wallet

Creates a User and storing it in MasChain.

>**POST** 

```
API_URL/api/wallet/create-user
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | name                 | string          | Yes                 |
    | email                | string          | Yes                 |
    | ic                   | string          | Yes                 |
    | wallet_name          | string          | No                  |
    | phone                | string          | No                  |
    | entity_id            | int             | No                  |
    | entity_category_id   | int             | No                  |

```js title="Sample request"
{
    "name":"User 1",
    "email":"test@email.com",
    "ic":"IC Number 123"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "wallet": {
            "wallet_id": 13240,
            "wallet_name": "User 1",
            "wallet_address": "0x815D5e471395db1...",
            "wallet_type": "user",
            "is_active": 1,
            "entity_id": null,
            "entity_category_id": null
        }
    }
}
```
<br/>

## Update Wallet by address

Update wallet by address and store to db.

>**PUT** 

```
API_URL/api/wallet/wallet/{address}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | entity_id            | int             | no                  |
    | name                 | string          | no                  |

```js title="Sample request"
{
    "entity_id" : 1,
    "name":"Update name"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 13240,
        "address": "0x815D5e471395db1779...",
        "entity_id": 1,
        "name": "Update name",
        "is_active": 1,
        "wallet_type": "end_user"
    }
}
```

<br/>

## Activate Wallet by address

Activate wallet by address.

>**PUT** 

```
API_URL/api/wallet/wallet/{address}/activate
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 13240,
        "address": "0x815D5e471395db177...",
        "entity_id": 1,
        "name": "Update name",
        "is_active": 1,
        "wallet_type": "end_user"
    }
}
```

<br/>

## Deactivate Wallet by address

Deactivate wallet by address.

>**PUT** 

```
API_URL/api/wallet/wallet/{address}/deactivate
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 13240,
        "address": "0x815D5e471395db1779c...",
        "entity_id": 1,
        "name": "Update name",
        "is_active": 0,
        "wallet_type": "end_user"
    }
}
```

<br/>

## Get Wallet Transaction Count

Retrieves the number of transaction initiated by a wallet address including pending transactions

>**GET**

```
API_URL/api/wallet/wallet/{address}/transactions-count
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### Params
```
Use this endpoint to get the nonce for next transaction to execute. When use it as nonce, please query with block = "pending"
Default block values : "pending"
Supported block values: "earliest", "latest", "pending", "safe", "finalized"
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "wallet_address" : "0x147f20.....",
        "block_type" : "pending" 
        "transaction_count" : 1
    }
}
```