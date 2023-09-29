---
id: manifest-validation
title: Validating manifests
---

Processing an asset includes [validating the manifests](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_validation) in the associated manifest store. During validation, errors can occur in the active manifest and in ingredients.

## Validation errors in the active manifest

When you load an asset, you must validate the active manifest and assign any [failure codes](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_failure_codes) to the `manifestStore.validationStatus` array.

Manifest validation errors can occur when:

- The bits of an asset are edited after it was signed.
- A claim or assertion is missing or tampered with.
- The manifest is signed with an invalid credential.

## Validation errors in ingredients

Ingredients are validated when they are imported into an asset. The results of this are stored in the manifest in the ingredient's validationStatus object, which contains both success and failure codes that represent the results of all of the validation checks that took place.

## Validation errors

The following table lists some common validation errors. Refer to the [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_failure_codes) for the full list.

| Validation Status Code         | Meaning                                                                                                                                    | `url` Usage              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| `assertion.hashedURI.mismatch` | The hash of the the referenced assertion in the manifest does not match the corresponding hash in the assertion's hashed URI in the claim. | C2PA Assertion           |
| `assertion.dataHash.mismatch`  | The hash of a byte range of the asset does not match the hash declared in the data hash assertion.                                         | C2PA Assertion           |
| `assertion.bmffHash.mismatch`  | The hash of a box-based asset does not match the hash declared in a BMFF hash assertion.                                                   | C2PA Assertion           |
| `assertion.boxesHash.mismatch` | The hash of a general box-like asset format does not match the hash declared in a general boxes hash assertion.                            | C2PA Assertion           |
| `signingCredential.untrusted`  | The signing credential is not listed on the validator's trust list.                                                                        | C2PA Claim Signature Box |
| `signingCredential.invalid`    | The signing credential is not valid for signing.                                                                                           | C2PA Claim Signature Box |
| `signingCredential.revoked`    | The signing credential has been revoked by the issuer.                                                                                     | C2PA Claim Signature Box |
| `signingCredential.expired`    | The signing credential has expired.                                                                                                        | C2PA Claim Signature Box |
