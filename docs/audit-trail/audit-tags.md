---
sidebar_position: 4
---

# Tags

## Get Tags list

Retrieves all tags records for an organization from the database.

>**GET** 

```
{{base_url}}/audit/tag
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
            "name": "sying tester tag",
            "is_active": 1,
            "created_at": "2024-03-01T06:58:43.000000Z",
            "updated_at": "2024-03-01T06:58:43.000000Z",
            "deleted_at": null
        }
    ]
}
```

<br/>

## Get Tags by ID

Retrieves a specific organisation tags record by its ID from the database.

>**GET** 

```
{{base_url}}/audit/tag/{id}
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
        "name": "sying tester tag",
        "is_active": 1,
        "created_at": "2024-03-01T06:58:43.000000Z",
        "updated_at": "2024-03-01T06:58:43.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Create Tags

Creates a tag by organisation id and storing it in MasChain.

>**POST** 

```
{{base_url}}/audit/tag
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
{
    "name":"tester tag"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "organisation_id": 1,
        "name": "tester tag",
        "updated_at": "2024-03-01T06:58:43.000000Z",
        "created_at": "2024-03-01T06:58:43.000000Z",
        "id": 1
    }
}
```
<br/>

## Update Tags by ID

Update tags by id and store to db.

>**PUT** 

```
{{base_url}}/audit/tag/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```
{
    "name":"Update test"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "id": 1,
        "organisation_id": 1,
        "name": "Update test",
        "is_active": 1,
        "created_at": "2024-03-01T06:58:43.000000Z",
        "updated_at": "2024-03-01T07:00:07.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Activate Tags by ID

Activate tags by id.

>**PUT** 

```
{{base_url}}/audit/activate-tag/{id}
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
        "name": "Test",
        "is_active": 1,
        "created_at": "2024-03-01T06:58:43.000000Z",
        "updated_at": "2024-03-01T07:00:07.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Deactivate Tags by ID

Deactivate tags by id.

>**PUT** 

```
{{base_url}}/audit/deactivate-tag/{id}
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
        "name": "Test",
        "is_active": 0,
        "created_at": "2024-03-01T06:58:43.000000Z",
        "updated_at": "2024-03-01T07:00:07.000000Z",
        "deleted_at": null
    }
}
```

<br/>

## Delete Tags by ID

Delete tags by id.

>**DELETE** 

```
{{base_url}}/audit/delete-tag/{id}
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