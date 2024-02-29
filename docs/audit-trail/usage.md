---
sidebar_position: 2
---

# Usage

## Get Audit Trails list

Retrieves all audit trail records for an organization from the database.

>**GET** 

```
{{base_url}}/audit
```
#### HEADERS
---
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

<br/>

## Get Audit Trial by ID

Retrieves a specific audit trail record by its ID from the database.

>**GET** 

```
{{base_url}}/audit/{id}
```
#### HEADERS
---
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

<br/>

## Create Audit Trail

Creates an audit trail with category and tags, storing it in MasChain.

>**POST** 

```
{{base_url}}/audit
```
#### HEADERS
---
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY
```

```
<br/>

## Get Audit Trail Metadata

Reads metadata from MasChain.

>**GET** 

```
{{base_url}}/audittx
```
#### HEADERS
---
**client_id &emsp; 9b16ae5638534ae1961fb370f874b6cc***

**client_secret &emsp; sk_9b16ae5638534ae1961fb370f874b6cc***

#### BODY

<br/>
