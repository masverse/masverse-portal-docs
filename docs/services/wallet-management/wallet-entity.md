---
sidebar_position: 4
---

# Entity 

## Get Entity list

Retrieves all entity records for an organization from the database.

>**GET** 

```
API_URL/api/wallet/entity
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
            "name": "entity 1",
            "external_id": "example 1",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "entity_categories": []
        }
    ]
}
```

<br/>

## Get Entity by ID

Retrieves a specific entity  record by its ID from the database.

>**GET** 

```
API_URL/api/wallet/entity/{id}
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
        "name": "entity 1",
        "external_id": "123",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    }
}
```

<br/>

## Create Entity 

Creates an entity  by organisation id and storing it in MasChain.

>**POST** 

```
API_URL/api/wallet/entity
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | name                 | string          | Yes                 |
    | external_id          | string          | no                  |
    | entity_category_id   | int             | No                  |
    | entity_category      | [object](wallet-entity-category#create-entity-category)          | No                  |
```js title="Sample request"
{
    "name" : "Project 1",
    "external_id" : "external 1",
    "entity_category_id" : 2
}
```

```js title="Sample request 2"
{
    "name" : "Project 1",
    "external_id" : "external 1",
    "entity_category" : {
        "name" : "category 1",
        "parent_category_id" : 1
    }
}
```

```js title="Sample result 1"
{
    "status": 200,
    "result": {
        "id": 2
        "organisation_id": 1,
        "name": "test",
        "external_id": "external 1",
        "updated_at": "2024-03-01T07:03:30.000000Z",
        "created_at": "2024-03-01T07:03:30.000000Z",
        "entity_category" : {
            "id" : 1
            "name" : "category 1",
            "parent_category_id" : 1
        }
    }
}
```
<br/>

## Update Entity by ID

Update entity by id and store to db.

>**PUT** 

```
API_URL/api/wallet/entity/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | name                 | string          | Yes                 |
    | external_id          | string          | Yes                 |
    | entity_id            | int             | No                  |

```js title="Sample request"
{
    "name" : "test2",
    "external_id" : "4567",
    "entity_id" : "2"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 2,
        "organisation_id": 1,
        "name": "test2",
        "external_id": "4567",
        "created_at": "2024-03-01T07:03:30.000000Z",
        "updated_at": "2024-03-01T07:04:01.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Delete Entity by ID

Delete entity by id.

>**DELETE** 

```
API_URL/api/wallet/entity/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": "Success"
}
```

<br/>