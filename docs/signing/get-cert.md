---
id: get-cert
title: Getting a signing certificate
---

:::note Important
Best practices for handling keys and certificates are beyond the scope of this documentation.  Always protect your private keys with the highest level of security; for example, never share them through insecure channels such as email.
:::

To sign manifest claims, you must have an X.509 v3 security certificate and key that conform to the requirements laid out in the [C2PA specification](https://c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html#x509_certificates). 

## Certificate authorities (CAs)

To create or modify Content Credentials, you must purchase a signing certificate from a certificate authority (CA). 

There are many CAs that issue certificates. Some popular ones include:

- GlobalSign: [S/MIME email signing](https://shop.globalsign.com/en/secure-email), [document signing](https://shop.globalsign.com/en/document-signing)
- IdenTrust: [S/MIME email signing](https://www.identrust.com/digital-certificates/secure-email-smime), [document signing](https://www.identrust.com/digital-certificates/document-signing)
- Comodo Cybersecurity: [S/MIME email signing cert](https://ssl.comodoca.com/s-mime), [document signing cert](https://ssl.comodoca.com/document-signing-certificates)
- Digicert: [S/MIME email signing cert](https://www.digicert.com/tls-ssl/secure-email-smime-certificates), [document signing cert](https://www.digicert.com/signing/document-signing-certificates)

The above list is for reference only; inclusion does not imply endorsement by CAI or Adobe, Inc.

### Types of certificates

CAs offer a variety of different types of certificates (links below are to [Digicert](https://www.digicert.com), but most CAs offer these types of certificates):

- The simplest and least expensive option is an [S/MIME email certificate](https://www.digicert.com/tls-ssl/compare-secure-email-smime-certificates).
- Other options, such as [document signing certificate](https://www.digicert.com/signing/compare-document-signing-certificates) require more rigor (like proving your identity) and cost more.

### Purchasing a certificate

The process to purchase a certificate and key is different for each CA: You might be able to simply click a "Buy" button on the CA's website. Or your can make your own key and use it to create a certificate signing request (CSR) that you send to the CA. Regardless of the process, what you get back is a signed certificate that you use to create a certificate chain.

The certificate chain starts with the certificate from the last tool that signed the manifest (known as the "end-entity") followed by the certificate that signed it, and so on, back to the original CA issuer. This enables a validating application to determine that the manifest is valid because the certificate chain goes back to a trusted root certificate authority.

### Certificate signing requests (CSRs)

A CSR is just an unsigned certificate that's a template for the certificate that you're requesting. The CA creates a new certificate with the parameters specified in the CSR, and signs it with their root certificate, which makes it a valid certificate.

A CSR comprises a public key, as well as ["distinguished name" information](https://knowledge.digicert.com/general-information/what-is-a-distinguished-name) that identifies the individual or organization requesting the certificate. The distinguished name includes a common name, organization, city, state, country, and e-mail address. Not all of these fields are required and will vary depending with the assurance level of the desired certificate.

:::tip
For the C2PA [Verify tool](https://verify.contentauthenticity.org/) to display your organization name in the Content Credentials, your CSR must include the "O" or Organization Name attribute in the distinguished name information. 
:::

You sign the CSR with your private key; this proves to the CA that you have control of the private key that corresponds to the public key included in the CSR. Once the requested information in a CSR passes a vetting process and domain control is established, the CA may sign the public key to indicate that it can be publicly trusted.

## Certificate requirements

A signing certificate and key (credentials) must conform to the requirements in the [C2PA specification Trust Model section](https://c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html#_trust_model). The certificate must:

- Follow the public key infrastructure (PKI) X.509 V3 specification.
- Have the Key Usage (KU) extension, which must be marked as critical. 
- Assert the `digitalSignature` bit.
- Have the Extended Key Usage (EKU) extension. If the Basic Constraints extension is absent or the certificate authority (CA) Boolean is not asserted, the EKU must be non-empty.
  - The `anyExtendedKeyUsageEKU` field (2.5.29.37.0) must not be present.
  - If the configuration store does not contain a list of EKUs, a certificate that signs C2PA manifests must be valid for the `id-kp-emailProtection` (1.3.6.1.5.5.7.3.4) purpose and/or the `id-kp-documentSigning` (1.3.6.1.5.5.7.3.36) purpose.

### Extended key usage (EKU) fields

You must select at least one of the extended key usage (EKU) fields that specify what the certificate can be used for: **email protection** and **document signing**. Applications that use the CAI SDK won't accept the certificate unless it has one of these EKUs.

### Organization name

If you want the C2PA [Verify tool](https://verify.contentauthenticity.org/) to display your organization name in the Content Credentials, your certificate must include the "O" or [Organization Name attribute](https://www.alvestrand.no/objectid/2.5.4.10.html) (OID value 2.5.4.10) in the distinguished name information. The CA may require some validation steps to prove you are part of that organization (details vary by CA).

### Signature types

The following table describes the signature algorithms and types that the CAI SDK supports. You must supply credentials (certificates and keys) that correspond to the signing algorithm (`signatureAlgorithm`). Signing/validation will fail if the the supplied credentials don't support the signature type.

| Certificate `signatureAlgorithm` | Description  | Recommended signature type | RFC Reference |
| -------------------------------- | ------------ | -------------------------- | ------------- |
| `ecdsa-with-SHA256`                                       | ECDSA with SHA-256                                            | ES256<sup>\*</sup>         | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)       |
| `ecdsa-with-SHA384`                                       | ECDSA with SHA-384                                            | ES384<sup>\*</sup>         | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)       |
| `ecdsa-with-SHA512`                                       | ECDSA with SHA-512                                            | ES512<sup>\*</sup>         | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)       |
| `sha256WithRSAEncryption`                                 | RSASSA-PSS with SHA-256<br/>MGF1 with SHA-256                 | PS256                      | [RFC 8017 appendix A.2.4](https://www.rfc-editor.org/rfc/rfc8017.html#appendix-A.2.4) |
| `sha384WithRSAEncryption`                                 | RSASSA-PSS<br/>SHA-384, MGF1 with SHA-384                     | PS384                      | [RFC 8017 appendix A.2.4](https://www.rfc-editor.org/rfc/rfc8017.html#appendix-A.2.4) |
| `sha512WithRSAEncryption`                                 | RSASSA-PSS<br/>SHA-512, MGF1 with SHA-512                     | PS512                      | [RFC 8017 appendix A.2.4](https://www.rfc-editor.org/rfc/rfc8017.html#appendix-A.2.4) |
| `id-RSASSA-PSS` - ASN1 OID: prime256v1, NIST CURVE: P-256 | RSA-PSS                                                       | ES256<sup>\*</sup>         | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)       |
| `id-RSASSA-PSS` - ASN1 OID: secp384r1                     | RSA-PSS                                                       | ES384<sup>\*</sup>         | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)       |
| `id-RSASSA-PSS` - ASN1 OID: secp521r1                     | RSA-PSS                                                       | ES512<sup>\*</sup>         | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)       |
| `id-Ed25519`                                              | EdDSA (Edwards-Curve DSA) with SHA-512 (SHA-2) and Curve25519 | Ed25519 instance ONLY.     | [RFC 8410 section 3](https://www.rfc-editor.org/rfc/rfc8410.html#section-3)           |

<sup>*</sup> ES256, ES384, and ES512 signatures must be in IEEE P1363 format.

---

The information in this table is based on the [C2PA specification Trust Model section](https://c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html#_trust_model). The C2PA specification also covers two other certificates for timestamp responses and OCSP certificate revocation, which are not covered here.


