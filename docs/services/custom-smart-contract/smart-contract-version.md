---
sidebar_position: 3
---

# Smart Contract Version

**Note: A smart contract project is required to create a project version.

## List Smart Contract Versions

List Smart Contract Versions

>**GET** 

```
API_URL/api/contract/projects/{projectSlug}/versions
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "result": [
        {
            "status": "deployed",
            "compile_type": "standard",
            "version": "v1.0.0",
            "slug": "1-v100",
            "compiler_settings": {
                "solidity": "0.8.9"
            },
            "packages": [
                "@openzeppelin/hardhat-upgrades",
                "ethers"
            ],
            "slither_file": "fileUrl",
            "last_compiled_at": "2024-12-05T06:55:50.000000Z",
            "last_deployed_at": "2025-01-07T06:32:06.000000Z",
            "latest_error": "",
            "vulnerabilities": 4,
            "created_at": "2024-12-05T05:47:42.000000Z",
            "updated_at": "2025-01-07T06:32:06.000000Z"
        },
        ...
    ],
    "pagination": {
        "current_page": 1,
        "first_page_url": "http://localhost/api/contract/projects/test-project/versions?page=1",
        "last_page": 1,
        "last_page_url": "http://localhost/api/contract/projects/test-project/versions?page=1",
        "next_page_url": null,
        "per_page": 10,
        "prev_page_url": null,
        "total": 8
    },
    "message": "Success"
}
```

<br/>

## Get Smart Contract Version Details

Get Smart Contract Version Details

>**GET** 

```
API_URL/api/contract/projects/{projectSlug}/versions/{versionSlug}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "status": "deployed",
        "compile_type": "standard",
        "version": "v1.0.0",
        "slug": "1-v100",
        "artifacts": [
            {
                "id": 17,
                "contract_name": "ContractB",
                "contract_abi": [
                    {
                        "type": "constructor",
                        "inputs": [
                            {
                                "name": "_contractA",
                                "type": "address",
                                "internalType": "address"
                            }
                        ],
                        "stateMutability": "nonpayable"
                    },
                    {
                        "name": "contractA",
                        "type": "function",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address",
                                "internalType": "address"
                            }
                        ],
                        "stateMutability": "view"
                    },
                    {
                        "name": "updateContractA",
                        "type": "function",
                        "inputs": [
                            {
                                "name": "_contractA",
                                "type": "address",
                                "internalType": "address"
                            }
                        ],
                        "outputs": [],
                        "stateMutability": "nonpayable"
                    }
                ],
                "bytecode": "0x608060405234...",
                "source_code": "fileUrl",
                "created_at": "2024-12-05T06:55:50.000000Z",
                "updated_at": "2024-12-05T06:55:50.000000Z"
            },
            {
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
                "bytecode": "0x60806040526...",
                "source_code": "fileUrl",
                "created_at": "2024-12-05T06:55:50.000000Z",
                "updated_at": "2024-12-05T06:55:50.000000Z"
            }
        ],
        "compiler_settings": {
            "solidity": "0.8.9"
        },
        "packages": [
            "@openzeppelin/hardhat-upgrades",
            "ethers"
        ],
        "contract_files": [
            {
                "filename": "ContractA.sol",
                "url": "fileUrl"
            },
            {
                "filename": "ContractB.sol",
                "url": "fileUrl"
            }
        ],
        "slither_file": "fileUrl",
        "emitted_events": [
            {
                "contract_address": "0x8dAaE2E5bf2AC0833B2287864A15Fa860B98EbDd",
                "contract_name": "ContractA",
                "events": [
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
                        "anonymous": false,
                        "signature": "0x7ca2ca9527391044455246730762df008a6b47bbdb5d37a890ef78394535c040"
                    }
                ],
                "has_anonymous_events": false
            },
            {
                "contract_address": "0x2C9B12D8Ecc5370b7d4290e26799F2C7E0C6BB7b",
                "contract_name": "ContractA",
                "events": [
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
                        "anonymous": false,
                        "signature": "0x7ca2ca9527391044455246730762df008a6b47bbdb5d37a890ef78394535c040"
                    }
                ],
                "has_anonymous_events": false
            }
        ],
        "last_compiled_at": "2024-12-05T06:55:50.000000Z",
        "last_deployed_at": "2025-01-07T06:32:06.000000Z",
        "latest_error": "",
        "vulnerabilities": 4,
        "created_at": "2024-12-05T05:47:42.000000Z",
        "updated_at": "2025-01-07T06:32:06.000000Z"
    }
}
```

<br/>

## Create Smart Contract Version

Create Smart Contract Version

>**POST** 

