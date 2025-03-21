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
    | wallet_address     | string          | Yes                  |
    | to     | string          | No                  |
    | contract_address     | string          | Yes                  |
    | callback_url     | string          | Yes                  |
    | signed_data     | string          | Yes                  |
        | is_fee     | int          | no                  |
    | extra_info     | string          | no                  |

#### extra_info field
    | Name                 | Type            | Required            | Description |
    |:--------------------:|:---------------:|:-------------------:|:-------------------:|
    | method     | string          | no                  | method use to execute  |
    | amount     | string          | no                  | amount transfer |
    | params     | string          | no                  | Additional data that will be passed back |



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


# Get Wallet Tokens

Get all token from wallets

>**POST** 

```
API_URL/api/token/get-wallet-tokens?address={wallet_address}
```
#### HEADERS

<pre>
**client_id**      : 9b16ae5638534ae19...*
**client_secret**  : sk_9b16ae5638534ae...* 
**content-type**   : application/json
</pre>

#### Query string
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | address       | string          | Yes                  |

```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "token": {
                "address": "0x1F4204344....",
                "circulating_market_cap": null,
                "decimals": "18",
                "exchange_rate": null,
                "holders": "1",
                "icon_url": null,
                "name": "1231",
                "symbol": "12",
                "total_supply": "103000000000000",
                "type": "ERC-20",
                "volume_24h": null
            },
            "token_id": null,
            "token_instance": null,
            "value": "103000000000000"
        }
    ]
}
```

<br/>


# Get Tokens Transfer History

Get all token from wallets

>**POST** 

```
API_URL/api/token/get-wallet-tokens?contract_address={wallet_address}
```
#### HEADERS

<pre>
**client_id**      : 9b16ae5638534ae19...*
**client_secret**  : sk_9b16ae5638534ae...* 
**content-type**   : application/json
</pre>

#### Query string
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | contract_address              | string          | Yes                 |
    | block_number              | int          | no                 |
    | index              | int          | no                 |
```js title="Sample result"
{
  "status": 200,
  "result": {
    "items": [
      {
        "block_hash": "0xb39c724618c336b632f60be2802c9e3d8d6f9b1d2888ce9ad80d0a4dbb1331de",
        "from": {
          "ens_domain_name": null,
          "hash": "0x147f20a28739da15419AdC04e61fd83e60962683",
          "implementation_address": null,
          "implementation_name": null,
          "implementations": [],
          "is_contract": false,
          "is_verified": false,
          "metadata": null,
          "name": null,
          "private_tags": [],
          "public_tags": [],
          "watchlist_names": []
        },
        "log_index": "5",
        "method": "0x10cb2e7f",
        "timestamp": "2024-06-07T08:01:18.000000Z",
        "to": {
          "ens_domain_name": null,
          "hash": "0xa6bF43b1612F7e729828A957E4BFF4160Ee242F1",
          "implementation_address": null,
          "implementation_name": null,
          "implementations": [],
          "is_contract": false,
          "is_verified": false,
          "metadata": null,
          "name": null,
          "private_tags": [],
          "public_tags": [],
          "watchlist_names": []
        },
        "token": {
          "address": "0xF9B9B40FD1d6f1d155ded0b5d0c3db9Cedc56064",
          "circulating_market_cap": null,
          "decimals": "18",
          "exchange_rate": null,
          "holders": "6",
          "icon_url": null,
          "name": "Demo",
          "symbol": "DM",
          "total_supply": "8000000000000000000000",
          "type": "ERC-20",
          "volume_24h": null
        },
        "total": {
          "decimals": "18",
          "value": "100000000000000"
        },
        "tx_hash": "0xe37ec624a600d7481aa085701be77010db4a4556b80e2c3c96652e89d6ee9c21",
        "type": "token_transfer"
      }
    ],
    "next_page_params": {
      "block_number": 1675670,
      "index": 1,
      "locale": "en"
    }
  }
}
```

<br/>


# Get Tokens Transfer History

Get all token from wallets

>**GET** 

```
API_URL/api/token/get-token-abi?contract_address={wallet_address}
```
#### HEADERS

<pre>
**client_id**      : 9b16ae5638534ae19...*
**client_secret**  : sk_9b16ae5638534ae...* 
**content-type**   : application/json
</pre>

#### Query string
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | contract_address              | string          | Yes                 |
```js title="Sample result"
{
  "status": 200,
  "result": [
    {
      "name": "CountIncreased",
      "type": "event",
      "inputs": [
        {
          "name": "_count",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ]
    }
  ]
}
```

<br/>
