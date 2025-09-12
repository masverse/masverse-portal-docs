---
sidebar_position: 5
---

# Audit Tags

## Get Tags list

Retrieves all tags records for an organization from the database.

>**GET** 

```
API_URL/api/audit/tag
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
API_URL/api/audit/tag/{id}
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
API_URL/api/audit/tag
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
| Name  | Type  | Required |
| :----: | :----: | :-----------: |
|  name | string  | Yes|

```js title="Sample result"
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

## Update Tags

Update tags by id and store to db.

>**PUT** 

```
API_URL/api/audit/tag/{id}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
| Name  | Type  | Required |
| :----: | :----: | :-----------: |
|  name | string  | Yes|

```js title="Sample result"
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
API_URL/api/audit/tag/{id}/activate
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
API_URL/api/audit/tag/{id}/deactivate
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
API_URL/api/audit/tag/{id}
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