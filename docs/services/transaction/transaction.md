# Transaction

## Retrieve Transaction Info

Get Transaction's Information in detail

>**GET** 

```
API_URL/api/transaction/{transactionHash}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "hash": "0x1277e3116b6b6530d8d2f1f436f6bf928a864d46f022bf40a4b72e3144673486",
        "from": {
            "ens_domain_name": null,
            "hash": "0x7c74E562dFae2Cc59557Af12F54eBEfadb68A2De",
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
        "to": {
            "ens_domain_name": null,
            "hash": "0xC59D4b0d61e867CA6eE6107eB8e32345816E5D48",
            "implementations": [],
            "is_contract": true,
            "is_scam": false,
            "is_verified": false,
            "metadata": null,
            "name": "CMT",
            "private_tags": [],
            "proxy_type": null,
            "public_tags": [],
            "watchlist_names": []
        },
        "confirmations": 1669228,
        "created_contract": null,
        "block_number": 6717897,
        "block_confirmation": null,
        "status": "ok",
        "timestamp": "2025-04-25T07:35:54.000000Z",
        "gas_used": "92974",
        "gas_price": "0",
        "fee": {
            "type": "actual",
            "value": "0"
        },
        "transaction_types": [
            "contract_call",
            "token_transfer"
        ],
        "method": "transfer",
        "raw_input": "0xa9059cbb0000000000000000000000004c6cbfdd5be5206ab98c0860eb84f32e838cddf3000000000000000000000000000000000000000000000035ab028ac154b80000",
        "decoded_input": {
            "method_call": "transfer(address to, uint256 value)",
            "method_id": "a9059cbb",
            "parameters": [
                {
                    "name": "to",
                    "type": "address",
                    "value": "0x4c6CBFdD5bE5206AB98C0860Eb84F32e838cDdf3"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "value": "990000000000000000000"
                }
            ]
        },
        "token_transfers": [
            {
                "block_hash": "0x965c35acd52d4b9513115c80510d69bfdc08c4366bc34c2ce80421640fef1fed",
                "block_number": 6717897,
                "from": {
                    "ens_domain_name": null,
                    "hash": "0x7c74E562dFae2Cc59557Af12F54eBEfadb68A2De",
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
                "method": null,
                "timestamp": null,
                "to": {
                    "ens_domain_name": null,
                    "hash": "0x4c6CBFdD5bE5206AB98C0860Eb84F32e838cDdf3",
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
                "token": {
                    "address": "0xC59D4b0d61e867CA6eE6107eB8e32345816E5D48",
                    "circulating_market_cap": null,
                    "decimals": "18",
                    "exchange_rate": null,
                    "holders": "4",
                    "icon_url": null,
                    "name": "CMT",
                    "symbol": "CMT",
                    "total_supply": "12101000000000000010000",
                    "type": "ERC-20",
                    "volume_24h": null
                },
                "total": {
                    "decimals": "18",
                    "value": "990000000000000000000"
                },
                "transaction_hash": "0x1277e3116b6b6530d8d2f1f436f6bf928a864d46f022bf40a4b72e3144673486",
                "type": "token_transfer"
            }
        ],
        "edo": {
            "version": "1.0",
            "method_name": true,
            "raw_input": true,
            "decoded_input": true,
            "token_transfers": true,
            "event_logs": true
        },
        ...
    }
}
```

<br/>

## Retrieve Transaction Logs

Get Transaction's Information Log in detail

>**GET** 

```
API_URL/api/transaction/{transactionHash}/logs
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

```js title="Sample Request Body"
{
    "message": "Success",
    "result": {
        "event_logs": [
            {
                "address": {
                    "ens_domain_name": null,
                    "hash": "0xC59D4b0d61e867CA6eE6107eB8e32345816E5D48",
                    "implementations": [],
                    "is_contract": true,
                    "is_scam": false,
                    "is_verified": false,
                    "metadata": null,
                    "name": "CMT",
                    "private_tags": [],
                    "proxy_type": null,
                    "public_tags": [],
                    "watchlist_names": []
                },
                "block_hash": "0x965c35acd52d4b9513115c80510d69bfdc08c4366bc34c2ce80421640fef1fed",
                "block_number": 6717897,
                "data": "0x000000000000000000000000000000000000000000000035ab028ac154b80000",
                "decoded": {
                    "method_call": "Transfer(address indexed from, address indexed to, uint256 value)",
                    "method_id": "ddf252ad",
                    "parameters": [
                        {
                            "indexed": true,
                            "name": "from",
                            "type": "address",
                            "value": "0x7c74E562dFae2Cc59557Af12F54eBEfadb68A2De"
                        },
                        {
                            "indexed": true,
                            "name": "to",
                            "type": "address",
                            "value": "0x4c6CBFdD5bE5206AB98C0860Eb84F32e838cDdf3"
                        },
                        {
                            "indexed": false,
                            "name": "value",
                            "type": "uint256",
                            "value": "990000000000000000000"
                        }
                    ]
                },
                "index": 0,
                "smart_contract": null,
                "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x0000000000000000000000007c74e562dfae2cc59557af12f54ebefadb68a2de",
                    "0x0000000000000000000000004c6cbfdd5be5206ab98c0860eb84f32e838cddf3",
                    null
                ],
                "transaction_hash": "0x1277e3116b6b6530d8d2f1f436f6bf928a864d46f022bf40a4b72e3144673486"
            }
        ],
        "edo": {
            "version": "1.0",
            "method_name": true,
            "raw_input": true,
            "decoded_input": true,
            "token_transfers": true,
            "event_logs": true
        },
        ...
    }
}
```