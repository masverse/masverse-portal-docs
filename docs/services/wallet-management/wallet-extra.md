---

sidebar_class_name: hidden


---

# Wallet


## Create Self Custodian User Wallet

Creates a Self Custodian User and storing it in MasChain.

>**POST** 

```
API_URL/api/wallet/create-self-custodian-user
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### BODY
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | name                 | string          | Yes                 |
    | email                | string          | Yes                 |
    | ic                   | string          | no                  |
    | wallet_address       | string          | Yes                 |
    | wallet_name          | string          | No                  |
    | phone                | string          | No                  |
    | entity_id            | int             | No                  |
    | entity_category_id   | int             | No                  |

```js title="Sample request"
{
    "name":"test name2",
    "email":"testemail9@gmail.com",
    "ic":"test ic",
    "wallet_address":"0xF821eaD377B6689D25.....",
    "phone":"test ic",
    "entity_id":1,
}
```

```js title="Sample result"
{
    "status": 200,
    "user": {
            "name": "Bob",
            "email": "test@gmail.com",
            "ic": "123131231",
            "phone": null
    },
    "wallet": {
        "wallet_id": 1,
        "wallet_name": "bob wallet",
        "wallet_address": "0x556283a26F5C3d7bcB9a...",
        "wallet_type": "user",
        "is_active": 1,
        "entity_id": null,
        "entity_category_id": null,
    }
}
```
<br/>


## Get Wallet Transactions

Get Wallet Transaction

>**GET** 

```
API_URL/api/wallet/get-wallet-transactions?address={address}?show_fee=0
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### Params
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | address              | string          | Yes                 |
    | show_fee              | string          | No , 0 or 1 default 1              |

```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "transactionHash": "0x2a58d0af69ade0434ebd...",
            "from": "0x1a0BA2b4d8830496B...",
            "to": "0x1a0BA2b4d883049..",
            "status": "Success"
            "extra_method": "mint",
            "extra_amount": "1000",
            "extra_params": null,
            "is_fee": null,
            "created_at": "2024-08-22 09:59:24"
        },
        {
            "transactionHash": "0x3758c5f7e49c617070beae15...",
            "from": "0x1a0BA2b4d8830496B...",
            "to": null,
            "status": "Pending",
            "extra_method": "transfer",
            "extra_amount": "1000",
            "extra_params": null,
            "is_fee": 1,
            "created_at": "2024-08-22 09:59:24"

        },
        {
            "transactionHash": "0x3758c5f7e49c617070beae15...",
            "from": "0x1a0BA2b4d8830496B...",
            "to": null,
            "status": "Fail",
            "extra_method": null,
            "extra_amount": null,
            "extra_params": null,
            "is_fee": null,
            "created_at": "2024-08-22 09:59:24"

        },
    ]
    "pagination": {
        "current_page": 1,
        "first_page_url": "api/wallet/get-wallet-transactions?page=1",
        "last_page": 1,
        "last_page_url": "api/wallet/get-wallet-transactions?page=1",
        "next_page_url": null,
        "per_page": 20,
        "prev_page_url": null,
        "total": 8
    }
}
```
<br/>

## Get Smart contracts

Get Smart contracts

>**GET** 

```
API_URL/api/wallet/v2/get-smart-contracts
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**


```js title="Sample result"
{
    "status": 200,
    "result":  [
        {
            "contract_address": "0x6326aFF363CcCdF4404450c24B48b926dDCeC88C",
            "contract_name": "TK4",
            "organisation_id": 3,
            "is_public": 1,
            "logo": null,
            "name": "TK14",
            "symbol": "TK4"
        },
    ]
    "pagination": {
        "current_page": 1,
        "first_page_url": "api/wallet/get-wallet-transactions?page=1",
        "last_page": 1,
        "last_page_url": "api/wallet/get-wallet-transactions?page=1",
        "next_page_url": null,
        "per_page": 20,
        "prev_page_url": null,
        "total": 8
    }
}
```
<br/>


## Get Smart contracts V2

Get Smart contracts V2
 
>**GET** 

```
API_URL/api/wallet/get-smart-contracts
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

### Pagination
#### Query string
    | Name                 |Required            |
    |:--------------------:|:---------------:|
    | contract_address_hash           | no                 |
    | fiat_value           | no                 |
    | holder_count           | no                 |
    | is_name_null           | no                 |
    | items_count           | no                 |
    | market_cap           | no                 |
    | name           | no                 |


