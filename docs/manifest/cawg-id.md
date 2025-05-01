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

The following table describes the allowed values of the `type` property of `verifiedIdentities` array elements.

| Value        |  Meaning |
|--------------|----------|
| `cawg.document_verification` | The identity provider has verified one or more government-issued identity documents presented by the named actor.
| `cawg.web_site` | The named actor has proven control over a specific domain to the identity claims aggregator._
| `cawg.affiliation` | The identity provider is attesting to the named actor’s membership in an organization. This could be a professional organization or an employment relationship.
| `cawg.social_media` | The named actor has demonstrated control over an account (typically a social media account) hosted by the identity provider.
| `cawg.crypto_wallet` | The named actor has demonstrated control over an account (typically a crypto-wallet) hosted by the identity provider.

Terms used in the above table:

- **Named actor**: The actor whose relationship to a C2PA asset is documented by an identity assertion. Typically, this will be the content creator or publisher, but not necessarily.
-  **Identity provider**:  Organization or person that attests to the identity of the named actor; This may be the identity assertion generator, a third party contacted by the identity assertion generator, or the issuer of an identity credential that the identity assertion generator uses.
- **Identity claims aggregator**: Collects identity claims (attestations) regarding a named actor from various identity providers and can replay those identity claims into identity assertions on behalf of the named actor. This actor MAY be the same as the identity assertion generator.

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

