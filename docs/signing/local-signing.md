---
id: local-signing
title: Signing with local credentials
---

## Overview

To sign a claim in a C2PA manifest you need an end-entity certificate that complies with the C2PA trust model. Then you can use your private key with the certificate to sign it. 

Trust lists connect the end-entity certificate that signed a manifest back to the originating root CA. This is accomplished by supplying the subordinate public X.509 certificates forming the trust chain (the public X.509 certificate chain). If those are not supplied, you can use a private credential store to validate the certificate trust chain. If you do not supply a certificate chain or trust list, validators may reject the manifest. See the C2PA specification for more details.

## Signing a manifest

The simplest way to add a C2PA manifest to an asset file and sign it is by using C2PA Tool (`c2patool`). You can run C2PA Tool manually from the command line (for example, during development) and more generally from any executable program that can call out to the shell, such as a Node.js application as shown in the [c2patool Node.js service example](../c2pa-node-example).

Similarly, using the Rust SDK, you can [add a manifest to an asset file](https://docs.rs/c2pa/latest/c2pa/#example-adding-a-manifest-to-a-file), referencing the certificate and private key file. For a simple example of creating and signing a manifest from a C program, see the [c2c2pa repository](https://github.com/contentauth/c2c2pa).

The prerelease libraries for [Node.js](../c2pa-node), [Python](../c2pa-python), and [C++/C](../c2pa-c) can also add and sign a manifest.

:::warning Warning
Accessing a private key and certificate directly from the file system is fine during development, but doing so in production is not secure. Instead use a Key Management Service (KMS) or a hardware security module (HSM) to access the certificate and key; For more information, see [Using a certificate in production](prod-cert.mdx). 
:::

## Example

Here is an example of generating a C2PA-compliant set of credentials using [GlobalSign](http://globalsign.com/) certificate authority (CA).  GlobalSign is just one of many CAs. For a list of some others, see [Getting a security certificate](get-cert.md#certificate-authorities-cas).

:::note 
This example uses an inexpensive personal certificate, which is fine for development and testing, but for production use an enterprise certificate is strongly recommended. An enterprise certificate is required for [Verify](https://verify.contentauthenticity.org/) to display your organization name when for signed assets.
:::

### Step 1: Purchase credentials

This example uses a [PersonSign1](https://shop.globalsign.com/en/secure-email) certificate from GlobalSign that contains KU and EKU values required to sign C2PA manifests.  

Follow the instructions to purchase and download your `.pfx` file. This file is a PKCS12 container that holds your certificate chain and private signing key.  Other certificate providers may have alternate ways of providing your private key and certificate and may include only the end-entity certificate and so you must manually download the rest of the certificate chain.

The rest of this tutorial uses OpenSSL (a set of cryptographic utilities). If OpenSSL is not installed on your system, see [OpenSSL](https://www.openssl.org/source/) for the source distribution or the [list of unofficial binary distributions](https://wiki.openssl.org/index.php/Binaries).

### Step 2: Extract the certificate and key

To work with the certificate, you need to extract it. When the CAI SDK adds Content Credentials to an asset, it incorporates the certificate (including the associated public key) into the manifest.
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

### Step 3: Use credentials with C2PA Tool

To use the credentials extracted above you must know the signature types they support. Typically, the certificate provider will provide this information. If it is not, enter this OpenSSL command to dump certificate information:

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

You now have all the needed information to configure C2PA Tool for manifest signing. Edit your [manifest store file](../c2patool/docs/manifest.md) to add the following fields that are specific to C2PA Tool:

```json
"alg": "ps256",
"private_key": "mykey.pem",
"sign_cert": "mycerts.pem"
```

The `private_key` and `sign_cert` properties must be full paths to the key and certificate chain files generated above.

You can now use C2PA Tool [to add a manifest to an image or other asset file](../c2patool/docs/usage.md#adding-a-manifest-to-an-asset-file). The command will be something like this:

```
c2patool -m my_manifest.json -o signed_image.jpg my_image.jpg
```

The example above uses the information in `my_manifest.json` to add a new manifest to output `signed_image.jpg` using source `my_image.jpg`. The manifest will be signed using the PS256 signature algorithm with private key `mykey.pem`. The manifest will contain the trust chain specified in `mycerts.pem`.

:::warning
This example accesses the private key and certificate directly from the file system, which is fine during development, but is not secure for production use.  For more information, see [Using a certificate in production](prod-cert.mdx). 
:::

### Confirm it worked

Use C2PA Tool to confirm that you successfully signed the asset. Enter a command like this:

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
