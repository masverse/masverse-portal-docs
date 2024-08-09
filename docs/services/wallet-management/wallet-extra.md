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
API_URL/api/token/get-wallet-transactions?address={address}
```
#### HEADERS
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

**content-type &emsp; application/json**

#### Params
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | address              | string          | Yes                 |


```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "transactionHash": "0x2a58d0af69ade0434ebd...",
            "from": "0x1a0BA2b4d8830496B...",
            "to": "0x1a0BA2b4d883049..",
            "status": "Success"
        },
        {
            "transactionHash": "0x3758c5f7e49c617070beae15...",
            "from": "0x1a0BA2b4d8830496B...",
            "to": null,
            "status": "Pending"
        },
        {
            "transactionHash": "0x3758c5f7e49c617070beae15...",
            "from": "0x1a0BA2b4d8830496B...",
            "to": null,
            "status": "Fail"
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