```
API_URL/api/contract/projects/{projectSlug}/versions
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |       Name        | Required |                                                                      Description                                                                      |
    | :---------------: | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: |
    |      version      |   Yes    |                  The version name. Only accepts alpha numeric charaters, dot(.), dash(-) and underscore. Empty space is not allowed                   |
    | compiler_settings |   Yes    |                                             Compiler settings to use to compile uploaded smart contracts                                              |
    |  contract_files   |   Yes    |                                List of contract files to be compiled. Uploaded files must be in solidity(.sol) format                                 |
    |     packages      |    No    | Lis of package name used by the uploaded smart contract as an array of strings. Can be ommitted if the uploaded smart contract is in flattened format |

```bash title="Sample Request"
curl -X POST "https://API_URL/api/contract/projects/{projectSlug}/versions" \
  -H "client_id: 9b16ae5638534ae1961fb370f874b6cc" \
  -H "client_secret: sk_9b16ae5638534ae1961fb370f874b6cc" \
  -F "contract_files[]=@/path/to/ContractA.pdf" \
  -F "version=v1.01" \
  -F "compiler_settings[solidity][version]=v0.8.27" \
  -F "compiler_settings[solidity][settings][optimizer][enabled]=1" \
  -F "compiler_settings[solidity][settings][optimizer][runs]=200" \
  -F "packages[]=ethers" \
  -F "packages[]=@openzeppelin/hardhat-upgrades" \

```

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "status": "compile_queued",
        "compile_type": "standard",
        "version": "v1.01",
        "slug": "4-v101",
        "compiler_settings": {
            "solidity": {
                "version": "0.8.27",
                "settings": {
                    "optimizer": {
                        "enabled": true,
                        "runs": 200
                    }
                }
            }
        },
        "packages": [
            "ethers",
            "@openzeppelin/hardhat-upgrades"
        ],
        "slither_file": null,
        "last_compiled_at": null,
        "last_deployed_at": null,
        "latest_error": "",
        "vulnerabilities": null,
        "created_at": "2025-02-10T09:20:34.000000Z",
        "updated_at": "2025-02-10T09:20:34.000000Z"
    }
}
```

<br/>

## Update Smart Contract Version

Update Smart Contract Version

**Note: Once your project version is deployed, you can no longer update the project version info. Create a new version instead.

>**POST** 

```
API_URL/api/contract/projects/{projectSlug}/versions/{versionSlug}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |       Name        | Required |                                                                      Description                                                                       |
    | :---------------: | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: |
    |      version      |   Yes    |                   The version name. Only accepts alpha numeric charaters, dot(.), dash(-) and underscore. Empty space is not allowed                   |
    | compiler_settings |   Yes    |                                              Compiler settings to use to compile uploaded smart contracts                                              |
    |  contract_files   |   Yes    |                                 List of contract files to be compiled. Uploaded files must be in solidity(.sol) format                                 |
    |     packages      |    No    | List of package name used by the uploaded smart contract as an array of strings. Can be ommitted if the uploaded smart contract is in flattened format |

```bash title="Sample Request"
curl -X POST "https://API_URL/api/contract/projects/{projectSlug}/versions/{versionSlug}" \
  -H "client_id: 9b16ae5638534ae1961fb370f874b6cc" \
  -H "client_secret: sk_9b16ae5638534ae1961fb370f874b6cc" \
  -F "contract_files[]=@/path/to/ContractA.pdf" \
  -F "version=v1.01" \
  -F "compiler_settings[solidity][version]=v0.8.27" \
  -F "compiler_settings[solidity][settings][optimizer][enabled]=1" \
  -F "compiler_settings[solidity][settings][optimizer][runs]=200" \
  -F "packages[]=ethers" \
  -F "packages[]=@openzeppelin/hardhat-upgrades" \

```

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "status": "compile_queued",
        "compile_type": "standard",
        "version": "v1.01",
        "slug": "4-v101",
        "compiler_settings": {
            "solidity": {
                "version": "0.8.27",
                "settings": {
                    "optimizer": {
                        "enabled": true,
                        "runs": 200
                    }
                }
            }
        },
        "packages": [
            "ethers",
            "@openzeppelin/hardhat-upgrades"
        ],
        "slither_file": null,
        "last_compiled_at": null,
        "last_deployed_at": null,
        "latest_error": "",
        "vulnerabilities": null,
        "created_at": "2025-02-10T09:20:34.000000Z",
        "updated_at": "2025-02-10T09:20:34.000000Z"
    }
}
```

<br/>

## Deploy Smart Contract Version

Deploy Smart Contract Version

>**POST** 

