---
sidebar_position: 4
---

# Example Usage

This is a quick guide to use this service

## STEP 1

First get your link using by using this api ``API_URL/api/ekyc/verifications``

```
{
    "type" : "00",
    "id_country": "MYS",
    "id_type" : "ID_CARD",
    "redirect_url" : "https://your_server.com"
}
```

it will response a temporarily url for you to redirect

```
{
  "status": 200,
  "result": {
    "url": "https://ekyc.maschain.com/verifications?token=441DSII3VF94US...",
    "token": "441DSII3VF94US...."
  }
}
```


## STEP 2

After user completed their OCR or FACE ID , it will redirect back to merchant page. From there you can check the result from ``is_success`` query parameter to check the status. <br />
You can also call this api to check the status and get the full details ``API_URL/api/ekyc/verifications/{token}`` 
```
{
  "status": 200,
  "result": {
    "id": 267,
    "organisation_id": 60,
    "end_user_id": null,
    "type": "00",
    "token": "441DSII3VF94US...",
    "url": "https://ekyc.maschain.com/verifications?token=441DSII3VF94US...",
    "redirect_url": "https://your_server.com",
    "medias": null,
    "ocr_country": "MYS",
    "ocr_type": "ID_CARD",
    "ocr_success": 1,
    "ocr_result": [],
    "ocr_charged": 1,
    "face_id_success": 1,
    "face_id_result": [],
    "face_id_charged": 1,
    "is_success": 1,
    "latest_error": null,
    "retries": 0,
    "face_retries": 0,
    "expire_at": "2025-02-01T14:11:47.000Z",
    "created_at": "2025-02-01T13:56:47.000Z",
    "updated_at": "2025-02-01T13:56:47.000Z",
    "pruned_at": null
  }
}
```
You can use ``is_success`` to quickly check the status ``ocr_result`` or ``face_id_result`` to get the full detail, [click here](/services/ekyc/error-code) to view the list of error code

example ``ocr_result``
```
{
        "ID": "xxxx-xx-xxx",
        "Sex": "PEREMPUAN",
        "Name": "User",
        "Type": "MyKad",
        "Warn": [],
        "Image": "",
        "Address": "xxxx xxxxxx xxxx",
        "Birthday": "dd/yy/xxxx",
        "RequestId": "ed76d141-449d-4b0a-b9bb-c32bc05940fc",
        "MyKadNumber": "",
        "AdvancedInfo": "",
        "WarnCardInfos": []
      }
```

example ``face_id_result``
```
   {
        "Sim": 98.33,
        "Result": "Success",
        "RequestId": "a4e7fc59-9cb7-478a-8592-c7739a77ff66",
        "Description": "Success",
        "BestFrameList": [],
        "BestFrameBase64": ""
      }
```