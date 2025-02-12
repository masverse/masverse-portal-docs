---
sidebar_position: 2
---

# Smart Contract Project

## List Smart Contract Projects

List Smart Contract Projects

>**GET** 

```
API_URL/api/contract/projects
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "result": [
        {
            "project_name": "Test Project",
            "slug": "test-project",
            "description": "Something Description",
            "version": "v1.0",
            "last_deployed_at": "2025-02-03T03:15:46.000000Z",
            "created_at": "2024-12-05T05:45:28.000000Z",
            "updated_at": "2025-01-02T03:28:13.000000Z"
        },
        ...
    ],
    "pagination": {
        "current_page": 1,
        "first_page_url": "http://localhost/api/projects?page=1",
        "last_page": 1,
        "last_page_url": "http://localhost/api/projects?page=1",
        "next_page_url": null,
        "per_page": 10,
        "prev_page_url": null,
        "total": 9
    },
    "message": "Success"
}
```

<br/>

## Get Smart Contract Project Details

Get Smart Contract Projects Details

>**GET** 

```
API_URL/api/contract/projects/{projectSlug}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "project_name": "Test Project",
        "slug": "test-project",
        "description": "Something Else",
        "version": "v1.0",
        "last_deployed_at": "2025-02-03T03:15:46.000000Z",
        "created_at": "2024-12-05T05:45:28.000000Z",
        "updated_at": "2025-01-02T03:28:13.000000Z"
    }
}
```

<br/>

## Create Smart Contract Project

Create Smart Contract Project

>**POST** 

```
API_URL/api/contract/projects
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |     Name     | Required |              Description               |
    | :----------: | :------: | :------------------------------------: |
    | project_name |   Yes    | The name of the smart contract project |
    | description  |    No    |          Project Description           |

```js title="Sample Request Body"
{
    "project_name": "Test Project",
    "description": "Testing Project"
}
```

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "project_name": "Test Project 2",
        "slug": "test-project-2-1",
        "description": "Testing Project",
        "version": null,
        "created_at": "2025-02-10T08:47:16.000000Z",
        "updated_at": "2025-02-10T08:47:16.000000Z"
    }
}
```

<br/>

## Update Smart Contract Project Details

Update Smart Contract Project Details

>**PUT** 

```
API_URL/api/contract/projects/{projectSlug}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |     Name     | Required |              Description               |
    | :----------: | :------: | :------------------------------------: |
    | project_name |   Yes    | The name of the smart contract project |
    | description  |    No    |          Project Description           |

```js title="Sample Request Body"
{
    "project_name": "Updated Project",
    "description": "Updated Project Description"
}
```

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "project_name": "Updated Project",
        "slug": "test-project-2-1",
        "description": "Updated Project Description",
        "version": null,
        "created_at": "2025-02-10T08:47:16.000000Z",
        "updated_at": "2025-02-10T08:50:35.000000Z"
    }
}
```

<br/>