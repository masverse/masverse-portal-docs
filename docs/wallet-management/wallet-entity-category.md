---
sidebar_position: 5
---

# Entity Category

## Get Entity Category list

Retrieves all entity category records for an organization from the database.

>**GET** 

```
{{base_url}}/entitycategory
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
            "name": "Johnathan 456",
            "subcategory_id": null,
            "is_active": 1,
            "created_at": "2024-03-01T03:38:53.000000Z",
            "updated_at": "2024-03-01T03:38:53.000000Z",
            "deleted_at": null
        }
    ]
}
```

<br/>

## Get Entity Category by ID

Retrieves a specific entity category record by its ID from the database.

>**GET** 

```
{{base_url}}/entitycategory/{id}
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
        "name": "Johnathan 456",
        "subcategory_id": null,
        "is_active": 1,
        "created_at": "2024-03-01T03:38:55.000000Z",
        "updated_at": "2024-03-01T03:38:55.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Create Entity Category

Creates an entity category by organisation id and storing it in MasChain.

>**POST** 

```
{{base_url}}/entitycategory
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
{
    "name":"Johnathan 456",
    "subcategory_id":"1"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "organisation_id": 1,
        "name": "Johnathan 456",
        "subcategory_id": null,
        "updated_at": "2024-03-01T03:38:55.000000Z",
        "created_at": "2024-03-01T03:38:55.000000Z",
        "id": 3
    }
}
```
<br/>

## Update Entity Category by ID

Update entity category by id and store to db.

>**PUT** 

```
{{base_url}}/entitycategory/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
{
    "name":"Kien",
    "subcategory_id":"1"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "organisation_id": 1,
        "name": "Kien",
        "subcategory_id": null,
        "updated_at": "2024-03-01T03:38:55.000000Z",
        "created_at": "2024-03-01T03:38:55.000000Z",
        "id": 3
    }
}
```

<br/>

## Activate Entity Category by ID

Activate entity category by id.

>**PUT** 

```
{{base_url}}/entitycategory/{id}/activate
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***


```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 3,
        "organisation_id": 1,
        "name": "Kien",
        "subcategory_id": 1,
        "is_active": 1,
        "created_at": "2024-03-01T03:38:55.000000Z",
        "updated_at": "2024-03-01T03:39:18.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Deactivate Entity Category by ID

Deactivate entity category by id.

>**PUT** 

```
{{base_url}}/entitycategory/{id}/deactivate
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***


```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 3,
        "organisation_id": 1,
        "name": "Kien",
        "subcategory_id": 1,
        "is_active": 0,
        "created_at": "2024-03-01T03:38:55.000000Z",
        "updated_at": "2024-03-01T03:39:18.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Delete Entity Category by ID

Delete entity category by id.

>**DELETE** 

```
{{base_url}}/entitycategory/{id}
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