---
sidebar_position: 3
---

# Token Services

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
    | callbackUrl          | string          | Yes                 |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da15419AdC04e61fd83e60962683"   ,
    "contract_address":"0x4175a3EE7fbD167EAd1abef7EA410EdE42303F41",
    "callbackUrl": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "requestId": 33,
        "nonce": 510,
        "status": 2,
        "receipt": {
            "transactionHash": "0x6d4cbb1aa912cc1ae9e76ebed02edf181520e5c3c138e150ff59fbcfaa63c49c",
            "transactionIndex": 0,
            "blockHash": "0x0e5e877455e7895cc1cc8bd1d56574342072623e7d3418ad8c310122cfa0776b",
            "from": "0x147f20a28739da15419adc04e61fd83e60962683",
            "to": "0x4175a3ee7fbd167ead1abef7ea410ede42303f41",
            "blockNumber": 667348,
            "cumulativeGasUsed": 114394,
            "gasUsed": 114394,
            "contractAddress": null,
            "logs": [
                {
                    "address": "0x4175a3EE7fbD167EAd1abef7EA410EdE42303F41",
                    "topics": [
                        "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"
                    ],
                    "data": "0x000000000000000000000000147f20a28739da15419adc04e61fd83e60962683",
                    "blockHash": "0x0e5e877455e7895cc1cc8bd1d56574342072623e7d3418ad8c310122cfa0776b",
                    "blockNumber": 667348,
                    "transactionHash": "0x6d4cbb1aa912cc1ae9e76ebed02edf181520e5c3c138e150ff59fbcfaa63c49c",
                    "transactionIndex": 0,
                    "logIndex": 0,
                    "transactionLogIndex": "0x0",
                    "removed": false,
                    "id": "log_c8a267ad"
                }
            ],
            "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000400000000000000000000000000000000000000000000000000000000010000000000000000200000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "status": true,
            "effectiveGasPrice": 500000000,
            "type": "0x0"
        }
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
    | callbackUrl          | string          | Yes                 |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da15419AdC04e61fd83e60962683"   ,
    "contract_address":"0x4175a3EE7fbD167EAd1abef7EA410EdE42303F41",
    "callbackUrl": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "requestId": 34,
        "nonce": 511,
        "status": 2,
        "receipt": {
            "transactionHash": "0x655efe63ce6a80b937ce60d78967fbadc49e40c0881e79233f4bd5b747aae392",
            "transactionIndex": 0,
            "blockHash": "0x08a045176a2e73d80e3fbded58d850e4324ac1eda4e988fa0db5d38c427ab1a4",
            "from": "0x147f20a28739da15419adc04e61fd83e60962683",
            "to": "0x4175a3ee7fbd167ead1abef7ea410ede42303f41",
            "blockNumber": 667349,
            "cumulativeGasUsed": 114394,
            "gasUsed": 114394,
            "contractAddress": null,
            "logs": [
                {
                    "address": "0x4175a3EE7fbD167EAd1abef7EA410EdE42303F41",
                    "topics": [
                        "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"
                    ],
                    "data": "0x000000000000000000000000147f20a28739da15419adc04e61fd83e60962683",
                    "blockHash": "0x08a045176a2e73d80e3fbded58d850e4324ac1eda4e988fa0db5d38c427ab1a4",
                    "blockNumber": 667349,
                    "transactionHash": "0x655efe63ce6a80b937ce60d78967fbadc49e40c0881e79233f4bd5b747aae392",
                    "transactionIndex": 0,
                    "logIndex": 0,
                    "transactionLogIndex": "0x0",
                    "removed": false,
                    "id": "log_ac3149c4"
                }
            ],
            "logsBloom": "0x00000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000008000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400",
            "status": true,
            "effectiveGasPrice": 500000000,
            "type": "0x0"
        }
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
    | callbackUrl          | string          | Yes                 |

