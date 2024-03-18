---
sidebar_position: 2
---

# Wallet 

## Get Wallet list

Retrieves all wallet records for an organization from the database.

>**GET** 

```
{{base_url}}/api/wallet/wallet
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "id": 1,
            "entity_id": 1,
            "userable_type": "App\\Models\\Organisation",
            "userable_id": 1,
            "address": "0x147f2......",
            "private_key": "8a3e2b.......",
            "name": null,
            "is_active": 1,
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "entity": {
                "id": 1,
                "organisation_id": 1,
                "name": "entity 1",
                "external_id": "123",
                "created_at": null,
                "updated_at": null,
                "deleted_at": null
            }
        }
    ]
}
```

<br/>

## Get Wallet by ID

Retrieves a specific wallet record by its ID from the database.

>**GET** 

```
{{base_url}}/api/wallet/wallet/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 1,
        "entity_id": 1,
        "userable_type": "App\\Models\\Organisation",
        "userable_id": 1,
        "address": "0x147f20........",
        "private_key": "8a3e2bb........",
        "name": null,
        "is_active": 1,
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    }
}
```

<br/>

## Create Wallet 

Creates an wallet by organisation id and storing it in MasChain.

>**POST** 

```
{{base_url}}/api/wallet/wallet
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
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
        "entity_id": 1,
        "userable_id": 1,
        "userable_type": "App\\Models\\Organisation",
        "name": "test",
        "address": "0x4aD744........,
        "private_key": "0x2d48a........",
        "updated_at": "2024-03-01T06:45:57.000000Z",
        "created_at": "2024-03-01T06:45:57.000000Z",
        "id": 4
    }
}
```
<br/>

## Update Wallet by ID

Update wallet by id and store to db.

>**PUT** 

```
{{base_url}}/api/wallet/wallet/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
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
        "id": 1,
        "entity_id": 1,
        "userable_type": "App\\Models\\Organisation",
        "userable_id": 1,
        "address": "0x147f20........",
        "private_key": "8a3e2bb........",
        "name": "123",
        "is_active": 1,
        "created_at": null,
        "updated_at": "2024-03-01T06:47:25.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Activate Wallet by ID

Activate wallet by id.

>**PUT** 

```
{{base_url}}/api/wallet/activate-wallet/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***


```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 1,
        "entity_id": 1,
        "userable_type": "App\\Models\\Organisation",
        "userable_id": 1,
        "address": "0x147f20........",
        "private_key": "8a3e2bb........",
        "name": "123",
        "is_active": 1,
        "created_at": null,
        "updated_at": "2024-03-01T06:47:25.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Deactivate Wallet by ID

Deactivate wallet by id.

>**PUT** 

```
{{base_url}}/api/wallet/deactivate-wallet/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***


```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 1,
        "entity_id": 1,
        "userable_type": "App\\Models\\Organisation",
        "userable_id": 1,
        "address": "0x147f20........",
        "private_key": "8a3e2bb........",
        "name": "123",
        "is_active": 0,
        "created_at": null,
        "updated_at": "2024-03-01T06:51:19.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Delete Wallet by ID

Delete wallet by id.

>**DELETE** 

```
{{base_url}}/api/wallet/wallet/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***


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
{{base_url}}/api/wallet/create-user
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
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
    "result": {
        "entity_id": 1,
        "userable_id": 3,
        "userable_type": "user",
        "name": "test name2",
        "address": "0xDE02........",
        "private_key": "0x7ccf8........",
        "updated_at": "2024-03-01T06:52:25.000000Z",
        "created_at": "2024-03-01T06:52:25.000000Z",
        "id": 5
    }
}
```
<br/>