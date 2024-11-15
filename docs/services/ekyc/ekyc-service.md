---
sidebar_position: 3
---


# EKYC

## Generate H5 Verification links

Generate H5 Ekyc link 

>**POST** 

```
API_URL/api/ekyc/verifications
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    | Name                 | Required            |  Description |
    |:--------------------:|:-------------------:|:-------------------:|
    | type       | Yes                 |        00 (OCR + FACE + LIVENESS ) or 01 (OCR Only) |
    | id_country     | Yes             | Country Code ( ISO-3166 alpha-3 format) |     
    | id_type   | Yes | ID_CARD or PASSPORT |
    | redirect_url   | Yes | link to redirect after completion |

Note: The maximum number of retry attempts is limited to 2 for OCR and 1 for Face Recognition.

```js title="Sample result"
{
{
    "status": 200,
    "result": {
        "url": "http://localhost:3001?token=4KK6FYHVZ...",
        "token": "4KK6FYHVZ..."
    }
}
}
```

<br/>

## Get Ekyc Verification

Get the Ekyc Details

>**GET** 

```
API_URL/api/ekyc/verifications/{token}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***



```js title="Sample result"
{
    "status": 200,
    "result" : {
        "id": 8,
        "organisation_id": 31,
        "type": "00",
        "token": "4KK6FYHVZVN1OD9ZZK219XM0W57UD6",
        "url": "http://localhost:3001?token=4KK6FYHVZVN1OD9ZZK219XM0W57UD6",
        "redirect_url": "https://localhost",
        "medias": null,
        "ocr_country": "MYS",
        "ocr_type": "ID_CARD",
        "ocr_success": 0,
        "ocr_result": null,
        "face_id_success": 0,
        "face_id_result": null,
        "is_success": 0,
        "latest_error": null,
        "retries": 0,
        "expire_at": "2024-09-10T08:16:31.000Z",
        "created_at": "2024-09-10T08:01:31.000Z",
        "updated_at": "2024-09-10T08:01:31.000Z"
    }
}
```


<br/>