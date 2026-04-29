---
sidebar_position: 7
---
# Utilities Endpoint

## Get Chain ID

Get Chain ID

>**GET** 

```
API_URL/api/contract/utils/chain-id
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": 2207
}
```

<br/>

## Get Gas Price

Get Gas Price

>**GET** 

```
API_URL/api/contract/utils/gas-price
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": 0
}
```

<br/>


## Contract Deploy (Signed Transaction)

>**POST** 

```
API_URL/api/contract/utils/deploy
```

#### Overview

Deploys a smart contract to the blockchain using a **pre-signed transaction**. 
The caller is responsible for building and signing the transaction offline before 
submitting to this endpoint. This approach keeps private keys client-side and 
never transmitted to the server.

**Flow:**
1. Compile your contract to get ABI + bytecode
2. Build and sign the raw deploy transaction on your end
3. Submit the signed transaction hex to this endpoint
4. Receive an immediate response with `transactionHash`
5. Your `callback_url` will be called once the transaction is confirmed or fails

---

#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params
|        Name        |  Type  | Required | Description                                                                    |
| :----------------: | :----: | :------: | ------------------------------------------------------------------------------ |
|     request_id     | String | Optional | Your unique identifier for this request. Echoed back in response and callback. |
|        from        | String |   Yes    | Wallet address of the contract deployer (must match the signing key)           |
| signed_transaction | String |   Yes    | Pre-signed raw transaction hex string (starts with `0x`)                       |
|    callback_url    | String |   Yes    | Endpoint to receive the final transaction result once confirmed on-chain       |

#### Building the Signed Transaction

Before calling this endpoint, you need to build and sign the deploy transaction yourself.

> ⚠️ **Each signed transaction can only be submitted once.** Re-submitting the 
> same hex will result in an `already known` error from the network. Always 
> build a fresh signed transaction for each deployment.

```js title="Sample Request"
{
    "request_id": "15354",
    "from": "0x1a0BA2b4d8830496Beb8469...",
    "signed_transaction": "0xf90d4e0180835b8d808080...",
    "callback_url": "https://postman-echo.com/post?"
}
```

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "requestId": 15354,
        "from": "0x1a0BA2b4d8830496Beb8469...",
        "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1...",
        "status": 1
    }
}
```

```js title="Sample Callback Success Response"
{
    "status": "success",
    "from": "0x1a0BA2b4d8830496Beb8469...",
    "nonce": 129,
    "transactionHash": "0xf519ba69ba0e603583e0e885786f5ad1...",
    "contractAddress": "0xa259...b71965",
    "receipt": { Transaction Receipt Object }
}
```

## List Supported Compiler Versions

List Supported Compiler Versions

>**GET** 

```
API_URL/api/contract/utils/compiler-versions
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": [
        "0.8.28",
        "0.8.27",
        "0.8.26",
        ...
    ]
}
```

<br/>

## Encode ABI - Contract Deploy

Encode Contract Deployment Parameters

>**POST** 

```
API_URL/api/contract/utils/deploy-encode
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |   Name   |                    Required                     |                               Description                               |
    | :------: | :---------------------------------------------: | :---------------------------------------------------------------------: |
    |   abi    |                       Yes                       |                            The contract abi                             |
    | bytecode |                       Yes                       |                          The contract bytecode                          |
    |  params  | Required if contract have deployment parameters | Key-value array list of parameters required for the contract deployment |

```js title="Sample Request Body (Custodial Wallet)"
{
    "abi": [
        {
            "name": "increment",
            "type": "function",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        ...
    ],
    "bytecode": "0x60806040526000805560006001...",
    "params": {
        "fieldA": "Testing"
    }
}
```

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": "encodedAbiString"
}
```

<br/>

## Encode ABI - Contract Execution

Encode Contract Execution Parameters

>**POST** 

```
API_URL/api/contract/utils/execute-encode
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    |       Name       |                    Required                    |                               Description                               |
    | :--------------: | :--------------------------------------------: | :---------------------------------------------------------------------: |
    |       abi        |                      Yes                       |                            The contract abi                             |
    | contract_address |                      Yes                       |                          The contract address                           |
    |   method_name    |                      Yes                       |                   The contract method name to execute                   |
    |      params      | Required if contract method require parameters | Key-value array list of parameters required for the contract deployment |

