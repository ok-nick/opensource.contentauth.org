---
id: assertions-actions
title: Assertions and actions
---

## Assertions

Assertions provide information about when, where, and how an asset was created or transformed. Examples include:

- [Actions](#actions) performed on the asset such as cropping, color or contrast adjustment, and so on.  
- Creative work, indicating an asset is the product of creative effort.
- "Do not train" to indicate whether the creator/owner of an asset is granting permission to use it for data mining or AI/ML training.

<div class="review-comment">
Other examples from spec... should we cover these here? 

- Camera information such as maker, lens stored in Exchangeable image file format (Exif).
- Thumbnails of the asset or its ingredients.
- Content bindings (for example, cryptographic hashes).

</div>

Add each assertion to the manifest `assertions` property, which is an array of [ManifestAssertion](manifest-ref#manifestassertion) objects.  A ManifestAssertion object has two required properties, `label`, a string, and `data`, which can contain arbitrary information; and two optional properties, `kind` and `instance`. The C2PA Technical Specification provides a [set of standard assertions](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_standard_c2pa_assertion_summary) and their corresponding labels. 

The standard form of an assertion in JSON is:

```json
      "assertions": [
        ...
        {
          "label": "Label string",
          "data": { 
            // Arbitrary data in JSON-LD format .. 
          },
          "kind": "Json" // Optional: one of “Cbor”,  “Json”, “Binary”, or “Uri”
          "instance" : 0 // Optional and rarely used
        },
        ...
```

| Assertion | Label | Description |
|-----------|--------------|-------------|
| Action |  `c2pa.actions` | All actions. See [Actions](#actions) below. |
| Creative work | `stds.schema-org.CreativeWork`  | The asset is the result of creative effort. |
| "Do not train" | `c2pa.training-mining` | Whether an asset may be used as part of a data mining or AI/ML training. |
| Thumbnail | `c2pa.thumbnail.claim` - Claim creation time <br/> `c2pa.thumbnail.ingredient` - Importing an ingredient | Thumbnails
| Exif information | `stds.exif` | Camera information such as maker, lens stored in Exchangeable image file format (Exif).


### Creative work assertion

A creative work assertion states that an asset was the product of creative effort, such as an original photograph or artwork. [Schema.org](https://schema.org/) provides a set of types and metadata fields, including [CreativeWork](https://schema.org/CreativeWork), which describes a representation of creative effort. This assertion provides information about the asset, including who created it and the date/time of publication.  For example:

```json
...
"assertions": [
  ...
  {
    "label": "stds.schema-org.CreativeWork",
    "data": {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "url": "https://stock.adobe.com/615559889"
    },
    "kind": "Json"
  },
  ...
]
```

### Do not train assertion

A "do not train" assertion specifies whether an asset may be used in data mining or AI/ML training.  The `label` property of such an assertion has the value `c2pa.training-mining` and the corresponding data object has four properties:

- `c2pa.data_mining` - Can text or data be extracted from the asset for purposes of determining "patterns, trends and correlations", including images containing text, where the text could be extracted via OCR.
- `c2pa.ai_inference` - Can the asset be used as input to a trained AI/ML model for the purposes of inferring a result.
- `c2pa.ai_generative_training` - Can the asset be used as training data for a generative AI/ML model that could produce derivative assets?  
- `c2pa.ai_training` - Can the asset be used as data to train non-generative AI/ML models, such as those used for classification, object detection, etc.

:::info
The `c2pa.ai_generative_training` assertion is distinct because generative AI enables creating derivative assets, while other uses do not.
:::

Each of these properties is an object with a `use` property that can have one of these properties:

- `allowed`: Permission is granted for this type of use.
- `notAllowed`: Permission is NOT granted for this type of use.
- `constrained`: Permission is not unconditionally granted for this use.  You can provide more details (such as contact information) in the `constraints_info` text property.

For more information, see the [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_training_and_data_mining).

Example:

```json
"assertions": [
  ...
  {
    "label": "c2pa.training-mining",
    "data": {
      "entries": {
        "c2pa.ai_generative_training": { "use": "notAllowed" },
        "c2pa.ai_inference": { "use": "notAllowed" },
        "c2pa.ai_training": { "use": "notAllowed" },
        "c2pa.data_mining": { 
          "use": "constrained",
          "constraint_info" : "Contact foo@bar.com for more information."
        } 
      }
    }
  }
  ...
]
```

### Thumbnail assertions

<div class="review-comment">
Should we cover this here? What should we say?
</div>

### Exif assertions

<div class="review-comment">
Should we cover this here? What should we say?
</div>

### Redaction

<div class="review-comment">
Should we cover this here? What should we say?
</div>

## Actions

An `actions` assertion is an array of [ManifestAssertion](https://opensource.contentauthenticity.org/docs/manifest/manifest-ref#manifestassertion) objects that provides information on edits and other actions on an asset. 

:::note
This documentation covers C2PA v1 actions.  The [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_actions) also describes improved v2 actions.
:::

Each action has the following standard properties.

| Property | Required? | Description | Example |
|----------|---| -------------|---------|
| `action` | Yes | The action name. | `c2pa.created` |
| `digitalSourceType` | No | A URL identifying a [IPTC term](https://cv.iptc.org/newscodes/digitalsourcetype/). Optional.  | `http://cv.iptc.org/newscodes/digitalsourcetype/`<br/>`compositeWithTrainedAlgorithmicMedia` |
| `softwareAgent` | No | The software or hardware used to perform the action. Optional.  | `"Adobe Firefly"` |
| `parameters` | No | Additional information describing the action. Optional.  | Reference to an ingredient. |

The value of the `action` property must be either a pre-defined standard C2PA action name string (of the form `c2pa.*`) or a custom action name string. The set of standard C2PA actions includes fundamental ones as `c2pa.created` for when an asset is first created, and numerous others for when an asset's content is modified in some way.  For a complete list, see the [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_actions).

<div class="review-comment">
Do we need to say anything more about custom action strings?  How are they defined, etc.?
</div>

For example:

```json
...
"assertions": [
  ...
  {
    "label": "c2pa.actions",
    "data": {
      "actions": [
        {
          "action": "c2pa.created"
        },
        {
          "action": "c2pa.drawing",
          "parameters": {
            "name": "gradient"
          }
        },
        {
          "action": "c2pa.placed",
          "instanceId": "xmp:iid:a922f87b-233e-4e89-b5c8-82c5a90df76c",
          "parameters": {
            "ingredient": {
              "hash": "sYBHErcYn+C6wO88KoeakQ/gfdxOy2BdvqajBd57hvE=",
              "url": "self#jumbf=c2pa.assertions/c2pa.ingredient"
            }
          }
        }
      ]           
    }
  }
],
...
```

### Digital source type

Use the `digitalSourceType` property with the `c2pa.created` action to specify how an asset was created, for example "digital capture", "digitized from negative" or "trained algorithmic media". The values of `digitalSourceType` is one of the URLs specified by the International Press Telecommunications Council (IPTC) [NewsCodes Digital Source Type scheme](https://cv.iptc.org/newscodes/digitalsourcetype/).  The URL is of the form `http://cv.iptc.org/newscodes/digitalsourcetype/negativeFilm/<CODE>`, where `<CODE>` is one of the codes shown in the following table.

| Code | Description |
|---|---|
| algorithmicallyEnhanced | Minor augmentation or correction by algorithm. |
| algorithmicMedia | Media created purely by an algorithm not based on any sampled training data, e.g. an image created by software using a mathematical formula. |
| compositeCapture | Mix or composite of several elements that are all captures of real life. |
| compositeSynthetic | Mix or composite of several elements, at least one of which is synthetic. |
| compositeWithTrainedAlgorithmicMedia | The compositing of trained algorithmic media with some other media, such as with inpainting or outpainting operations. |
| dataDrivenMedia | Digital media representation of data via human programming or creativity. |
| digitalArt | Media created by a human using digital tools. |
| digitalCapture | The digital media is captured from a real-life source using a digital camera or digital recording device. |
| minorHumanEdits | Minor augmentation or correction by a human, such as a digitally-retouched photo used in a magazine. |
| negativeFilm | The digital image was digitized from a negative on film or any other transparent medium. |
| positiveFilm | The digital image was digitized from a positive on a transparency or any other transparent medium. |
| print | The digital image was digitized from an image printed on a non-transparent medium. |
| softwareImage | The digital image was created by computer software. |
| trainedAlgorithmicMedia | Digital media created algorithmically using a model derived from sampled content. |
| virtualRecording | Live recording of virtual event based on synthetic and optionally captured elements. |

:::note
This table is provided for convenience.  For the authoritative list, see the [IPTC NewsCodes Digital Source Type scheme (controlled vocabulary)](https://cv.iptc.org/newscodes/digitalsourcetype/).
:::


### Generative AI action

To specify that an asset was created using generative AI, use the `c2pa.created` action with digitalSourceType that's one of:
- `trainedAlgorithmicMedia` for an asset created by generative AI  tools or systems.
- `compositeWithTrainedAlgorithmicMedia` for an asset that contains one or more elements that were created by generative AI tools or systems.

```json
"assertions": [
...
  {
    "label": "c2pa.actions",
    "data": {
      "actions": [
        {
          "action": "c2pa.created",
          "digitalSourceType": "http://cv.iptc.org/newscodes/digitalsourcetype/compositeWithTrainedAlgorithmicMedia",
          "softwareAgent": "<TOOL_NAME>"
        }
      ]
    }
  }
...
]
```

Where `<TOOL_NAME>` is the name of the generative AI tool or service.

