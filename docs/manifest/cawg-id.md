---
id: cawg-id
title: CAWG identity assertions
---

The [Creator Assertions Working Group (CAWG)](https://cawg.io/) defines assertions that enable content creators to express individual and organizational intent about their content.
The CAWG identity assertion enables a credential holder to prove control over a digital identity and to use that identity to document the content creator’s role(s) in a C2PA asset’s lifecycle.

## Verified identities

As defined in the [CAWG Identity Assertion technical specification](https://cawg.io/identity/1.1-draft/#_identity_claims_aggregation), 


Content creators may wish to document their role in creating an asset using common identity signals such as:
- Verified web sites
- Social media accounts
- Official ID documentation
- Professional accreditations
- Organizational affiliations

To facilitate the use of such identity signals, the content creator may use the services of a trusted third-party intermediary known as a _identity claims aggregator_ to gather these signals and to restate them on their behalf.

The identity claims aggregator performs two important roles:

- It collects and verifies identity attestation claims from various identity providers such as social media sites and ID verification vendors.
- When the content creator creates content, it creates a unique asset-specific credential binding the identity attestation claims collected earlier to the specific C2PA asset being described.

An identity claims aggregation claim does not support a content creator using their own credential to directly issue their own signature for an identity assertion. 


## Example

```json
"assertions": [
  ...
  {
    "label": "cawg.identity",
    "data": {
      "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://cawg.io/identity/1.1/ica/context/"
      ],
      "type": [
        "VerifiableCredential",
        "IdentityClaimsAggregationCredential"
      ],
      "issuer": "did:web:connected-identities.identity.adobe.com",
      "validFrom": "2025-04-29T17:34:44Z",
      "verifiedIdentities": [
        {
          "type": "cawg.social_media",
          "username": "xyz",
          "uri": "https://www.instagram.com/xyz",
          "verifiedAt": "2024-10-08T18:04:08Z",
          "provider": {
            "id": "https://instagram.com",
            "name": "instagram"
          }
        },
        {
          "type": "cawg.social_media",
          "username": "xyz",
          "uri": "https://www.behance.net/xyz",
          "verifiedAt": "2024-10-22T19:31:17Z",
          "provider": {
            "id": "https://behance.net",
            "name": "behance"
          }
        },
        {
          "type": "cawg.social_media",
          "username": "J Smith",
          "uri": "https://www.linkedin.com/in/xyz",
          "verifiedAt": "2024-10-08T18:03:41Z",
          "provider": {
            "id": "https://linkedin.com",
            "name": "linkedin"
          }
        },
        {
          "type": "cawg.social_media",
          "username": "xyz",
          "uri": "https://twitter.com/xyz",
          "verifiedAt": "2024-10-08T18:03:49Z",
          "provider": {
            "id": "https://twitter.com",
            "name": "twitter"
          }
        }
      ],
      "credentialSchema": [
        {
          "id": "https://cawg.io/identity/1.1/ica/schema/",
          "type": "JSONSchema"
        }
      ]
    }
  }
  ...
]
```

