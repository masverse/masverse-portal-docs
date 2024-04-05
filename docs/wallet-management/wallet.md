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

**content-type &emsp; json/application**

#### Params
```
type  : 1 | 2  -- not required

```

```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "id": 1,
            "wallet_type": 1,
            "address": "0x147f2......",
            "name": null,
        }
    ]
}
```

<br/>

## Get Wallet by ID

Retrieves a specific wallet record by its ID from the database.

>**GET** 

```
API_URL/api/wallet/wallet/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; json/application**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id" : 1,
        "entity_id": 1,
        "address": "0x147f20........",
        "name": null,
    }
}
```

<br/>

## Create Wallet 

Creates an wallet by organisation id and storing it in MasChain.

>**POST** 

```
API_URL/api/wallet/wallet
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; json/application**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | entity_id            | int             | Yes                 |
    | name                 | string          | No                  |
    | entity               | object          | No                  |
    | wallet_category_id   | array           | No                  |

```js title="Sample request"
{
       "entity_id" : 1,
       "name":"test",
       "entity":{
           "name":"test ",
           "external_id":"yyyy",
           "entity_category_id":[1]
       },
    "wallet_category_id" : [1]
}
```

```js title="Sample result"
{
    "status": 200,
     "result": {
        "id" : 1,
        "entity_id": 1,
        "address": "0x147f20........",
        "name": null,
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

**content-type &emsp; json/application**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | entity_id            | int             | Yes                 |
    | name                 | string          | Yes                 |
    | entity               | object          | No                  |
    | wallet_category_id   | array           | No                  |

```js title="Sample request"
{
       "entity_id" : 1,
       "name":"123",
       "entity":{
           "name":"Jason",
           "external_id":"fgbfg",
           "entity_category_id":[1]
       },
    "wallet_category_id" : [1]
}
```

```js title="Sample result"
{
    "status": 200,
     "result": {
        "id" : 1,
        "entity_id": 1,
        "address": "0x147f20........",
        "name": null,
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

**content-type &emsp; json/application**

```js title="Sample result"
{
    "status": 200,
     "result": {
        "id" : 1,
        "entity_id": 1,
        "address": "0x147f20........",
        "name": null,
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

**content-type &emsp; json/application**

```js title="Sample result"
{
    "status": 200,
     "result": {
        "id" : 1,
        "entity_id": 1,
        "address": "0x147f20........",
        "name": null,
    }
}
```

<br/>

## Delete Wallet by ID

Delete wallet by id.

>**DELETE** 

```
API_URL/api/wallet/wallet/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; json/application**

```js title="Sample result"
{
    "status": 200,
    "result": "Success"
}
```

<br/>

## Create User 

Creates a User and storing it in MasChain.

>**POST** 

```
API_URL/api/wallet/create-user
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; json/application**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | name                 | string          | Yes                 |
    | email                | string          | Yes                 |
    | ic                   | string          | Yes                 |
    | entity_id            | int             | No                  |

```js title="Sample request"
{
    "name":"test name2",
    "email":"testemail9@gmail.com",
    "ic":"test ic",
    "entity_id":1
}
```

```js title="Sample result"
{
    "status": 200,
    "user": {
        "name": "test name2",
        "ic": "9505....",
        "email": "xxx@gmail.com",
        'wallets' : {
            "id" : 1,
            "address": "0x147f20........",
            "name": null,
        }
    }
}
```
<br/>