---
id: signing-and-certs
title: Signing and certificates
---

:::tip
Be sure to read [Getting started](getting-started.mdx#signing-and-certificates) for some basic background on public-key infrastructure (PKI) technology, certificates, and signing manifests.
:::

As you're developing an application that uses the CAI SDK, there are three ways to sign manifest claims, depending on where you are in your development process:
1. **Initial prototyping and development**: Use the test certificates and keys included with the SDK libraries to sign claims.  These certs and keys are provided for convenience, but aren't valid for actual signing.  For more information, see [Using test certificates](test-certs.md).
1. **Local/internal testing**: Once your code is working with the test certs and keys:
  - [Purchase your own certificate](get-cert.md) from a certificate authority (CA). 
  - Then your application can [use the certificate and key *locally*](local-signing.md) (directly from the file system) to sign manifest claims; however, this is NOT safe in production. 
1. **Production testing/deployment**: To secure your private key for use in a publicly-accessible production application, store it in a hardware security module (HSM) or key management service (KMS) where your application can access it securely . 

:::note
Best practices for handling keys and certificates are beyond the scope of this documentation.  Always protect your private keys with the highest level of security; for example, never share them through insecure channels such as email.
:::
