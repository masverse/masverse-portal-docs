---
sidebar_position: 3
---

# Token Services

## Create Smart Contract
We allow clients to create more than 1 token, clients will need to create smart contract for each token in Enterprise Portal after you subscribe this service. In order to create Token Smart Contract, you will need to input these required fields:

- **Smart Contract Name**: Name your own smart contract
- **Owner Wallet Address**: The wallet address which own this smart contract
- **Token Name**: The name of your token
- **Token Symbol**: The symbol of your token
- **Max Cap**: The maximum supply of the token that can be minted. To get unlimited supply, you may put **0** into the form
- **Decimals**: The decimal places of your token. Eg: RM have 2 decimal places
- **Initial Supply**: The initial supply of tokens minted when creating the smart contract. The token will be minted to contract owner's wallet

## Pause Token

Pauses a token, restricting it from every transaction

>**POST** 

```
API_URL/api/token/pause
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |
    | contract_address     | string          | Yes                 |
    | callback_url          | string          | Yes                 |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da15419Ad..."   ,
    "contract_address":"0x4175a3EE7fbD167E...",
    "callback_url": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "from": "0x147f20a28739da1541...",
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 0,
        "status": "pending",
    }
}
```

```js title="Sample Callback Success response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "success"
        "receipt" : { Transaction Receipt Object }
    }
}
```

```js title="Sample Callback Fail response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "failed"
        "message": "Error message"
    }
}
```

<br/>

## Resume Token

Resumes a token workings.

>**POST** 

```
API_URL/api/token/resume
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |
    | contract_address     | string          | Yes                 |
    | callback_url         | string          | Yes                 |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da1541...."   ,
    "contract_address":"0x4175a3EE7fbD167E....",
    "callback_url": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "from": "0x147f20a28739da1541...",
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 0,
        "status": "pending",
    }
}
```

```js title="Sample Callback Success response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "success"
        "receipt" : { Transaction Receipt Object }
    }
}
```

```js title="Sample Callback Fail response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "failed"
        "message": "Error message"
    }
}
```

<br/>

## Mint Tokens

Mints tokens

>**POST** 

```
API_URL/api/token/mint
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |
    | to                   | string          | Yes                 |
    | amount               | string          | Yes                 |
    | contract_address     | string          | Yes                 |
    | callback_url         | string          | Yes                 |
    | signed_data          | string          | No                  |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da15419Ad...",
    "to":"0xbD8992F758B4429b92D1...",
    "amount":"2000",
    "contract_address":"0x4175a3EE7fbD167E...",
    "callback_url": "https://postman-echo.com/post?",
    "signed_data": ""
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0...",
        "nonce": 752,
        "from": "0x147f20a28...",
        "status": "pending"
    }
}
```

```js title="Sample Callback Success response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0...",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "success"
        "receipt" : { Transaction Receipt Object }
    }
}
```

```js title="Sample Callback Fail response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0...",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "failed"
        "message": "Error message"
    }
}
```


<br/>

## Burn Tokens

Burns Tokens

>**POST** 

```
API_URL/api/token/burn
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |----------------------|-----------------|---------------------|
    | wallet_address       | string          | Yes                 |
    | to                   | string          | Yes                 |
    | amount               | string          | Yes                 |
    | contract_address     | string          | Yes                 |
    | callback_url          | string          | Yes                 |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da15419Ad...",
    "to":"0xbD8992F758B4429b92D1...",
    "amount":"2000",
    "contract_address":"0x4175a3EE7fbD167E...",
    "callback_url": "https://postman-echo.com/post?"
}
```
```js title="Sample result"
{
    "status": 200,
    "result": {
        "from": "0x147f20a28739da1541...",
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 0,
        "status": "pending",
    }
}
```

```js title="Sample Callback Success response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "success"
        "receipt" : { Transaction Receipt Object }
    }
}
```

```js title="Sample Callback Fail response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "failed"
        "message": "Error message"
    }
}
```

<br/>

## Transfer Tokens

Transfer Tokens to another wallet address

>**POST** 

```
API_URL/api/token/token-transfer
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |----------------------|-----------------|---------------------|
    | wallet_address       | string          | Yes                 |
    | to                   | string          | Yes                 |
    | amount               | string          | Yes                 |
    | contract_address     | string          | Yes                 |
    | callback_url          | string          | Yes                 |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da15419Ad...",
    "to":"0xbD8992F758B4429b92D1...",
    "amount":"2000",
    "contract_address":"0x4175a3EE7fbD167E...",
    "callback_url": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "from": "0x147f20a28739da1541...",
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 0,
        "status": "pending",
    }
}
```

