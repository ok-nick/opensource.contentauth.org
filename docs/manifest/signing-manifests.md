---
id: signing-manifests
title: Signing manifests
---

:::tip
Before reading this page, be sure to read [Getting started](/docs/getting-started) so you'll have some basic background on public-key infrastructure (PKI) technology, certificates, and signing manifests.
:::

## Overview

To sign a C2PA manifest you need an end-entity certificate that complies with the C2PA trust model. Then you can use your private key and public certificates in the signing process. This page walks through an example of obtaining appropriate credentials and then using c2patool to  to sign a manifest using them.

:::note
Best practices for handling keys and certificates are available from many sources and not directly covered here.  Always protect your private keys with the highest level of security.  Some useful references include:
- [Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html#storage) from the Open Worldwide Application Security Project  (OWASP).
- [Protect your private keys](https://www.ncsc.gov.uk/collection/in-house-public-key-infrastructure/pki-principles/protect-your-private-keys) from the UK National Cyber Security Centre.
:::note



## Certificates

Trust lists connect the end-entity certificate that signed a manifest back to the originating root CA. This is accomplished by supplying the subordinate public X.509 certificates forming the trust chain (the public X.509 certificate chain). If those are not supplied, you can use a private credential store to validate the certificate trust chain. If you do not supply a certificate chain or trust list, validators may reject the manifest. See the C2PA specification for more details.

A certificate used to sign C2PA manifests must:

- Follow the Public Key Infrastructure (PKI) X.509 V3 specification.
- Have the Key Usage (KU) extension, which must be marked as critical. 
- Assert the `digitalSignature` bit.
- Have the Extended Key Usage (EKU) extension. If the Basic Constraints extension is absent or the certificate authority (CA) Boolean is not asserted, the EKU must be non-empty.
  - The `anyExtendedKeyUsageEKU` field (2.5.29.37.0) must not be present.
  - If the configuration store does not contain a list of EKUs, a certificate that signs C2PA manifests must be valid for the `id-kp-emailProtection` (1.3.6.1.5.5.7.3.4) purpose and/or the `id-kp-documentSigning` (1.3.6.1.5.5.7.3.36) purpose.

### Signature types

The following table describes the signature algorithms and recommended signature types that the [c2patool](/docs/c2patool) and [Rust SDK](/docs/rust-sdk) support. You must supply credentials (certificates and keys) that correspond to the signing algorithm. Signing/validation will fail if the the supplied credentials don't support the signature type. 

| Certificate `signatureAlgorithm` | Description  | Recommended signature type | RFC Reference |
| -------------------------------- | ------------ | -------------------------- | ------------- |
| `ecdsa-with-SHA256`    | ECDSA with SHA-256  | ES256  | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)  |
| `ecdsa-with-SHA384`    | ECDSA with SHA-384  | ES384  | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)  |
| `ecdsa-with-SHA512`    | ECDSA with SHA-512  | ES512  | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)  |
| `sha256WithRSAEncryption`   | RSASSA-PSS with SHA-256<br/>MGF1 with SHA-256| PS256  | [RFC 8017 appendix A.2.4](https://www.rfc-editor.org/rfc/rfc8017.html#appendix-A.2.4) |
| `sha384WithRSAEncryption`   | RSASSA-PSS<br/>SHA-384, MGF1 with SHA-384    | PS384  | [RFC 8017 appendix A.2.4](https://www.rfc-editor.org/rfc/rfc8017.html#appendix-A.2.4) |
| `sha512WithRSAEncryption`   | RSASSA-PSS<br/>SHA-512, MGF1 with SHA-512    | PS512  | [RFC 8017 appendix A.2.4](https://www.rfc-editor.org/rfc/rfc8017.html#appendix-A.2.4) |
| `id-RSASSA-PSS` - ASN1 OID: prime256v1, NIST CURVE: P-256 | RSA-PSS| ES256  | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)  |
| `id-RSASSA-PSS` - ASN1 OID: secp384r1 | RSA-PSS| ES384  | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)  |
| `id-RSASSA-PSS` - ASN1 OID: secp521r1 | RSA-PSS| ES512  | [RFC 5758 section 3.2](https://www.rfc-editor.org/rfc/rfc5758.html#section-3.2)  |
| `id-Ed25519` | EdDSA (Edwards-Curve DSA) with SHA-512 (SHA-2) and Curve25519 | Ed25519 instance ONLY.| [RFC 8410 section 3](https://www.rfc-editor.org/rfc/rfc8410.html#section-3) |


The information in this table is based on the [C2PA specification Trust Model section](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_trust_model). The C2PA specification also covers two other certificates for timestamp responses and OCSP certificate revocation, which are not covered here.

## Example

Here is an example of generating a C2PA-compliant set of credentials using [GlobalSign](http://globalsign.com/) certificate authority (CA).  This is only an illustrative example; Certificates are available from many other certificate authorities, as summarized in [Getting started](/docs/getting-started#getting-a-security-certificate).

:::note
Credential management is a complex topic and different for every organization, so use this tutorial only as a demonstration of how C2PA operates. Other certificate providers may have alternate ways of providing your private key and certificate.
:::note

### Step 1: Purchase credentials

This example uses a [PersonSign1](https://shop.globalsign.com/en/secure-email) certificate from GlobalSign that contains KU and EKU values required to sign C2PA manifests. 

Follow the instructions to purchase and download your `.pfx` file. This file is a PKCS12 container that holds your certificate chain and private signing key.  Other certificate vendors may include only the end-entity certificate and so you must manually download the rest of the certificate chain.

:::warning Warning
This example uses an inexpensive personal certificate, which is fine for development and testing, but for production use an enterprise certificate is strongly recommended. An enterprise certificate is required for [Verify](https://verify.contentauthenticity.org/) to display your organization name when for signed assets.
:::info

The rest of this tutorial uses OpenSSL (a set of cryptographic utilities). If OpenSSL is not installed on your system, see [OpenSSL](https://www.openssl.org/source/) for the source distribution or the [list of unofficial binary distributions](https://wiki.openssl.org/index.php/Binaries).

### Step 2: Extract the certificate and key

Use the commands below to extract the key and certificate chain. If prompted, enter the password that was used to generate the `.pfx` file.

:::tip
Make sure you are using a recent version of OpenSSL.
:::tip

#### Troubleshooting errors

In this step, OpenSSL may report errors when extracting the key or certificate chain.  In many cases, if OpenSSL generates the output file, you can ignore the messages.  However, in some cases you may need to add `-legacy` to the command for it to work properly.

For example, the following error message means the `.pfx` was encrypted with an older standard:

```
Shrouded Keybag: pbeWithSHA1And3- KeyTripleDES-CBC, Iteration 2000
PKCS7 Encrypted data: pbeWithSHA1And40BitRC2- CBC, Iteration 2000
Error outputting keys and certificates
```

#### Extract the key

```shell
openssl pkcs12 -in mycertfile.pfx -nocerts -out mykey.pem -nodes
```

:::tip
Check to make sure the above command generated a `.pem` file and it's not an empty file.  For more information, see [Troubleshooting errors](#troubleshooting-errors) above.
:::

#### Extract the certificate chain

For many certificate providers, the `.pfx` file contains not just your certificate but the complete certificate trust chain. When the `.pfx` file does not contain the certificate chain, you can obtain it from your provider.

```shell
openssl pkcs12 -in mycertfile.pfx -nokeys -out mycerts.pem
```

## Using credentials with c2patool

To use the credentials extracted above you must know the signature types they support. Typically, this information is available from your certificate provider. If it is not, enter this OpenSSL command to dump certificate information:

```shell
openssl x509 -inform PEM -in mycerts.pem -text
```

This command produces a text summary of the certificate properties, as shown in the example below. Look for a line containing `Signature Algorithm`. See the table above to determine the corresponding signature type. For this example with a certificate issued by GlobalSign, `Signature Algorithm: sha256WithRSAEncryption` corresponds to the PS256 signature type.

```
Certificate:
	Data:
		Version: 3 (0x2)
		Serial Number:
				73:0d:01:c3:04:06:62:e4:60:0a:0b:0c
		Signature Algorithm: sha256WithRSAEncryption
		Issuer: C = BE, O = GlobalSign nv-sa, CN = GlobalSign GCC R3 PersonalSign 1 CA 2020
		Validity
				Not Before: Oct 13 13:33:02 2022 GMT
				Not After : Oct 14 13:33:02 2023 GMT
		Subject: CN = someuser@someemail.com, emailAddress = someuser@someemail.com
		Subject Public Key Info:
				Public Key Algorithm: rsaEncryption
						Public-Key: (2048 bit)
.
.
.
```

You now have all the needed information to configure c2patool for manifest signing. Edit your [manifest store file](/docs/c2patool/manifest) to have the following content:

```json
"alg": "ps256",
"private_key": "mykey.pem",
"sign_cert": "mycerts.pem"
```

:::note
The `private_key` and `sign_cert` properties must be full paths to the key and certificate chain files generated above.
:::note

You can now use c2patool as described in the [c2patool documentation](/docs/c2patool/#adding-a-manifest-to-an-asset-file) to add a to add a manifest to an image or other asset file. The command will be something like this:

```
c2patool -m my_manifest.json -o signed_image.jpg my_image.jpg
```

The example above uses the information in `my_manifest.json` to add a new manifest to output `signed_image.jpg` using source `my_image.jpg`. The manifest will be signed using the PS256 signature algorithm with private key `mykey.pem`. The manifest will contain the trust chain specified in `mycerts.pem`.

### Confirm it worked

Use c2patool to confirm that you successfully signed the asset. Enter a command like this:

```
c2patool signed_image.jpg 
```

This command displays the manifest attached to `signed_image.jpg` and should include a section such as this:

```json
...
"signature_info": {
        "cert_serial_number": "012345678901234567890123456789",
        "time": "2023-11-02T17:18:14+00:00"
      },
      "label": "urn:uuid:0b9bc2b8-6d66-4258-9fed-694c30abcdef"
...
```

:::info
You can also use [Verify](https://contentcredentials.org/verify) to confirm that your image was signed, but if you used a personal certificate (not an organization certificate) then Verify won't show detailed information about the credential used.
:::