```
{
    "wallet_address":"0x147f20a28739da15419AdC04e61fd83e60962683",
    "to":"0xbD8992F758B4429b92D1Afc1b53aB5Bc16bD8475",
    "amount":"2000",
    "contract_address":"0x4175a3EE7fbD167EAd1abef7EA410EdE42303F41",
    "callbackUrl": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "requestId": 28,
        "nonce": 506,
        "status": 2,
        "receipt": {
            "transactionHash": "0xe0f915f728f0ffd4b280efddcf171908acd95fe295a8affcafa8993644e05916",
            "transactionIndex": 0,
            "blockHash": "0x4b89e9c33ceaa0a3025168db65f2d86316844ee3cdafd9ef64e06e8d3dd08ebc",
            "from": "0x147f20a28739da15419adc04e61fd83e60962683",
            "to": "0x4175a3ee7fbd167ead1abef7ea410ede42303f41",
            "blockNumber": 667326,
            "cumulativeGasUsed": 118552,
            "gasUsed": 118552,
            "contractAddress": null,
            "logs": [
                {
                    "address": "0x4175a3EE7fbD167EAd1abef7EA410EdE42303F41",
                    "topics": [
                        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                        "0x0000000000000000000000000000000000000000000000000000000000000000",
                        "0x000000000000000000000000bd8992f758b4429b92d1afc1b53ab5bc16bd8475"
                    ],
                    "data": "0x0000000000000000000000000000000000000000000000000000002e90edd000",
                    "blockHash": "0x4b89e9c33ceaa0a3025168db65f2d86316844ee3cdafd9ef64e06e8d3dd08ebc",
                    "blockNumber": 667326,
                    "transactionHash": "0xe0f915f728f0ffd4b280efddcf171908acd95fe295a8affcafa8993644e05916",
                    "transactionIndex": 0,
                    "logIndex": 0,
                    "transactionLogIndex": "0x0",
                    "removed": false,
                    "id": "log_30caa01f"
                }
            ],
            "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000100000000000000000000000000000000000000000020000000000000000000800000000000000000000000010200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000002000800000000000000100000000000010000000000000000000020000000000000000000000000000000000000000000000000000000000000000000",
            "status": true,
            "effectiveGasPrice": 500000000,
            "type": "0x0"
        }
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
    | callbackUrl          | string          | Yes                 |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da15419AdC04e61fd83e60962683",
    "to":"0xbD8992F758B4429b92D1Afc1b53aB5Bc16bD8475",
    "amount":"2000",
    "contract_address":"0x4175a3EE7fbD167EAd1abef7EA410EdE42303F41",
    "callbackUrl": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "requestId": 30,
        "nonce": 508,
        "status": 2,
        "receipt": {
            "transactionHash": "0xf766663e416fc58d36d3cc56da4df4bb609505a41f0fa61bdf97f1b380f96a5e",
            "transactionIndex": 0,
            "blockHash": "0x5246b9c0170d8f4c4791a4c3569203e476c5d3cec6a80febd2adbcaa644ee5a5",
            "from": "0x147f20a28739da15419adc04e61fd83e60962683",
            "to": "0x4175a3ee7fbd167ead1abef7ea410ede42303f41",
            "blockNumber": 667340,
            "cumulativeGasUsed": 118552,
            "gasUsed": 118552,
            "contractAddress": null,
            "logs": [
                {
                    "address": "0x4175a3EE7fbD167EAd1abef7EA410EdE42303F41",
                    "topics": [
                        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                        "0x000000000000000000000000bd8992f758b4429b92d1afc1b53ab5bc16bd8475",
                        "0x0000000000000000000000000000000000000000000000000000000000000000"
                    ],
                    "data": "0x0000000000000000000000000000000000000000000000000000002e90edd000",
                    "blockHash": "0x5246b9c0170d8f4c4791a4c3569203e476c5d3cec6a80febd2adbcaa644ee5a5",
                    "blockNumber": 667340,
                    "transactionHash": "0xf766663e416fc58d36d3cc56da4df4bb609505a41f0fa61bdf97f1b380f96a5e",
                    "transactionIndex": 0,
                    "logIndex": 0,
                    "transactionLogIndex": "0x0",
                    "removed": false,
                    "id": "log_262335f3"
                }
            ],
            "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000100000000000000000000000000000000000000000020000000000000000000800000000000000000000000010200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000002000800000000000000100000000000010000000000000000000020000000000000000000000000000000000000000000000000000000000000000000",
            "status": true,
            "effectiveGasPrice": 500000000,
            "type": "0x0"
        }
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
    | callbackUrl          | string          | Yes                 |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da15419AdC04e61fd83e60962683",
    "to":"0xbD8992F758B4429b92D1Afc1b53aB5Bc16bD8475",
    "amount":"2000",
    "contract_address":"0x4175a3EE7fbD167EAd1abef7EA410EdE42303F41",
    "callbackUrl": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": 200,
    "result": {
        "requestId": 1,
        "nonce": 514,
        "status": 2,
        "receipt": {
            "transactionHash": "0xb9c5a6aa121edfafda8802eda33dfd2af44db1e9f4fec9ab8c2023fc1dbd51d8",
            "transactionIndex": 0,
            "blockHash": "0x9dd481cff735ceb7cb76b1009eea6c4ef03666e14d2e212e5f2803918dcbc136",
            "from": "0x147f20a28739da15419adc04e61fd83e60962683",
            "to": "0x4175a3ee7fbd167ead1abef7ea410ede42303f41",
            "blockNumber": 669619,
            "cumulativeGasUsed": 116928,
            "gasUsed": 116928,
            "contractAddress": null,
            "logs": [
                {
                    "address": "0x4175a3EE7fbD167EAd1abef7EA410EdE42303F41",
                    "topics": [
                        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                        "0x000000000000000000000000147f20a28739da15419adc04e61fd83e60962683",
                        "0x000000000000000000000000bd8992f758b4429b92d1afc1b53ab5bc16bd8475"
                    ],
                    "data": "0x0000000000000000000000000000000000000000000000000000002e90edd000",
                    "blockHash": "0x9dd481cff735ceb7cb76b1009eea6c4ef03666e14d2e212e5f2803918dcbc136",
                    "blockNumber": 669619,
                    "transactionHash": "0xb9c5a6aa121edfafda8802eda33dfd2af44db1e9f4fec9ab8c2023fc1dbd51d8",
                    "transactionIndex": 0,
                    "logIndex": 0,
                    "transactionLogIndex": "0x0",
                    "removed": false,
                    "id": "log_83f4a9c9"
                }
            ],
            "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000100000000000000000000000000000100000000000000000000000000000000000000000000000000000000010200000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000002000800000000000000100000000000010000000000008000000000000000000000000000000000000000000000000000000000000000000000000000",
            "status": true,
            "effectiveGasPrice": 500000000,
            "type": "0x0"
        }
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
    | callbackUrl          | string          | No                  |

```js title="Sample request"
{
    "wallet_address":"0x147f20a28739da1.....",
    "to":"0xbD8992F758B4429b92D1Af....",
    "contract_address":"0x4175a3EE7fbD167EAd1a.....",
    "callbackUrl": "https://postman-echo.com/post?"
}
```

```js title="Sample result"
{
    "status": "success",
    "result": {
        "requestId": "118628",
        "from": "0xC5477130AB175674ce.....",
        "nonce": 4,
        "transactionHash": "0x5ce8fd99c9a1656d0c1005a36e8073ca1568d3dc....",
        "status": 1
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
    "wallet_address":"0x147f20a28739da15419AdC04e61fd83e60962683",
    "contract_address":"0x4175a3EE7fbD167EAd1abef7EA410EdE42303F41",
}
```

```js title="Sample result"
{
    "status": 200,
    "result": '1000000000'
}
```
<br/>