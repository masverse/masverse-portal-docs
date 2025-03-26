---
sidebar_position: 5
---

# Smart Contract Interaction

## List Deployed Smart Contracts

List Deployed Smart Contracts

**Note: This API only return smart contract(s) deployed through your organisation API key

>**GET** 

```
API_URL/api/contract/smart-contracts
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "result": [
        {
            "contract_address": "0x8dAaE2E5bf2AC0833B2287864A15Fa860B98EbDd",
            "deployment_params": [],
            "contract_name": "ContractA",
            "project_name": "Test Project",
            "version": "v1.0.0",
            "deployed_at": "2024-12-05T07:12:42.000000Z"
        },
        ...
    ],
    "pagination": {
        "current_page": 1,
        "first_page_url": "http://localhost/api/smart-contracts?page=1",
        "last_page": 1,
        "last_page_url": "http://localhost/api/smart-contracts?page=1",
        "next_page_url": null,
        "per_page": 10,
        "prev_page_url": null,
        "total": 4
    },
    "message": "Success"
}
```

<br/>

## Get Contract Details By Address

Get Contract Details By Address

>**GET** 

```
API_URL/api/contract/smart-contracts/{address}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "contract_address": "0x8dAaE2E5bf2AC0833B2287864A15Fa860B98EbDd",
        "deployment_params": [],
        "artifact": {
            "id": 18,
            "contract_name": "ContractA",
            "contract_abi": [
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
                    ],
                    "anonymous": false
                },
                {
                    "name": "count",
                    "type": "function",
                    "inputs": [],
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ],
                    "stateMutability": "view"
                },
                {
                    "name": "increment",
                    "type": "function",
                    "inputs": [],
                    "outputs": [],
                    "stateMutability": "nonpayable"
                }
            ],
            "bytecode": "0x60806040526000...",
            "source_code": "fileUrl",
            "created_at": "2024-12-05T06:55:50.000000Z",
            "updated_at": "2024-12-05T06:55:50.000000Z"
        },
        "deployed_at": "2024-12-05T07:12:42.000000Z",
        "deployment_id": "test-project_1-v100_1733382752",
        "deploy_gas_used": 144321,
        "total_gas_used": 310275
    }
}
```

<br/>

## Smart Contract Call (Read)

Smart Contract Call (Read)

>**POST** 

```
API_URL/api/contract/smart-contracts/{address}/call
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |     Name     |               Required                |                                                                                                        Description                                                                                                         |
    | :----------: | :-----------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    |     from     |                  Yes                  |                                                                                        The address to call the smart contract from                                                                                         |
    | method_name  |                  Yes                  |                                                                                                  The method name to call                                                                                                   |
    | contract_abi |                  No                   | By default, the contract abi of the contract's compiled artifact will be used. In case of interaction with a proxy's implementation contract, you will be required to provide this information for successful interaction. |
    |    params    | Required if method requires parameter |                                                                              Key-value array list of parameters required for the method call                                                                               |


```js title="Sample Request Body"
{
    "from": "0xC7F59f4F9E...Cabb9F9Cf5c48ac6",
    "method_name": "methodName",
    "contract_abi": [...], // Optional - see description
    "params": {
        "fieldA": "...",
        ...
    }
}
```

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "_count": "0",
        "_count2": "0"
    }
}
```

<br/>

## Smart Contract Execute (Write)

Smart Contract Execute (Write)

>**POST** 

