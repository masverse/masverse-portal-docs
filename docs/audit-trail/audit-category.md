---
sidebar_position: 3
---

# Audit Category

## Get Category list

Retrieves all category records for an organization from the database.

>**GET** 

```
API_URL/api/audit/category
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
            "name": "test Izz",
            "is_active": 1,
            "created_at": "2024-03-01T06:54:15.000000Z",
            "updated_at": "2024-03-01T06:54:15.000000Z",
            "deleted_at": null
        },
        {
            "id": 2,
            "organisation_id": 1,
            "name": "test Izz",
            "is_active": 1,
            "created_at": "2024-03-01T06:54:28.000000Z",
            "updated_at": "2024-03-01T06:54:28.000000Z",
            "deleted_at": null
        }
    ]
}
```

<br/>

## Get Category by ID

Retrieves a specific organisation category record by its ID from the database.

>**GET** 

```
API_URL/api/audit/category/{id}
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
        "name": "test Izz",
        "is_active": 1,
        "created_at": "2024-03-01T06:54:15.000000Z",
        "updated_at": "2024-03-01T06:54:15.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Create Category

Creates a category by organisation id and storing it in MasChain.

>**POST** 

```
API_URL/api/audit/category
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
{
          "name":"test Izz"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "organisation_id": 1,
        "name": "test Izz",
        "updated_at": "2024-03-01T06:54:28.000000Z",
        "created_at": "2024-03-01T06:54:28.000000Z",
        "id": 2
    }
}
```
<br/>

## Update Category by ID

Update category by id and store to db.

>**PUT** 

```
API_URL/api/audit/category/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
{
    "name":"Jason Izz"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "organisation_id": 1,
        "name": "Jason Izz",
        "updated_at": "2024-03-01T06:54:28.000000Z",
        "created_at": "2024-03-01T06:54:28.000000Z",
        "id": 2
    }
}
```

<br/>

## Activate Category by ID

Activate category by id.

>**PUT** 

```
API_URL/api/audit/activate-category/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***


```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 2,
        "organisation_id": 1,
        "name": "Jason Izz",
        "is_active": 1,
        "created_at": "2024-03-01T06:54:28.000000Z",
        "updated_at": "2024-03-01T06:56:26.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Deactivate Category by ID

Deactivate category by id.

>**PUT** 

```
API_URL/api/audit/deactivate-category/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***


```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 2,
        "organisation_id": 1,
        "name": "Jason Izz",
        "is_active": 0,
        "created_at": "2024-03-01T06:54:28.000000Z",
        "updated_at": "2024-03-01T06:56:26.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Delete Category by ID

Delete category by id.

>**DELETE** 

```
API_URL/api/audit/delete-category/{id}
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