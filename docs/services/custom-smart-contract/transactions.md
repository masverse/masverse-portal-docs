---
sidebar_position: 6
---
# Transactions & Accounts Endpoint

## Get Account Nonce

Get Account nonce by address

>**GET** 

```
API_URL/api/contract/accounts/{address}/nonce
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": 15
}
```

<br/>

## Get Account Token Transfers

Get Account Token Transfer by Contract Address

>**GET** 

```
API_URL/api/contract/accounts/{address}/token-transfers/{contract_address}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |  Name  | Required |       Description        |
    | :----: | :------: | :----------------------: |
    | filter |    No    | "to", "from", "to\|from" |


The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": [
        {
            "block_hash": "0x8fd74fd2765e15e551ddd5102b27762e6af805ffad9cd14180df9b6cdceecaaa",
            "block_number": 6488863,
            "from": {
                "ens_domain_name": null,
                "hash": "0xc7DD0E0275FCB2b3578f04CEd86F44D1CaF618a6",
                "implementations": [],
                "is_contract": false,
                "is_scam": false,
                "is_verified": false,
                "metadata": null,
                "name": null,
                "private_tags": [],
                "proxy_type": null,
                "public_tags": [],
                "watchlist_names": []
            },
            "log_index": 0,
            "method": "transfer",
            "timestamp": "2025-04-09T09:52:30.000000Z",
            "to": {
                "ens_domain_name": null,
                "hash": "0x4891F984221cF124F6b041B533F07Fb298c1b75e",
                "implementations": [],
                "is_contract": true,
                "is_scam": false,
                "is_verified": true,
                "metadata": null,
                "name": "CoKeepsMultisigFinal",
                "private_tags": [],
                "proxy_type": null,
                "public_tags": [],
                "watchlist_names": []
            },
            "token": {
                "address": "0xA6D2D34530874B92ABC81500E5029050bD1a918a",
                "circulating_market_cap": null,
                "decimals": "18",
                "exchange_rate": null,
                "holders": "6",
                "icon_url": null,
                "name": "TestToken",
                "symbol": "TTK",
                "total_supply": "1000000000000000000000000",
                "type": "ERC-20",
                "volume_24h": null
            },
            "total": {
                "decimals": "18",
                "value": "100"
            },
            "transaction_hash": "0xe5dace25f6be4821f2121445df15eaf2721f942c9371f0ac367b321529b42dae",
            "type": "token_transfer"
        },
        ...
    ],
    "pagination": {
        "next_page_url": null
    }
}
```

<br/>

## Get Transaction

Get Transaction Details by Hash

>**GET** 

```
API_URL/api/contract/transactions/{hash}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "hash": "0x2ae066ac32a5df95a92449739dead9aae99c1d3ecbd370c2ff66d000703cb0cc",
        "nonce": 80,
        "blockHash": "0xb73f52b07c2c70d4c539323f2a6b1ec4c7e5840391c1146f3c29fcf41823ba2f",
        "blockNumber": 5996828,
        "transactionIndex": 0,
        "from": "0xC7F59f4F9E9e490023576E33Cabb9F9Cf5c48ac6",
        "to": "0x22E726F2d2049BD6b7af65115590C157450F738c",
        "value": "0",
        "gasPrice": "0",
        "gas": 6000000,
        "input": "0xd09de08a",
        "creates": null,
        "raw": "0xf8665080835b8d809422e...",
        "publicKey": "0x37eef5a82a94f6ee0872547...fc9e779471ef586fd8fe40",
        "chainId": "0x89f",
        "standardV": "0x1",
        "v": "0x1162",
        "r": "0x15aa0d4696696e39f39...a66132d76a2dbe6a9e20e34ca2f4b4408",
        "s": "0x844dce7dd3035761a9c...c9afa2e5e7b3b74a97aee8b807b30539",
        "accessList": null,
        "type": 0
    }
}
```

<br/>

## Get Transaction Receipt

Get Transaction Receipt by Hash

>**GET** 

```
API_URL/api/contract/transactions/{hash}/receipt
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "transactionHash": "0x2ae066ac32a5df95a92449739dead9aae99c1d3ecbd370c2ff66d000703cb0cc",
        "transactionIndex": 0,
        "blockHash": "0xb73f52b07c2c70d4c539323f2a6b1ec4c7e5840391c1146f3c29fcf41823ba2f",
        "from": "0xc7f59f4f9e9e490023576e33cabb9f9cf5c48ac6",
        "to": "0x22e726f2d2049bd6b7af65115590c157450f738c",
        "blockNumber": 5996828,
        "cumulativeGasUsed": 27659,
        "gasUsed": 27659,
        "contractAddress": null,
        "logs": [
            {
                "address": "0x22E726F2d2049BD6b7af65115590C157450F738c",
                "topics": [
                    "0x7ca2ca9527391044455246730762df008a6b47bbdb5d37a890ef78394535c040"
                ],
                "data": "0x0000000000000000000000000000000000000000000000000000000000000018",
                "blockHash": "0xb73f52b07c2c70d4c539323f2a6b1ec4c7e5840391c1146f3c29fcf41823ba2f",
                "blockNumber": 5996828,
                "transactionHash": "0x2ae066ac32a5df95a92449739dead9aae99c1d3ecbd370c2ff66d000703cb0cc",
                "transactionIndex": 0,
                "logIndex": 0,
                "transactionLogIndex": "0x0",
                "removed": false,
                "id": "log_5d63faca"
            }
        ],
        "logsBloom": "0x00000000000000000...",
        "status": true,
        "effectiveGasPrice": 0,
        "type": "0x0"
    }
}
```

<br/>