```js title="Sample Callback Success response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "success"
        "receipt" : { Transaction Receipt Object }
    }
}
```

```js title="Sample Callback Fail response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "failed"
        "message": "Error message"
    }
}
```
<br/>


## Transfer Ownership

Transfer ownership to another wallet address

>**POST** 

```
API_URL/api/token/owner-transfer
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |----------------------|-----------------|---------------------|
    | wallet_address       | string          | Yes                 |
    | to                   | string          | Yes                 |
    | contract_address     | string          | Yes                 |
    | callback_url          | string          | No                  |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da1.....",
    "to":"0xbD8992F758B4429b92D1Af....",
    "contract_address":"0x4175a3EE7fbD167EAd1a.....",
    "callback_url": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "from": "0x147f20a28739da1541...",
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 0,
        "status": "pending",
    }
}
```

```js title="Sample Callback Success response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "success"
        "receipt" : { Transaction Receipt Object }
    }
}
```

```js title="Sample Callback Fail response"
{
    "status": 200,
    "result": {
        "transactionHash": "0xf519ba69ba0e603583e0e8857....",
        "nonce": 752,
        "from": "0x147f20a28739da15419Ad...",
        "status": "failed"
        "message": "Error message"
    }
}
```

<br/>


## Check Tokens balance

Check Tokens balance

>**POST** 

```
API_URL/api/token/balance
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |
    | contract_address     | string          | Yes                 |

```
{
    "wallet_address":"0x147f20a28739da15419Ad...",
    "contract_address":"0x4175a3EE7fbD167E...",
}
```

```js title="Sample result"
{
    "status": 200,
    "result": '1000000000'
}
```
<br/>

## GET Token Transactions

GET Token Transactions

>**GET** 

```
API_URL/api/token/get-token-transaction
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### Params
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | wallet_address       | string          | Yes                 |
    | contract_address     | string          | Yes                 |
    | filter               | string          | to or from          |


```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "to": "0xED7cfE6FaBA7070Ae4ed2A...",
            "from": "0x6C8C08029D80445DF1...",
            "blockNumber": 2769746,
            "transactionHash": "0x1165c4353bc030205a203f100b6...",
            "method": "mint",
            "decimal": 2,
            "amount": "100",
            "token": {
                "contract_address": "0x0d4987628e0a736...",
                "name": "Certificate",
                "symbol": "CERT"
            },
            "timestamp": "2024-07-24T19:20:09.000000Z"
        }
    ],
    "pagination": {
        "current_page": 1,
        "first_page_url": "/api/get-token-transaction?page=1",
        "last_page": 1,
        "last_page_url": "/api/get-token-transaction?page=1",
        "next_page_url": null,
        "per_page": 20,
        "prev_page_url": null,
        "total": 1
    }
}
```
<br/>

## Sample of webhooks result

```js title="Sample result"
{
    "status": 200,
    "result": {
        "transactionHash": "0xb9c5a6aa121edfafda8802eda33...",
        "transactionIndex": 0,
        "blockHash": "0x9dd481cff735ceb7cb76b1009eea6c4ef03666e14d2e212e5f2803918dcbc136",
        "from": "0x147f20a28739da15419ad...",
        "to": "0x4175a3ee7fbd167e...",
        "blockNumber": 669619,
        "contractAddress": null,
        "logs": [
            {
                "address": "0x4175a3EE7fbD167E...",
                "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x000000000000000000000000147f20a28739da15419adc04e61fd83e60962683",
                    "0x000000000000000000000000bd8992f758b4429b92d1afc1b53ab5bc16bd8475"
                ],
                "data": "0x0000000000000000000000000000000000000000000000000000002e90edd000",
                "blockHash": "0x9dd481cff735ceb7cb76b1009eea6c4ef03666e14d2e212e5f2803918dcbc136",
                "blockNumber": 669619,
                "transactionHash": "0xb9c5a6aa121edfafda8802eda33...",
                "transactionIndex": 0,
                "logIndex": 0,
                "transactionLogIndex": "0x0",
                "removed": false,
                "id": "log_83f4a9c9"
            }
        ],
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000100000000000000000000000000000100000000000000000000000000000000000000000000000000000000010200000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000002000800000000000000100000000000010000000000008000000000000000000000000000000000000000000000000000000000000000000000000000",
        "status": true,
        "type": "0x0"
    }
}
```

<br/>
