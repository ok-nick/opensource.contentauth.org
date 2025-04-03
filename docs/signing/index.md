---
id: signing-and-certs
title: Signing and certificates
---

:::tip
Be sure to read [Getting started](getting-started.mdx#signing-and-certificates) for some basic background on public-key infrastructure (PKI) technology, certificates, and signing manifests.
:::

As you're developing an application that uses the CAI SDK, there are three ways to sign manifest claims:
1. [**Initial prototyping and development**](test-certs.md): Use the test certificates and keys included with the SDK libraries to sign claims.  These certs and keys are provided for convenience, but aren't valid for actual signing.
1. [**Local/internal testing**](local-signing.md): Once your code is working with the test certs and keys, you're ready to purchase your own certificate from a certificate authority (CA) using your private key. Then for internal testing, your application can use the certificate and key *locally* (i.e. directly from the file system) to sign manifest claims; however, this is NOT safe in production.
1. [**Production testing/deployment**](prod-cert.mdx): To secure your private key for use in a publicly-accessible production application, store it in a hardware security module (HSM) or key management service (KMS). Then your application can access it securely in production. 

:::warning
Best practices for handling keys and certificates are beyond the scope of this documentation.  Always protect your private keys with the highest level of security; for example, never share them through insecure channels such as email.
:::