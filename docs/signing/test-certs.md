---
id: test-certs
title: Using test certificates
---

For development and testing, C2PA Tool, the Rust library, and the CAI prerelease libraries include one or more [test certificates](signing-certs.md#test-certificates) and private keys for use during development. While these test certificates and keys are useful during development and testing, for production deployment you must use your own private key and certificate.

The [Rust library `sdk/tests/fixtures/certs/` folder](https://github.com/contentauth/c2pa-rs/tree/main/sdk/tests/fixtures/certs) contains certificates and signing keys for many of the supported signature types [described below](prod-cert.mdx#signature-types).

The CAI prerelease libraries also provide a subset of test certificates in each repository's `tests/fixtures` folder. The Node.js library even provides a [`CreateTestSigner()`](https://github.com/contentauth/c2pa-node/blob/main/docs/README.md#createtestsigner) convenience function to create a local signer instance using the test certificate.

The CAI SDK does not allow you to use a self-signed certificate to sign a manifest.

:::warning Warning
The test certificates are for use during development and testing only.  Do not use them in production!
:::

Although not recommended due to complexity and difficulty, you can create your own certificates for development and testing. Follow the requirements in the C2PA Technical Specification [Credential Types](https://c2pa.org/specifications/specifications/1.4/specs/C2PA_Specification.html#_credential_types) and [Digital Signatures](https://c2pa.org/specifications/specifications/1.4/specs/C2PA_Specification.html#_digital_signatures) sections.

