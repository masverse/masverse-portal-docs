---

sidebar_class_name: hidden


---

# Get Wallet Tokens

Get all token from wallets

>**POST** 

```
API_URL/api/token/get-wallet-tokens?address={wallet_address}
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
            "token": {
                "address": "0x1F4204344....",
                "circulating_market_cap": null,
                "decimals": "18",
                "exchange_rate": null,
                "holders": "1",
                "icon_url": null,
                "name": "1231",
                "symbol": "12",
                "total_supply": "103000000000000",
                "type": "ERC-20",
                "volume_24h": null
            },
            "token_id": null,
            "token_instance": null,
            "value": "103000000000000"
        }
    ]
}
```

<br/>