```
API_URL/api/contract/smart-contracts/{address}/execute
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

### Example using custodial wallet

#### Params     
    |          Name          |               Required                |                                                                                                                                   Description                                                                                                                                   |
    | :--------------------: | :-----------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    |  wallet_options.type   |                  Yes                  |                                                                                             Wallet type to be used for contract execution. Accepted values: organisation, end_user                                                                                              |
    | wallet_options.address |                  Yes                  |                                                                                                                Wallet address to be used for contract execution                                                                                                                 |
    |      method_name       |                  Yes                  |                                                                                                                   The method name of the function to execute                                                                                                                    |
    |      contract_abi      |                  No                   | By default, the contract abi of the contract's compiled artifact will be used. In case of interaction with a proxy's implementation contract, you will be required to provide this information for successful interaction. Not required if executed through signed transaction. |
    |         params         | Required if method requires parameter |                                                                                                      Key-value array list of parameters required for the method execution                                                                                                       |
    |      callback_url      |                  No                   |                                                                                                        Callback URL to receive transaction receipt when it is available                                                                                                         |


```js title="Sample Request Body (Custodial Wallet)"
{
    "wallet_options": {
        "type": "organisation",
        "address": "0xC7F59f4F9E9e490023576E33Cabb9F9Cf5c48ac6"
    },
    "method_name": "increment",
    "contract_abi": [...], // Optional - see description
    "params": {
        "fieldA": "...",
        ...
    }
}
```

The returned values will be in the format of

```js title="Sample Result (Custodial Wallet)"
{
    "message": "Success",
    "result": {
        "transaction_hash": "0x26d6fa69315459f1bc2bce83047c9ef047a3d10aa937282a8fcd454a55662c57"
    }
}
```

### Example using non-custodial wallet

#### Params     
    |          Name          | Required |                                   Description                                    |
    | :--------------------: | :------: | :------------------------------------------------------------------------------: |
    |  wallet_options.type   |   Yes    | Wallet type to be used to for contract execution. Accepted values: non_custodial |
    | wallet_options.address |   Yes    |                 Wallet address to be used for contract execution                 |
    |      method_name       |   Yes    |                    The method name of the function to execute                    |
    |       signed_trx       |   Yes    |              The self-signed transaction for the contract execution              |
    |      callback_url      |    No    |         Callback URL to receive transaction receipt when it is available         |


```js title="Sample Request Body (Non-custodial Wallet)"
{
    "wallet_options": {
        "type": "non_custodial",
        "address": "0x6BCEB78D049FFE517b060fbD6DC1eA11b8e3f4f7"
    },
    "method_name": "increment",
    "signed_trx": "0xf866048083..."
}
```

The returned values will be in the format of

```js title="Sample Result (Non-custodial Wallet)"
{
    "message": "Success",
    "result": {
        "transaction_hash": "0x26d6fa69315459f1bc2bce83047c9ef047a3d10aa937282a8fcd454a55662c57"
    }
}
```

### Callback Response Format

The returned result for a callback response will be in the below format:

**Note: The callback will only trigger once the transaction receipt is available, or if an error occured during contract execution.

```js title="Sample Callback Response"
{
  "status": "Success", // Returns Error if any error occured
  "transactionHash": "0x26d6fa69315459f1bc2bce83047c9ef047a3d10aa937282a8fcd454a55662c57",
  "receipt": {
    "transactionHash": "0x26d6fa69315459f1bc2bce83047c9ef047a3d10aa937282a8fcd454a55662c57",
    "transactionIndex": 0,
    "blockHash": "0xaa473178b5120e42a31de6a882344903ffaeb54ccb01a63a897654c43d2f7fba",
    "from": "0xc7f59f4f9e9e490023576e33cabb9f9cf5c48ac6",
    "to": "0x22e726f2d2049bd6b7af65115590c157450f738c",
    "blockNumber": 5998304,
    "gasUsed": 27659,
    "contractAddress": null,
    "logs": [
      {
        "address": "0x22E726F2d2049BD6b7af65115590C157450F738c",
        "topics": [
          "0x7ca2ca9527391044455246730762df008a6b47bbdb5d37a890ef78394535c040"
        ],
        "data": "0x0000000000000000000000000000000000000000000000000000000000000019",
        "blockHash": "0xaa473178b5120e42a31de6a882344903ffaeb54ccb01a63a897654c43d2f7fba",
        "blockNumber": 5998304,
        "transactionHash": "0x26d6fa69315459f1bc2bce83047c9ef047a3d10aa937282a8fcd454a55662c57",
        "transactionIndex": 0,
        "logIndex": 0,
        "transactionLogIndex": "0x0",
        "removed": false,
        "id": "log_c554cb45"
      }
    ],
    "logsBloom": "0x00000000000000...",
    "status": true,
    "type": "0x0"
  }
}
```

<br/>
