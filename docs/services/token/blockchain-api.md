---
sidebar_class_name: hidden


---

# Blockchain API

# Execute Method

Execute Smart contract method

>**POST** 

```
API_URL/api/token/contract-execute
```
#### HEADERS

<pre>
**client_id**      : 9b16ae5638534a...*
**client_secret**  : sk_9b16ae563853...* 
**content-type**   : application/json
**Authorization**  : Bearer ...**
</pre>

#### Body
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |
    | contract_address     | string          | Yes                 |
    | callback_url         | string          | Yes                 |


if no contract_address pass will use MasToken as Default <br/>
if invalid contract_address was pass will use MasToken

```js title="Sample result"
{
    "status": 200,
    "result": {
        "from": "0x147f20a28739da1541...",
        "transactionHash": "0xf519ba69ba0e603583e0e...",
        "nonce": 0,
        "status": "pending",
    }
}
```

```js title="Sample Callback Success response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e...",
        "nonce": 752,
        "from": "0x147f20a28739da1541...",
        "status": "success"
        "receipt" : { Transaction Receipt Object }
    }
}
```

```js title="Sample Callback Fail response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e...",
        "nonce": 752,
        "from": "0x147f20a28739da1541...",
        "status": "failed"
        "message": "Error message"
    }
}
```

<br/>



# Call Method

Call Smart contract method

>**POST** 

```
API_URL/api/token/contract-call
```
#### HEADERS

<pre>
**client_id**      : 9b16ae5638534a...*
**client_secret**  : sk_9b16ae563853...* 
**content-type**   : application/json
**Authorization**  : Bearer ...**
</pre>

#### Body
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address     | string          | Yes                  |
    | contract_address     | string          | Yes                  |
    | method_name     | string          | Yes                  |
    | method_params     | array          | No                  |


if no contract_address pass will use MasToken as Default <br/>
if invalid contract_address was pass will use MasToken

```js title="Sample result"
{
    "status": 200,
    "result": {
        "from": "0x147f20a28739da1541...",
        "transactionHash": "0xf519ba69ba0e603583e0e...",
        "nonce": 0,
        "status": "pending",
    }
}
```

```js title="Sample Callback Success response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e...",
        "nonce": 752,
        "from": "0x147f20a28739da1541...",
        "status": "success"
        "receipt" : { Transaction Receipt Object }
    }
}
```

```js title="Sample Callback Fail response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e...",
        "nonce": 752,
        "from": "0x147f20a28739da1541...",
        "status": "failed"
        "message": "Error message"
    }
}
```

<br/>
