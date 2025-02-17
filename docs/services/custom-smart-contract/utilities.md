---
sidebar_position: 6
---
# Utilities Endpoint

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
