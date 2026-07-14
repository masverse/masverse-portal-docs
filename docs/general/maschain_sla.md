---
sidebar_position: 4
---

# Service Level Agreement (SLA)

This page summarises the **MasChain Platform and API Services SLA** (Standard
Tier) for integrators. The Services are provided by **Masverse Technologies Sdn
Bhd** (Registration No. 202301043613 (1537529-X)) ("MasChain").

The SLA applies to **production** Services that are directly operated, managed,
and controlled by MasChain and that you have subscribed for. It does **not**
apply to sandbox/test environments, beta or preview features, proof-of-concept
deployments, or free trials.

:::note Disclaimer

This page is a **summary** of the MasChain Platform and API Services SLA,
provided for general reference and ease of understanding. It does not form part
of the contract between you and MasChain. In the event of any inconsistency or
conflict between this website summary and the full SLA document, **the full SLA
document shall prevail**.

:::

<a
  className="button button--primary button--md sla-download-btn"
  href="/pdf/MasChain-SLA-Standard.pdf"
  download
  target="_blank"
  rel="noopener noreferrer">
  View SLA (pdf)
</a>

---

## 1. Services Covered

The SLA covers the following production Services (where subscribed), together
with their Service Documentation:

- MasChain blockchain platform, APIs, and API endpoints
- Enterprise Portal
- Managed smart contract deployment and interaction services
- Audit Trail and on-chain verification services
- Wallet Management services
- Token Management services
- NFT / Certificate services
- Transaction query, explorer, and monitoring services
- e-KYC services (where subscribed)
- Callback, webhook, and notification services

