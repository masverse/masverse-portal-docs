---
sidebar_position: 3
---

# Wallet Category

## Get Wallet Category list

Retrieves all wallet category records for an organization from the database.

>**GET** 

```
API_URL/api/wallet/wallet-category
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
            "id": 1,
            "organisation_id": 1,
            "name": "Johnathan 456",
            "subcategory_id": null,
            "is_active": 1,
            "created_at": "2024-03-01T03:36:37.000000Z",
            "updated_at": "2024-03-01T03:36:37.000000Z",
            "deleted_at": null
        }
    ]
}
```

<br/>

## Get Wallet Category by ID

Retrieves a specific wallet category record by its ID from the database.

>**GET** 

```
API_URL/api/wallet/wallet-category/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 1,
        "organisation_id": 1,
        "name": "Johnathan 456",
        "subcategory_id": null,
        "is_active": 1,
        "created_at": "2024-03-01T03:36:37.000000Z",
        "updated_at": "2024-03-01T03:36:37.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Create Wallet Category

Creates an wallet category by organisation id and storing it in MasChain.

>**POST** 

```
API_URL/api/wallet/wallet-category
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | name                 | string          | Yes                 |
    | subcategory_id       | int             | No                  |

```js title="Sample request"
{
    "name":"test 456",
    "subcategory_id":1
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "organisation_id": 1,
        "name": "test 456",
        "subcategory_id": 1,
        "updated_at": "2024-03-01T03:36:41.000000Z",
        "created_at": "2024-03-01T03:36:41.000000Z",
        "id": 3
    }
}
```
<br/>

## Update Wallet Category by ID

Update wallet category by id and store to db.

>**PUT** 

```
API_URL/api/wallet/wallet-category/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | name                 | string          | Yes                 |
    | subcategory_id       | int             | No                  |

```js title="Sample request"
{
    "name":"test",
    "subcategory_id":1
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "organisation_id": 1,
        "name": "test",
        "subcategory_id": 1,
        "updated_at": "2024-03-01T03:36:41.000000Z",
        "created_at": "2024-03-01T03:36:41.000000Z",
        "id": 3
    }
}
```

<br/>

## Activate Wallet Category by ID

Activate wallet category by id.

>**PUT** 

```
API_URL/api/wallet/wallet-category/{id}/activate
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 1,
        "organisation_id": 1,
        "name": "test",
        "subcategory_id": 3,
        "is_active": 1,
        "created_at": "2024-03-01T03:36:37.000000Z",
        "updated_at": "2024-03-01T03:38:07.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Deactivate Wallet Category by ID

Deactivate wallet category by id.

>**PUT** 

```
API_URL/api/wallet/wallet-category/{id}/deactivate
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 1,
        "organisation_id": 1,
        "name": "test",
        "subcategory_id": 3,
        "is_active": 0,
        "created_at": "2024-03-01T03:36:37.000000Z",
        "updated_at": "2024-03-01T03:38:07.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Delete Wallet Category by ID

Delete wallet category by id.

>**DELETE** 

```
API_URL/api/wallet/wallet-category/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc**

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc**

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": "Success"
}
```

<br/>