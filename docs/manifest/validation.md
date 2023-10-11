---
id: manifest-validation
title: Validating manifests
---

Processing an asset includes [validating the manifests](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_validation) in the associated manifest store. During validation, errors can occur in the active manifest and in ingredients.

## Validation errors in the active manifest

When you load an asset, the active manifest is validated and any [failure codes](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_failure_codes) are assigned to the `validation_status` array. Inspect the array to find the validation errors. Validation returns ONLY error codes; success is not explicitly indicated.

:::caution
Don't assume that just because you didn't get an error from the function return value that there are not validation errors. You MUST check the `validation_status` array to see if there are errors or not.
:::

See [ValidationStatus](manifest-ref#validationstatus) object in Manifest store reference.

Manifest validation errors can occur when:

- The bits of an asset are edited after it was signed.
- A claim or assertion is missing or tampered with.
- The manifest is signed with an invalid credential.

## Validation errors in ingredients

Ingredients are validated when they are imported into an asset and the result is stored in the ingredient's `validation_status` array.

## Validation errors

The following table lists some common validation errors. Refer to the [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_failure_codes) for the full list.

| Validation Status Code         | Meaning                                                                                                                                                                                 | Type of URI       |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `assertion.hashedURI.mismatch` | The hash of the the referenced assertion in the manifest does not match the corresponding hash in the assertion's hashed URI in the claim.                                              | Assertion URI     |
| `assertion.dataHash.mismatch`  | The hash of a byte range of the asset does not match the hash declared in the data hash assertion.                                                                                      | Assertion URI     |
| `assertion.bmffHash.mismatch`  | The hash of a box-based asset does not match the hash declared in a [Base Media File Format BMFF](https://www.loc.gov/preservation/digital/formats/fdd/fdd000079.shtml) hash assertion. | Assertion URI     |
| `assertion.boxesHash.mismatch` | The hash of a general box-like asset format does not match the hash declared in a general boxes hash assertion.                                                                         | Assertion URI     |
| `signingCredential.untrusted`  | The signing credential is not listed on the validator's trust list.                                                                                                                     | Signature Box URI |
| `signingCredential.invalid`    | The signing credential is not valid for signing.                                                                                                                                        | Signature Box URI |
| `signingCredential.revoked`    | The signing credential has been revoked by the issuer.                                                                                                                                  | Signature Box URI |
| `signingCredential.expired`    | The signing credential has expired.                                                                                                                                                     | Signature Box URI |

### JUMBF URIs

Validation status codes can contain JUMBF URIs that reference assertions or signature credentials in the manifest store. These URIs are of the form `self#jumbf=...` as follows:

- C2PA Assertion URI: A URI like `self#jumbf=c2pa.assertions/<ASSERTION>` where `<ASSERTION>` is either `stds.schema-org.*` or `c2pa.*`
- C2PA Signature Box URI: A URI like `self#jumbf=c2pa.signature`

For more information, see the [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_uri_references).

<!--
Relative JUMBF URL doesn't specify a manifest.
If not manifest ID, assumes active manifest, otherwise manifest ID specifies the manifest.

For actions - reference the spec e.g. common actions we refer to

How to describe an EXIF assertion in JSON

CreativeWork assertion

Actions
- Examples
- Ref to spec and schema.org
- GenAI - variation of Created Action

Assertions

- CreativeWork assertion
- DNT - Special assertion
- EXIF

Verify has a URL - how do I put it in?

User-defined assertion

-->
