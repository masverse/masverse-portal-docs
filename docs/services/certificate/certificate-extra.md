---

sidebar_class_name: hidden


---

# Certificate


## Get Transaction Fee

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

## Get Wallet Certificates

Get all certificates from wallets

>**POST** 

```
API_URL/api/certificate/get-wallet-certificates?address={wallet_address}
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
    | address       | string          | Yes                  |

```js title="Sample result"
{
    "status": 200,
    "result": [
        {
            "nft_token_id": "",
            "certificate_image_file": "9036e60d1b1b46a0a3fe80b1a148d19520240703095044.pdf",
            "certificate_file": "22aa70ae46644a92b2fbd2532ea9d91d/metadata/1.json",
            "token": {
                "address": "0xE0A9AA72082C..",
                "name": "CERT",
                "symbol": "CERT",
                "logo": null
            }
        },
    ]
}
```

<br/>
