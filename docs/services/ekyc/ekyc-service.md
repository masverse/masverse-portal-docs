---
sidebar_position: 3
---


# e-KYC

## Generate H5 Verification links

Generate H5 e-KYC link 

>**POST** 

```
API_URL/api/ekyc/verifications
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |       Name        |                   Required                   |                            Description                             |
    | :---------------: | :------------------------------------------: | :----------------------------------------------------------------: |
    |       type        |                     Yes                      |            00 (OCR + FACE + LIVENESS ) or 01 (OCR Only)            |
    |    id_country     | Required if select_id_country is not present |              Country Code ( ISO-3166 alpha-3 format)               |
    | select_id_country |    Required if id_country is not present     | Option to allow user to select document issuing country during OCR |
    |      id_type      |  Required if select_id_type is not present   | ID_CARD or PASSPORT. ID_CARD is only supported by MYS country code |
    |  select_id_type   |      Required if id_type is not present      |      Option to allow user to select document type during OCR       |
    |   redirect_url    |                     Yes                      |                 link to redirect after completion                  |

Note: The maximum number of retry attempts is limited to 2 for OCR and 1 for Face Recognition.

### Supported OCR Document/Country List
    | ID Type  |                                                           Supported Country (ISO-3166 alpha-3) code                                                            |
    | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    | ID_CARD  |                                                                              MYS                                                                               |
    | PASSPORT | AUS, BGD, CAN, CHN, CUB, DEU, FRA, IND, IDN, IRN, ITA, JPN, KAZ, KOR, LAO, MYS, MNG, NLD, NZL, NGA, PAK, PHL, RUS, SAU, SGP, SYR, THA, UKR, GBR, USA, VNM, ZAF |

```js title="Sample result"
{
    "status": 200,
    "result": {
        "url": "http://localhost:3001?token=4KK6FYHVZ...",
        "token": "4KK6FYHVZ..."
    }
}
```

<br/>

## Get e-KYC Verification

Get the e-KYC Details

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