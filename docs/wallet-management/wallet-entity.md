---
sidebar_position: 4
---

# Entity 

## Get Entity list

Retrieves all entity records for an organization from the database.

>**GET** 

```
{{base_url}}/api/wallet/entity
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
            "organisation_id": 1,
            "name": "entity 1",
            "external_id": "123",
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
{{base_url}}/api/wallet/entity/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

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
{{base_url}}/api/wallet/entity
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
{
    "name" : "test",
    "external_id" : "0123",
    "entity_id" : "2"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "organisation_id": 1,
        "name": "test",
        "external_id": "0123",
        "updated_at": "2024-03-01T07:03:30.000000Z",
        "created_at": "2024-03-01T07:03:30.000000Z",
        "id": 2
    }
}
```
<br/>

## Update Entity by ID

Update entity by id and store to db.

>**PUT** 

```
{{base_url}}/api/wallet/entity/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
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
{{base_url}}/api/wallet/entity/{id}
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