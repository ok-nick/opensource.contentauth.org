---
id: ingredients
title: Ingredients
---

## Overview 

Digital assets are often not created entirely from scratch, but instead created from one or more existing assets, for example placing an image into a layer in Photoshop.  Such constituent assets are called _ingredients_. 

Each ingredient used to create an asset is listed in the JSON manifest `ingredients` array. 
When an ingredient has a manifest store, those manifests are inserted into the composed asset's manifest store to keep the provenance data intact. 

:::note
This documentation covers C2PA v1 ingredients.  The [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.34/specs/C2PA_Specification.html#_ingredient) also describes improved v2 ingredients.
:::

## Ingredient objects

The JSON manfiest `ingredients` array contains an [ingredient object](manifest-ref#ingredient) for each ingredient used.  The only required property of the ingredient object is the `title` property, which usually is the source file name.

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

### Examples

The [C2PA public-testfiles](https://c2pa.org/public-testfiles/image/) repository has several examples of assets with multiple ingredients:
- [Asset with two ingredients](https://contentcredentials.org/verify?source=https://c2pa.org/public-testfiles/image/jpeg/adobe-20220124-CAICA.jpg); [View JSON manifest store](https://c2pa.org/public-testfiles/image/jpeg/manifests/adobe-20220124-CAICA/manifest_store.json)
- [Asset with seven ingredients](https://contentcredentials.org/verify?source=https://c2pa.org/public-testfiles/image/jpeg/adobe-20220124-CAIAIIICAICIICAIICICA.jpg); [View JSON manifest store](https://c2pa.org/public-testfiles/image/jpeg/manifests/adobe-20220124-CAIAIIICAICIICAIICICA/manifest_store.json)