```
API_URL/api/contract/projects/{projectSlug}/versions/{versionSlug}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

### Example using custodial wallet

#### Params     
    |                Name                |                    Required                     |                                Description                                |
    | :--------------------------------: | :---------------------------------------------: | :-----------------------------------------------------------------------: |
    |        wallet_options.type         |                       Yes                       | Wallet type to be used to deploy. Accepted values: organisation, end_user |
    |       wallet_options.address       |                       Yes                       |          Wallet address to be used to deploy the smart contract           |
    |         deployment_params          |                       Yes                       |                 List of smart contract(s) to be deployed                  |
    | deployment_params.*.sc_artifact_id |                       Yes                       |   The contract artifact ID. Retrieved from project version details API    |
    |     deployment_params.*.params     | Required if contract have deployment parameters |  Key-value array list of parameters required for the contract deployment  |
    |     deployment_params.*.order      |                       Yes                       |         The order of deployment of smart contract(s) in the list          |
    |            callback_url            |                       No                        |             Callback URL to receive deployment status update              |

```js title="Sample Request Body (Custodial Wallet)"
{
    "wallet_options": {
        "type": "organisation",
        "address": "0xC7F59f4F9E9e490023576E33Cabb9F9Cf5c48ac6"
    },
    "deployment_params": [
        {
            "sc_artifact_id": 20,
            "params": null,
            "order": 1
        },
        {
            "sc_artifact_id": 19,
            "params": {
                "_contractA": "{ContractA_ADDRESS}"
            },
            "order": 2
        }
    ]
}
```

The returned values will be in the format of

```js title="Sample Result (Custodial Wallet)"
{
    "message": "Success",
    "result": {
        "deployment_id": "test-project-v101_1738552530",
        "status": "pending",
        "wallet_options": {
            "type": "organisation",
            "address": "0xC7F59f4F9E9e490023576E33Cabb9F9Cf5c48ac6"
        },
        "deployment_params": [
            {
                "sc_artifact_id": 20,
                "params": null,
                "order": 1
            },
            {
                "sc_artifact_id": 19,
                "params": {
                    "_contractA": "{ContractA_ADDRESS}"
                },
                "order": 2
            }
        ],
        "latest_error": null,
        "deployed_at": null,
        "created_at": "2025-02-03T03:15:30.000000Z",
        "updated_at": "2025-02-03T03:15:30.000000Z"
    }
}
```

### Example using non-custodial wallet (self-signed transaction)

#### Params     
    |                Name                | Required |                             Description                              |
    | :--------------------------------: | :------: | :------------------------------------------------------------------: |
    |        wallet_options.type         |   Yes    |   Wallet type to be used to deploy. Accepted values: non_custodial   |
    |       wallet_options.address       |   Yes    |        Wallet address to be used to deploy the smart contract        |
    |         deployment_params          |   Yes    |               List of smart contract(s) to be deployed               |
    | deployment_params.*.sc_artifact_id |   Yes    | The contract artifact ID. Retrieved from project version details API |
    |   deployment_params.*.signed_trx   |   Yes    |       The self-signed transaction for the contract deployment        |
    |     deployment_params.*.order      |   Yes    |       The order of deployment of smart contract(s) in the list       |

```js title="Sample Request Body (Non-Custodial Wallet)"
{
    "wallet_options": {
        "type": "non_custodial",
        "address": "0x6BCEB78D049FFE517b060fbD6DC1eA11b8e3f4f7"
    },
    "deployment_params": [
        {
            "order": 1,
            "sc_artifact_id": 100,
            "signed_trx": "0xf912c18080835b8d808080b9127160806040..."
        }
    ]
}
```

The returned values will be in the format of

```js title="Sample Result (Non-Custodial Wallet)"
{
    "message": "Success",
    "result": {
        "deployment_id": "test-project_5-v001_1738746718",
        "status": "pending",
        "wallet_options": {
            "type": "non_custodial",
            "address": "0x6BCEB78D049FFE517b060fbD6DC1eA11b8e3f4f7"
        },
        "deployment_params": [
            {
                "order": 1,
                "sc_artifact_id": 100,
                "signed_trx": "0xf912c18080835b8d808080b9127..."
            }
        ],
        "latest_error": null,
        "deployed_at": null,
        "created_at": "2025-02-05T09:11:58.000000Z",
        "updated_at": "2025-02-05T09:11:58.000000Z"
    }
}
```

### Callback Response Format

The returned result for a callback response will be in the below format:

**Note: The callback will only trigger once all contracts defined in the deployment jobs are completed, or if an error occured during deployment.

```js title="Sample Callback Response"
{
  "status": "Completed", // Status of the deployment - Completed: Successfully deployed; Error: Erro occured when deploying
  "message": "Success", // Will contains the error message in case of failure
  "deployment_id": "test-project_11-3_1741248042", // The deployment id of the deployment job
  "deployed_contract_addresses": [ // Contains information of deployed contracts. 
    {
      "sc_artifact_id": 148, 
      "contract_address": "0xD07012Dca98267Bfed4Ac8e6FCC1096F8990bC6c", // Deployed contract address
      "receipt": {
        "to": null,
        "from": "0xc7f59f4f9e9e490023576e33cabb9f9cf5c48ac6",
        "logs": [],
        "type": "0x0",
        "status": true,
        "gasUsed": 218294,
        "blockHash": "0x7d303035d0c84463c9f5998d125345136ed34ce788dd0a31dfe16737e8f29768",
        "logsBloom": "0x000000000000000...",
        "blockNumber": 5998152,
        "contractAddress": "0xD07012Dca98267Bfed4Ac8e6FCC1096F8990bC6c",
        "transactionHash": "0xa46f74a4b0f3fd9d9c23a4b5ea5b430df0323473fc9d28e8d6b9a66c526ed18f",
        "transactionIndex": 0
      }
    },
    ...
  ]
}
```

<br/>