---
id: ingredients
title: Writing ingredients
---

## Overview 

Digital assets are often not created entirely from scratch, but instead created from one or more existing assets, for example placing an image into a layer in Photoshop.  Such constituent assets are called _ingredients_. 

[Old manifests](../reading/legacy.md) may contain deprecated v1 and v2 ingredients, but applications should only write v3 ingredients.

Applications should write only v3 ingredients, with label starting with `c2pa.ingredient.v3` and are described in the [C2PA specification](https://spec.c2pa.org/specifications/specifications/2.2/specs/C2PA_Specification.html#ingredient_assertion) .

:::note
The C2PA Technical Specification describes _ingredient assertions_ but the CAI SDK treats ingredients separately as their own objects in the JSON manifest rather than as a type of assertion.
:::

## Ingredient objects

The `ingredients` array contains an element for each ingredient used to create an asset.  When an ingredient itself has Content Credentials, those manifests are included in the composed asset's manifest store to keep the provenance data intact.

The `ingredients` array contains an [ingredient object](manifest/json-ref/manifest-def.mdx#ingredient) for each ingredient.  The only required property of the `ingredient` object is the `title` property, which usually is the source file name.

The `label` property for the first ingredient in a manifest is `c2pa.ingredient.v3` When there is more than one ingredient, subsequent labels have a monotonically increasing index: `c2pa.ingredient.v3__1`, `c2pa.ingredient.v3__2`, and so on.

Other important properties of the ingredient object include:
- `format`: MIME type of the source file (optional).
- `document_id` (optional) and `instance_id` (required) which are derived from the ingredient asset's XMP metadata.
- `thumbnail`: Object with properties that identify the thumbnail image. 
- `active_manifest`: For an ingredient with a manifest store, the label of the active manifest.  
- `relationship`: One of `parentOf`, `componentOf`, or `inputTo`. See [Relationship](#relationship) below.

For example:

```json
"ingredients": [
  {
    "title": "turkey.jpeg",
    "format": "image/jpeg",
    "instance_id": "xmp.iid:3250038a-22ca-459b-8392-de275f8b155c",
    "relationship": "parentOf",
    "label": "c2pa.ingredient.v3"
  },
  ...
],    
```

### Relationship

The ingredient object's `relationship` property describes its relationship to the current asset.  This property can have one of three values, as described in the table below.

|  Value of `relationship` | Description |
|--------------------------|-------------|
| `parentOf` | The current asset is a derived asset or asset rendition of this ingredient. This relationship value is also used with update manifests.  There can be at most one parent ingredient in a manifest. |
| `componentOf` | This ingredient is one of the assets that composes the current asset. |
| `inputTo` | This ingredient was used as input to a computational process, such as an AI/ML model, that led to the creation or modification of this asset. |

## Validation results

See [Validation results](json-ref/reader#validationresults) in the manifest JSON reference.

When ingredients are added, the SDK validates their Content Credentials (if any).  However, the validation status of an ingredient does not imply anything about the validation status of the composed asset containing the ingredient. In other words:
- A composed asset's Content Credentials may be valid, but one or more of its ingredients may have invalid Content Credentials. For example, test file [adobe-20220124-XCA.jpg](https://contentcredentials.org/verify?source=https://c2pa.org/public-testfiles/image/jpeg/adobe-20220124-XCA.jpg)
- A composed asset's Content Credentials may be invalid, but one or more of its ingredients may have valid Content Credentials. For example, test file [adobe-20220124-CIE-sig-CA.jpg](https://contentcredentials.org/verify?source=https://c2pa.org/public-testfiles/image/jpeg/adobe-20220124-CIE-sig-CA.jpg). 

:::note
Ingredient certificates are validated when they are added to the manifest store, NOT during validation of the composed asset. 
:::