MasChain is responsible only for components under its **direct operational
control**. You remain responsible for your own systems, data, users, credentials,
wallets, private keys, integrations, and compliance obligations (see
[12 Customer Responsibilities](#12-customer-responsibilities)).

---

## 2. Service Availability Commitment

| Service&nbsp;Tier | Monthly&nbsp;Uptime&nbsp;Commitment | Eligibility                                                                         |
| :---------------: | :---------------------------------: | :---------------------------------------------------------------------------------- |
|   **Standard**    |             **99.90%**              | Default tier, unless otherwise agreed in writing in your Order Form / Master Terms. |

### How uptime is measured

The **Monthly Uptime Percentage** is calculated over each calendar month
("Measurement Period") as:

```
Monthly Uptime % = (Total minutes in the month − Downtime) / Total minutes in the month × 100
```

**Downtime** means any period during which the MasChain API is unable to accept
or process **valid** API requests at the MasChain service boundary, as confirmed
by MasChain's monitoring systems. MasChain's monitoring is the primary reference
source; where you reasonably demonstrate material discrepancies with your own
monitoring evidence, the parties reconcile in good faith.

Downtime **excludes** Scheduled Maintenance, Emergency Maintenance, and Excluded
Events (see [8](#8-excluded-events)).

---

## 3. Service Credits

If the Monthly Uptime Percentage falls below the 99.90% commitment, you may be
eligible for **Service Credits** calculated against the Monthly Service Fee for
the affected Services:

| Monthly Uptime Percentage            |       Service Credit       |
| :----------------------------------- | :------------------------: |
| Less than 99.90% and at least 99.00% | 5% of Monthly Service Fee  |
| Less than 99.00% and at least 95.00% | 10% of Monthly Service Fee |
| Less than 95.00% and at least 90.00% | 15% of Monthly Service Fee |
| Less than 90.00%                     | 25% of Monthly Service Fee |

- The **maximum** aggregate Service Credit in any calendar month is **25%** of
  the Monthly Service Fee for the affected Services.
- **Monthly Service Fee** means the recurring subscription fee for the affected
  production Services that month (annual fees are pro-rated as 1/12). It excludes
  usage/overage charges, top-ups, professional services, taxes, and third-party
  pass-through costs.
- Service Credits are **not** automatic — you must submit a written claim within
  **30 calendar days** after the end of the affected month, with details of the
  affected periods, Services, and API endpoints.
- Service Credits are applied to a future invoice; they are non-cash,
  non-transferable, and non-refundable.
- Subject to limited carve-outs in the SLA, Service Credits are your **sole and
  exclusive financial remedy** for a failure to meet the availability commitment.

> **Repeated failure:** if uptime falls below 95.00% in any two calendar months
> within a rolling six-month period, you may request a service review.

---

## 4. Incident Severity Classification

|        Severity        | Description                                                                                                                                                                                     |
| :--------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Critical&nbsp;(P1)** | Complete API outage, a security breach involving Customer data, or a critical incident affecting all/substantially all users. Core functionality unavailable; major business functions stopped. |
|   **High&nbsp;(P2)**   | Significant degradation, partial outage, or security issue affecting a material subset of users. Core features impaired but partially functional.                                               |
|  **Medium&nbsp;(P3)**  | Minor degradation or non-critical feature failure where a workaround is available and impact is limited.                                                                                        |
|   **Low&nbsp;(P4)**    | Cosmetic issues, documentation errors, configuration queries, or general enquiries with no functional impact.                                                                                   |

---

## 5. Incident Response & Resolution Targets

**Support coverage:**

- **P1:** 24 × 7 × 365
- **P2:** Business Hours (with commercially reasonable efforts outside Business
  Hours where production use is materially affected)
- **P3 / P4:** Business Hours

| Severity | Target Response Time        | Target Resolution Time                                                                               |
| :------: | :-------------------------- | :--------------------------------------------------------------------------------------------------- |
|  **P1**  | Within **1 hour**, 24 × 7   | Continuous commercially reasonable efforts to restore the Service as soon as reasonably practicable. |
|  **P2**  | Within **4 Business Hours** | Within **2 Business Days**, or as soon as reasonably practicable depending on complexity.            |
|  **P3**  | Within **1 Business Day**   | Within **5 Business Days**, or in the next scheduled release where appropriate.                      |
|  **P4**  | Within **2 Business Days**  | As determined by MasChain based on priority, release schedule, and impact.                           |

- **"Response"** means MasChain acknowledges the incident, confirms it is logged,
  and gives an initial severity/category indication.
- These are **operational objectives** on a commercially reasonable efforts basis.
  They are **not** guaranteed resolution commitments and do **not** give rise to
  Service Credits unless the incident also causes Downtime that breaches the
  Monthly Uptime Commitment.
- For P1 incidents causing material Downtime, on written request MasChain
  provides a written incident summary within **10 Business Days** after closure.

> **Business Hours** means **9:00 a.m. to 6:00 p.m. Malaysia Time (MYT),
> Monday–Friday, excluding Malaysian federal public holidays.**

When raising a ticket, include your **Organisation ID**, affected
**environment**, the **endpoint** and **transactionHash** / request details, and
expected vs. actual behaviour.

---

## 6. Maintenance

### Scheduled Maintenance

- Performed to maintain reliability, security, compliance, and performance.
- Where material interruption is expected, MasChain uses commercially reasonable
  efforts to give at least **7 calendar days'** prior notice.
- Conducted, where practicable, during the **Maintenance Window: Sunday
  02:00–06:00 MYT** (or another notified time).

### Emergency Maintenance

- Performed where necessary to address security vulnerabilities, active threats,
  instability, or other urgent issues.
- MasChain notifies in advance where practicable; otherwise as soon as reasonably
  possible after it begins.

Scheduled and Emergency Maintenance periods are **excluded** from uptime
calculations and do not constitute Downtime.

---

## 7. Performance Targets

The following are baseline operating parameters under normal conditions, provided
for transparency and integration planning. Unless expressly agreed otherwise,
they are **not guaranteed commitments** and do **not** give rise to Service
Credits.

| Metric                              | Target                                                                                                                        |
| :---------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| API response (off-chain middleware) | Less than 2,000 ms for read requests and less than 5,000 ms for write requests, measured at p95 under normal conditions.      |
| On-chain layer                      | Mempool submission, block inclusion, and finality are inherently variable and depend on network conditions.                   |
| Callback retry                      | Initial attempt plus 3 retries on exponential backoff (approximately 5, 10, and 15 minutes).                                  |
| Explorer indexing                   | Indexing lag of less than 30 seconds after block confirmation.                                                                |
| Display propagation                 | Less than 5 seconds after indexing.                                                                                           |
| Transaction broadcast               | Mempool submission within ~10 seconds, subject to network conditions, with retry handling per MasChain's standard procedures. |

Failure to meet a performance target is **not** Downtime unless it also makes the
production Service unavailable per [2](#2-service-availability-commitment).

---

## 8. Excluded Events

The availability commitment does **not** apply to Downtime or degradation arising
from, among others:

- **Customer systems & integration** — your systems, infrastructure, incorrect
  API implementation/configuration, malformed or invalid requests, or your
  network/connectivity failures.
- **Third-party dependencies** — third-party systems not under MasChain's direct
  control, including identity-verification providers used in e-KYC (see
  [13](#13-third-party-dependencies)).
- **Infrastructure & hosting** — failures of underlying cloud/hosting/data-centre
  providers, large-scale internet outages, or hardware failures outside MasChain's
  control despite reasonable safeguards.
- **Network integrity & stability measures** — throttling, rate limiting,
  component isolation, or emergency measures to prevent systemic risk.
- **Security incidents & malicious attacks** that exceed reasonable, proportionate
  mitigation capacity, including large-scale/coordinated/state-level attacks and
  zero-day exploits, where MasChain has otherwise maintained appropriate security
  practices.
- **Regulatory & legal compliance actions** taken in good faith.
- **Force majeure** — events beyond MasChain's reasonable control.
- **Customer misuse or breach** of the Master Terms.
- **Blockchain finality & irreversibility** — confirmed on-chain transactions are
  permanent and irreversible; API responses, broadcasts, and callbacks are not
  guarantees of legal/business settlement finality. You are responsible for
  validating transaction parameters and recipient addresses before submission.

Excluded Events are not counted in uptime calculations and do not give rise to
Service Credits. MasChain still uses reasonable efforts to mitigate, communicate,
and restore service.

---

## 9. Data Retention

MasChain may retain off-chain operational data for operational, compliance,
security, audit, and disaster-recovery purposes:

| Data Category                               | Minimum Retention Period          |
| :------------------------------------------ | :-------------------------------- |
| API access logs                             | Minimum 90 days                   |
| Webhook delivery logs                       | Minimum 30 days                   |
| Transaction processing logs                 | Minimum 1 year                    |
| Audit and compliance logs                   | Minimum 7 years, where applicable |
| Temporary processing files and retry queues | Operationally determined          |

> **On-chain records are immutable.** Data confirmed on the blockchain
> (transaction hashes, smart contract states, token transfers, audit entries, NFT
> minting records) cannot be modified, deleted, or erased. You are responsible
> for not submitting data on-chain that may later need to be deleted.

---

## 10. Information Security

MasChain maintains a commercially reasonable information security programme with
administrative, technical, and organisational safeguards, which may include:
encryption in transit and at rest (where applicable), access control and
least-privilege IAM, vulnerability management and patching, secure development
practices, and periodic security testing.

MasChain notifies you **without undue delay** after confirming a security
incident that materially affects the confidentiality, integrity, or availability
of your Personal Data or Confidential Information processed in connection with the
Services, with reasonable follow-up updates.

---

## 11. Data Protection & Privacy

- MasChain processes Customer Personal Data in compliance with the **Personal
  Data Protection Act 2010 of Malaysia (PDPA)** and other applicable laws, for the
  purpose of providing and improving the Services.
- You are responsible for obtaining the necessary rights, consents, and lawful
  bases for data you submit to the Services.
- Data may be hosted/processed in locations determined by MasChain or its
  providers, potentially **outside Malaysia**; specific residency requirements
  must be agreed in writing.
- On termination, on written request, MasChain returns or deletes off-chain
  Personal Data within a reasonable period, subject to legal retention. On-chain
  records cannot be deleted.

---

## 12. Customer Responsibilities

You are responsible for, among other things:

- **Integration** — correct API integration, authentication, request formatting,
  and appropriate error handling, retry logic, and failover in your systems.
- **Systems & connectivity** — maintaining your own systems, networks, and
  reliable connectivity.
- **Security & access** — safeguarding API keys, credentials, and access tokens;
  preventing unauthorised access; and promptly reporting suspected compromise. Any
  action performed with your credentials is deemed authorised by you.
- **Data accuracy & legality** — the accuracy, completeness, and legality of data
  you submit, and validating outputs for your business processes.
- **Compliance** — your own regulatory and governance obligations; using the
  Services does not transfer these to MasChain (especially for e-KYC, audit, and
  compliance use cases).
- **Acceptable use & rate limits** — not misusing or overloading the Services and
  implementing retry logic / exponential backoff. MasChain may apply rate limits,
  throttling, and abuse prevention; excess requests may receive **HTTP 429** (see
  [Rate Limit](./rate_limit.md)).

Failures caused by Customer responsibilities may be treated as Excluded Events.

---

## 13. Third-Party Dependencies

The Services rely on third-party dependencies, classified by control level:

- **Direct Control** — operated by MasChain (e.g. blockchain validator nodes).
  Failures remain MasChain's responsibility unless caused by an Excluded Event.
- **Shared Control** — MasChain manages configuration/integration/monitoring, but
  a third party operates the underlying infrastructure (e.g. cloud hosting,
  managed file & asset storage, DNS, CDN).
- **Third-Party Control** — operated by independent providers where MasChain does
  not control availability/performance (e.g. SMS/email delivery, OCR provider,
  face-recognition provider, payment partners).

A third-party–related incident is an **Excluded Event only** to the extent
MasChain can reasonably demonstrate the root cause originated outside its
controlled systems, was not caused by its misconfiguration, was not materially
prolonged by it, and that it used reasonable efforts to monitor, escalate, and
mitigate. Mere involvement of a third party is not sufficient.

Where a confirmed third-party incident materially affects the Services, MasChain
uses reasonable efforts to post a status notice on the Enterprise Portal **within
2 hours** of confirming the third-party root cause, with a follow-up on
restoration.

---

## 14. Exit Assistance & Transition

On expiry or termination of the Master Terms, MasChain provides reasonable
transition assistance for up to **6 months** (the "Transition Period"), which may
include continued Services during transition, off-chain data extraction in a
structured machine-readable format, knowledge transfer, handover cooperation, and
relevant integration documentation. Transition assistance may be subject to fees.

---

## 15. Governing Law

This SLA is governed by the **laws of Malaysia**. Subject to the dispute
resolution provisions of the Master Terms, the courts of Malaysia have exclusive
jurisdiction. The parties first attempt good-faith resolution between senior
representatives before escalation.
