---

sidebar_class_name: hidden


---

# Transaction Fee

# Get Transaction Fee

Get the transaction fee base on desire payment token

>**POST** 

```
API_URL/api/token/get-transaction-fee
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
    | contract_address     | string          | yes                 |
    | encoded_data         | string          | No                  |
    | wallet_address       | string          | No                  |

if no contract_address pass will use MasToken as Default <br/>
if invalid contract_address was pass will use MasToken

```js title="Sample result"
{
    "status": 200,
    "result": {
        "contract_address": "0xc02161D9e08E620d....",
        "transaction_fee": 0.1
    }
}
```

<br/>


# Get Token Price

Get the Token price

>**GET** 

```
API_URL/api/token/get-token-price
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
    | contract_address     | string          | yes                 |

if no contract_address pass will use MasToken as Default <br/>
if invalid contract_address was pass will use MasToken

```js title="Sample result"
{
  "status": 200,
  "result": {
    "contract_address": "0xc02161D9e08E620d....",
    "token_price": 4.55
  }
}
```

<br/>

# Get All Token Price

Get the Token price

>**GET** 

```
API_URL/api/token/get-all-token-price
```
#### HEADERS

<pre>
**client_id**      : 9b16ae5638534ae19...*
**client_secret**  : sk_9b16ae5638534ae...* 
**content-type**   : application/json
</pre>


```js title="Sample result"
{
  "status": 200,
  "result": [
    {
      "contract_address": "0x5eca43F90A8...",
      "token_price": 4.45
    },
    {
      "contract_address": "0x6FdB5730972...",
      "token_price": 2.25
    },
    {
      "contract_address": "0xdEc4Ea37672...",
      "token_price": 4.45
    }
  ]
}
```

<br/>