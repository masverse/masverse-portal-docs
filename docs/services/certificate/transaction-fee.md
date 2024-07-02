---
sidebar_position: 4
sidebar_class_name: hidden


---

# Transaction Fee

# Get Transaction Fee

Get the transaction fee base on desire payment token

>**POST** 

```
API_URL/api/certificate/get-transaction-fee
```
#### HEADERS

<pre>
**client_id**      : 9b16ae5638534ae1961fb370f874b6cc*
**client_secret**  : sk_9b16ae5638534ae1961fb370f874b6cc* 
**content-type**   : application/json
</pre>

#### Query string
    | Name                 | Type            | Required            |
    |:--------------------:|:---------------:|:-------------------:|
    | contract_address     | string          | No                  |

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