```js title="Sample Request Body"
{
    "abi": [
        {
            "name": "increment",
            "type": "function",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        ...
    ],
    "contract_address": "0x9F7A94cEA78652479...",
    "method_name": "increment",
    "params": {
        "fieldA": "Testing"
    }
}
```

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": "encodedAbiString"
}
```

<br/>

## Estimate Gas

Estimate Gas for Transaction

>**POST** 

```
API_URL/api/contract/utils/estimate-gas
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### Params     
    | Name  |                   Required                    |               Description               |
    | :---: | :-------------------------------------------: | :-------------------------------------: |
    | from  | At least one of the listed fields is required |           The sender address            |
    |  to   | At least one of the listed fields is required |       The target/receiver address       |
    | value | At least one of the listed fields is required | Amount to transfer with the transaction |
    | data  | At least one of the listed fields is required |      ABI encoded transaction data       |
    | nonce |                      No                       |                  Nonce                  |

```js title="Sample Request Body (Contract Execution)"
{
    "from": "0x9db65D81AB6c2B6E7Ca354864f9e5b4c6eE303C5",
    "to": "0x9F7A94cEA7865247958aEbF34039AD78AF4b0C80",
    "data": "0xd09de08a"
}
```

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": 47648
}
```

<br/>

## Simulate Transaction

Simulate Transaction Execution

**Note: The revert reason returned from this API depends on the underlying smart contract. If no revert reason was included, there will be no revert reason included in the response as well.

>**POST** 

```
API_URL/api/contract/utils/simulate-transaction
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY     
    | Name  |                   Required                    |                                                 Description                                                  |
    | :---: | :-------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
    | from  | At least one of the listed fields is required | The sender address. If transaction expects specific sender, the corresponding from address shall be included |
    |  to   | At least one of the listed fields is required |                                         The target/receiver address                                          |
    | value | At least one of the listed fields is required |                                   Amount to transfer with the transaction                                    |
    | data  | At least one of the listed fields is required |                                         ABI encoded transaction data                                         |
    | nonce |                      No                       |                                                    Nonce                                                     |

```js title="Sample Request Body (Contract Execution)"
{
    "from": "0x4D377Ac7de73F399B8418F1e22c86920aF0B445F",
    "to": "0xf099a210E8B7D77B73E840c46cfB8aE4A40F25e8",
    "data": "0xa0ab965300000000000000000...",
    "value": 0,
    "gasPrice": 0,
    "nonce": 1
}
```

The returned values will be in the format of

```js title="Sample Result (Error)"
{
    "message": "Success",
    "result": {
        "success": false, // Indicator if the transaction is successful
        "message": "Returned error: VM Exception while processing transaction: revert Invalid signature provided" // Revert reason if any
    }
}
```

<br/>

## List Token Factory Contract

Retrieves the list of available Token Factory smart contract versions registered within the system.

>**GET** 

```
API_URL/api/contract/utils/contracts/token-factory
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": [
        {
            "name": "Audit V2",
            "slug": "audit-v2",
            "version_tag": "v2",
            "abi": [...]
        },
        ...
    ]
}
```

<br/>

## Get Token Factory Contract

Retrieves the complete details of a specific Token Factory smart contract version identified by its slug

>**GET** 

```
API_URL/api/contract/utils/contracts/token-factory/{slug}
```
#### HEADERS

**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

The returned values will be in the format of

```js title="Sample Result"
{
    "message": "Success",
    "result": {
        "name": "Audit V2",
        "slug": "audit-v2",
        "version_tag": "v2",
        "abi": [...]
    }
}
```

<br/>