```js title="Sample result"
{
  "status": 200,
  "result": {
    "items": [
      {
        "address": "0xCEC3d6689ed50b9...",
        "circulating_market_cap": null,
        "decimals": null,
        "exchange_rate": null,
        "holders": "4",
        "icon_url": null,
        "name": "penguin",
        "symbol": "CERT",
        "total_supply": null,
        "type": "ERC-721",
        "volume_24h": null
      }
    ],
    "next_page_params": {
      "contract_address_hash": "0xe27aa3916bc930415...",
      "fiat_value": null,
      "holder_count": 3,
      "is_name_null": false,
      "items_count": 50,
      "locale": "en",
      "market_cap": null,
      "name": "template..."
    }
  }
}
```
<br/>


## Get Transaction Details

Get Transaction Details

>**GET** 

```
API_URL/api/wallet/get-transaction-details/{tx_id}
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

```js title="Sample result"
{
    "status": 200,
    "result": {
        "timestamp": "2024-07-27T14:01:06.000000Z",
        "fee": {
            "type": "actual",
            "value": "0"
        },
        "gas_limit": "6000000",
        "block": 2804955,
        "status": "ok",
        "method": "mint",
        "confirmations": 183347,
        "type": 0,
        "exchange_rate": null,
        "to": {
            "ens_domain_name": null,
            "hash": "0x7DC2F54255E05394b2AB43FF925Dc40f442d6CB6",
            "implementation_name": null,
            "implementations": [],
            "is_contract": true,
            "is_verified": false,
            "metadata": null,
            "name": "USD",
            "private_tags": [],
            "public_tags": [],
            "watchlist_names": []
        },
        "tx_burnt_fee": null,
        "max_fee_per_gas": null,
        "result": "success",
        "hash": "0x184572f0d7613bb0f9995f93bb97ad5df0e6c023560d069090fbe7e8f57a4c09",
        "gas_price": "0",
        "priority_fee": null,
        "base_fee_per_gas": "0",
        "from": {
            "ens_domain_name": null,
            "hash": "0x1a0BA2b4d8830496Beb84696E3E278D1eb8fE046",
            "implementation_name": null,
            "implementations": [],
            "is_contract": false,
            "is_verified": null,
            "metadata": null,
            "name": null,
            "private_tags": [],
            "public_tags": [],
            "watchlist_names": []
        },
        "token_transfers": [
            {
                "block_hash": "0x94ab6579c391cafd4a7fc15e1b6cb5d67716b79507cc49cf6fd4e512106bf1bb",
                "from": {
                    "ens_domain_name": null,
                    "hash": "0x0000000000000000000000000000000000000000",
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
                "log_index": "0",
                "method": null,
                "timestamp": null,
                "to": {
                    "ens_domain_name": null,
                    "hash": "0x1a0BA2b4d8830496Beb84696E3E278D1eb8fE046",
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
                    "address": "0x7DC2F54255E05394b2AB43FF925Dc40f442d6CB6",
                    "circulating_market_cap": null,
                    "decimals": "18",
                    "exchange_rate": null,
                    "holders": "2",
                    "icon_url": null,
                    "name": "USD",
                    "symbol": "USD",
                    "total_supply": "74999989980",
                    "type": "ERC-20",
                    "volume_24h": null
                },
                "total": {
                    "decimals": "18",
                    "value": "100000000"
                },
                "tx_hash": "0x184572f0d7613bb0f9995f93bb97ad5df0e6c023560d069090fbe7e8f57a4c09",
                "type": "token_minting"
            }
        ],
        "tx_types": [
            "contract_call",
            "token_transfer"
        ],
        "gas_used": "93842",
        "created_contract": null,
        "position": 0,
        "nonce": 81,
        "has_error_in_internal_txs": null,
        "actions": [],
        "decoded_input": {
            "method_call": "mint(address to, uint256 amount)",
            "method_id": "40c10f19",
            "parameters": [
                {
                    "name": "to",
                    "type": "address",
                    "value": "0x1a0ba2b4d8830"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "value": "100000000"
                }
            ]
        },
        "token_transfers_overflow": false,
        "raw_input": "0x40c10f190000000000000000000000001a0ba2b4d8830496beb84696e3e278d1eb8fe0460000000000000000000000000000000000000000000000000000000005f5e100",
        "value": "0",
        "max_priority_fee_per_gas": null,
        "revert_reason": null,
        "confirmation_duration": [
            0,
            6000
        ],
        "tx_tag": null
    }
}
```
<br/>



## Get Tokens Transfer History

Get all token from wallets

>**POST** 

```
API_URL/api/wallet/get-wallet-tokens?contract_address={wallet_address}
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

### Pagination
#### Query string
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | block_number         | int          | no                 |
    | index               | int          | no                 |

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