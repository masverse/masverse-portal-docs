# Explorer Display Option

## List Explorer Display Options (EDO)

List Explorer Display Options (EDO)

>**GET** 

```
API_URL/api/transaction/edos
```

#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "result": [
        {
            "id": 5,
            "edo_name": "Organisation EDO",
            "is_default": true,
            "tdo_method_name": true,
            "tdo_raw_input": true,
            "tdo_decoded_input": false,
            "tdo_token_transfers": false,
            "tdo_event_logs": false,
            "created_at": "2025-08-04T07:52:34.000000Z",
            "updated_at": "2025-08-04T07:52:34.000000Z"
        },
        ...
    ],
    "pagination": {
        "current_page": 1,
        "first_page_url": "http://localhost/api/transaction/edos?page=1",
        "last_page": 1,
        "last_page_url": "http://localhost/api/transaction/edos?page=1",
        "next_page_url": null,
        "per_page": 5,
        "prev_page_url": null,
        "total": 5
    },
    "message": "Success"
}
```

<br />

## Get Explorer Display Options (EDO) Details

Get Explorer Display Options (EDO) Details

>**GET** 

```
API_URL/api/transaction/edos/{edoId}
```

#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "id": 5,
        "edo_name": "Organisation EDO",
        "is_default": true,
        "tdo_method_name": true,
        "tdo_raw_input": true,
        "tdo_decoded_input": false,
        "tdo_token_transfers": false,
        "tdo_event_logs": false,
        "created_at": "2025-08-04T07:52:34.000000Z",
        "updated_at": "2025-08-04T07:52:34.000000Z"
    }
}
```

<br />

## Create Explorer Display Options (EDO)

Create Explorer Display Options (EDO)

>**POST** 

```
API_URL/api/transaction/edos
```

#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |     Name              |   Type   | Required |
    | :-------------------: | :------: | :------: |
    | edo_name              | String   |    Yes   |
    | is_default            | Boolean  |    No    |
    | tdo_method_name       | Boolean  |    No    |
    | tdo_raw_input         | Boolean  |    No    |
    | tdo_decoded_input     | Boolean  |    No    |
    | tdo_token_transfers   | Boolean  |    No    |
    | tdo_event_logs        | Boolean  |    No    |

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "id": 42,
        "edo_name": "hello world",
        "is_default": false,
        "tdo_method_name": true,
        "tdo_raw_input": false,
        "tdo_decoded_input": true,
        "tdo_token_transfers": true,
        "tdo_event_logs": false,
        "created_at": "2025-08-19T09:00:16.000000Z",
        "updated_at": "2025-08-19T09:00:16.000000Z"
    }
}
```

<br />

## Update Explorer Display Options (EDO)

Update Explorer Display Options (EDO)

>**POST** 

```
API_URL/api/transaction/edos/{edoId}
```

#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |     Name              |   Type   | Required |
    | :-------------------: | :------: | :------: |
    | edo_name              | String   |    Yes   |
    | is_default            | Boolean  |    No    |
    | tdo_method_name       | Boolean  |    No    |
    | tdo_raw_input         | Boolean  |    No    |
    | tdo_decoded_input     | Boolean  |    No    |
    | tdo_token_transfers   | Boolean  |    No    |
    | tdo_event_logs        | Boolean  |    No    |

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "id": 42,
        "edo_name": "hello world (edited 1)",
        "is_default": true,
        "tdo_method_name": true,
        "tdo_raw_input": false,
        "tdo_decoded_input": true,
        "tdo_token_transfers": true,
        "tdo_event_logs": false,
        "created_at": "2025-08-19T09:00:16.000000Z",
        "updated_at": "2025-08-19T09:14:51.000000Z"
    }
}
```


<br />

## Set Default Explorer Display Options (EDO)

Set Default Explorer Display Options (EDO)

>**POST** 

```
API_URL/api/transaction/edos/{edoId}/set-default
```

#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "id": 42,
        "edo_name": "hello world (edited 1)",
        "is_default": true,
        "tdo_method_name": true,
        "tdo_raw_input": false,
        "tdo_decoded_input": true,
        "tdo_token_transfers": true,
        "tdo_event_logs": false,
        "created_at": "2025-08-19T09:00:16.000000Z",
        "updated_at": "2025-08-19T09:14:51.000000Z"
    }
}
```

<br />

## Delete Explorer Display Options (EDO)

Delete Explorer Display Options (EDO)

>**DELETE** 

```
API_URL/api/transaction/edos/{edoId}
```

#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "message": "Edo deleted successfully"
    }
}
```

<br />


