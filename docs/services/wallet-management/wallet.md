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

#### Params
```
type 1 : organisation
type 2 : end_user

```

```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "id": 1,
            "wallet_type": 'organisation',
            "address": "0x147f2......",
            "name": null,
        }
    ]
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
        "id" : 1,
        "entity_id": 1,
        "address": "0x147f20........",
        "name": null,
        "is_active" : 1,
        'wallet_type' : 'end_user',
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
    "name":"test",
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 1,
        "address": "0xF821eaD377B6689D25.....",
        "name": "test",
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
    | ic                   | string          | no                  |
    | wallet_name          | string          | No                  |
    | phone                | string          | No                  |
    | entity_id            | int             | No                  |
    | entity_category_id   | int             | No                  |

```js title="Sample request"
{
    "name":"test name2",
    "email":"testemail9@gmail.com",
    "ic":"test ic",
    "phone":"test ic",
    "entity_id":1
}
```

```js title="Sample result"
{
    "status": 200,
    "user": {
            "name": "Bob",
            "email": "test@gmail.com",
            "ic": "123131231",
            "phone": null
    },
    "wallet": {
        "wallet_id": 1,
        "wallet_name": "bob wallet",
        "wallet_address": "0x556283a26F5C3d7bcB9a...",
        "wallet_type": "user",
        "is_active": 1,
        "entity_id": null,
        "entity_category_id": null
    }
}
```
<br/>

## Update Wallet by ID

Update wallet by id and store to db.

>**PUT** 

```
API_URL/api/wallet/wallet/{id}
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
    "name":"update name",
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id" : 1
        "entity_id" : 1,
        "is_active": 1,
        "name":"update name",
        'wallet_type' : 'end_user',
        "address": "0x147f20........",
    }
}
```

<br/>

## Activate Wallet by ID

Activate wallet by id.

>**PUT** 

```
API_URL/api/wallet/activate-wallet/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id" : 1
        "entity_id" : 1,
        "is_active": 1,
        "name":"name",
        'wallet_type' : 'end_user',
        "address": "0x147f20........",
    }
}
```

<br/>

## Deactivate Wallet by ID

Deactivate wallet by id.

>**PUT** 

```
API_URL/api/wallet/deactivate-wallet/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id" : 1
        "entity_id" : 1,
        "is_active": 1,
        "name":"name",
        'wallet_type' : 'end_user',
        "address": "0x147f20........",
    }
}
```

<br/>

## Get Wallet Transaction Count

Retrieves the number of transaction initiated by a wallet address including pending transactions

>**GET**

```
API_URL/api/wallet/wallet/{address}/transactions-count?block=pending
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### Params
Use this endpoint to get the nonce for next transaction to execute. When use it as nonce, please query with block = "pending"
Default block values : "pending"
Supported block values: "earliest", "latest", "pending", "safe", "finalized"

```js title="Sample result"
{
    "status": 200,
    "result": {
        "transaction_count" : 1
    }
}
```