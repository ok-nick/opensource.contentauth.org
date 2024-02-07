---
id: ingredients
title: Ingredients
---

## Overview 

Digital assets are often not created entirely from scratch, but instead created from one or more existing assets, for example placing an image into a layer in Photoshop.  Such constituent assets are called _ingredients_. 

:::note
This documentation covers C2PA v1 ingredients.  The [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.34/specs/C2PA_Specification.html#_ingredient) also describes improved v2 ingredients.
:::

## Ingredient objects

Each ingredient used to create an asset is listed in the [JSON manifest](manifest-ref) `ingredients` array.  When an ingredient itself has a Content Credentials, those manifests are included in the composed asset's manifest store to keep the provenance data intact. 

The `ingredients` array contains an [ingredient object](manifest-ref#ingredient) for each ingredient.  The only required property of the `ingredient` object is the `title` property, which usually is the source file name.

Other important properties of the ingredient object include:
- `format`: MIME type of the source file.
- `document_id` and `instance_id` which are derived from the ingredient asset's XMP metadata.
- `thumbnail`: Object with properties that identify the thumbnail image. 
- `active_manifest`: For an ingredient with a manifest store, the label of the active manifest.  
- `relationship`: One of `parentOf`, `componentOf`, or `inputTo`. See [Relationship](#relationship) below.

For example:

```json
     "ingredients": [
        ...
      {
        "title": "CAI.jpg",
        "format": "image/jpeg",
        "instance_id": "xmp:iid:315e20bf-10da-4f44-85f4-6de350bfe688",
        "thumbnail": {
          "format": "image/jpeg",
          "identifier": "xmp-iid-315e20bf-10da-4f44-85f4-6de350bfe688.jpg"
        },
        "relationship": "componentOf",
        "active_manifest": "contentauth:urn:uuid:8bb8ad50-ef2f-4f75-b709-a0e302d58019"
      }
    ]
```

### Relationship

The ingredient object's `relationship` property describes its relationship to the current asset.  This property can have one of three values, as described in the table below.

|  Value of `relationship` | Description |
|--------------------------|-------------|
| `parentOf` | The current asset is a derived asset or asset rendition of this ingredient. This relationship value is also used with update manifests. |
| `componentOf` | This ingredient is one of the assets that composes the current asset. |
| `inputTo` | This ingredient was used as input to a computational process, such as an AI/ML model, that led to the creation or modification of this asset. |

## Validation status

When ingredients are added, their Content Credentials (if any) are validated.  When you inspect an asset using [Verify](../verify), it validates the current state of the asset. So, Verify can indicate valid credentials for a component ingredient but invalid credentials for the composed asset, even if they were signed using the same credentials, if, for example, the credential was valid when the ingredient was signed but is no longer valid.

For example, [this example image with two ingredients](https://contentcredentials.org/verify?source=https://c2pa.org/public-testfiles/image/jpeg/adobe-20220124-CAICA.jpg) shows invalid credentials, but its ingredient, CA.jpg, shows valid credentials.

<!--
As shown in the example, signed ingredients DO show as verified/valid, but the active manifest for the composed asset does not (shows the "unknown source" warning). It's  confusing that BOTH assets show the same info in **About this Content Credential**, but the  composed asset says "...issued by unknown source" while the ingredient says "Issued by C2PA Test Signing Cert" without that warning.

What it is telling you is that the make_test_images app considered all the ingredients valid when the were added, because it was using its own certs which it thinks are valid and is not doing the trust list validation that verify is using. Verify, in turn, is only validating the active manifest against the trust list, and failing. 

If they were all created at the same time by make_test_images, they will all have the same certs, and all the ingredients should have been verified as valid.

We do not validate certs for ingredients BTW per the spec.  The ingredient certs are validated when they are added to the manifest not during validation of the current asset.
-->

## Examples

The [C2PA public-testfiles](https://c2pa.org/public-testfiles/image/) repository has several examples of images with multiple ingredients:
- [Image with two ingredients](https://contentcredentials.org/verify?source=https://c2pa.org/public-testfiles/image/jpeg/adobe-20220124-CAICA.jpg); [View JSON manifest store](https://c2pa.org/public-testfiles/image/jpeg/manifests/adobe-20220124-CAICA/manifest_store.json)
- [Image with seven ingredients](https://contentcredentials.org/verify?source=https://c2pa.org/public-testfiles/image/jpeg/adobe-20220124-CAIAIIICAICIICAIICICA.jpg); [View JSON manifest store](https://c2pa.org/public-testfiles/image/jpeg/manifests/adobe-20220124-CAIAIIICAICIICAIICICA/manifest_store.json)



