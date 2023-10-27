---
id: assertions-actions
title: Assertions and actions
---

## Assertions

Assertions provide information about when, where, and how an asset was created or transformed. 

Examples of assertions include:

- Exif information (e.g. camera information such as maker, lens)
- Actions performed on the asset (e.g., clipping, color correction)
- Thumbnail of the asset or its ingredients
- Content bindings (e.g., cryptographic hashes)

### Standard C2PA assertions

The C2PA Technical Specification provides a [set of standard assertions](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_standard_c2pa_assertion_summary).   Some important assertions are:
- `c2pa.actions` for actions. See [Actions](#actions) below for more information.
- `stds.schema-org.CreativeWork` for creative work. 
- `c2pa.thumbnail.claim` (claim creation time) `c2pa.thumbnail.ingredient` (importing an ingredient)
- ... Others?

### CreativeWork assertion

Schema.org provides a well-known and well-deployed set of types and metadata fields. One of the core types is CreativeWork, which is intended to describe any representation of creative effort. This assertion allows an asserter to provide various pieces of information about the asset, including who they are, and the date/time of publication.

A Creative Work assertion shall have a label of stds.schema-org.CreativeWork.

Inside the assertion (which, as described previously, is serialised as JSON-LD), the top-level @type field should be set to a value of CreativeWork. The JSON-LD document’s root subject is the bound asset of the claim that this assertion is part of.

For example:

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

The "do not train" assertion specifies whether an asset may be used as part of a data mining or AI/ML training. 

This is expressed in the assertion through a map of one or more training-mining-entries. Each entry describes whether its use is allowed, notAllowed or constrained.

For full details, see the [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_training_and_data_mining).

There are four pre-defined properties:

- `c2pa.data_mining` - Can any text or data content be extracted from the asset for purposes of determining "patterns, trends and correlations", including images containing text, where the text could be extracted via OCR.
- `c2pa.ai_inference` - Can the asset be used as input to a trained AI/ML model for the purposes of inferring a result.
- `c2pa.ai_generative_training` - Can the asset be used as training data for a generative AI/ML model that could produce derivative assets?
- `c2pa.ai_training` - Can the asset be used as data to train non-generative AI/ML models, such as those used for classification, object detection, etc.

:::info
The `c2pa.ai_generative_training` and `c2pa.ai_training` assertions are separate because generative AI training enables creating derivative assets from training assets, while other types, such as object detection, do not.
:::

Each of these properties is an object with a `use` property that can have one of these properties:

- `allowed`: Permission is granted for this type of use.
- `notAllowed`: Permission is NOT granted for this type of use.
- `constrained`: Permission is not unconditionally granted for this use.  You can provide more details (such as contact information) in the `constraints_info` text property.

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


### Redaction

_TBD.  What should we say here?_

## Actions

An `actions` assertions is an array of [ManifestAssertion](https://opensource.contentauthenticity.org/docs/manifest/manifest-ref#manifestassertion) objects that provides information on edits and other actions on an asset. 

_Should we mention v2 actions?_

Each action has the following standard properties.

| Property | Description | Example |
|---|---|---|
| `action` | The action name, `c2pa.*` | `c2pa.created` |
| `digitalSourceType` | A URL identifying a [IPTC term](https://cv.iptc.org/newscodes/digitalsourcetype/)  | `http://cv.iptc.org/newscodes/digitalsourcetype/compositeWithTrainedAlgorithmicMedia` |
| softwareAgent | The software or hardware used to perform the action. | `"Adobe Firefly"` |


The set of standard C2PA actions includes fundamental ones as `c2pa.created` for when an asset is first created, and `c2pa.edited` for when an asset's content is modified in some way.  For a complete list, see the [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_actions).

### Digital source type

The allowable values for the `digitalSourceType` property are specified by the URI values of the International Press Telecommunications Council (IPTC) [NewsCodes Digital Source Type scheme](https://cv.iptc.org/newscodes/digitalsourcetype/).  The URI is of the form `http://cv.iptc.org/newscodes/digitalsourcetype/negativeFilm/<CODE>`, where `<CODE>` is one of the codes shown in the following table.

| Code | Description |
|---|---|
| digitalCapture | The digital media is captured from a real-life source using a digital camera or digital recording device. |
| negativeFilm | The digital image was digitised from a negative on film or any other transparent medium. |
| positiveFilm | The digital image was digitised from a positive on a transparency or any other transparent medium. |
| print | The digital image was digitised from an image printed on a non-transparent medium. |
| minorHumanEdits | Minor augmentation or correction by a human, such as a digitally-retouched photo used in a magazine. |
| compositeCapture | Mix or composite of several elements that are all captures of real life. |
| algorithmicallyEnhanced | Minor augmentation or correction by algorithm. |
| dataDrivenMedia | Digital media representation of data via human programming or creativity. |
| digitalArt | Media created by a human using digital tools. |
| virtualRecording | Live recording of virtual event based on synthetic and optionally captured elements. |
| compositeSynthetic | Mix or composite of several elements, at least one of which is synthetic. |
| trainedAlgorithmicMedia | Digital media created algorithmically using a model derived from sampled content. |
| compositeWithTrainedAlgorithmicMedia | The compositing of trained algorithmic media with some other media, such as with inpainting or outpainting operations. |
| algorithmicMedia | Media created purely by an algorithm not based on any sampled training data, e.g. an image created by software using a mathematical formula. |
| softwareImage | The digital image was created by computer software. |

:::note
This table is provided for convenience.  For the authoratitive list, see the [IPTC NewsCodes Digital Source Type scheme (controlled vocabulary)](https://cv.iptc.org/newscodes/digitalsourcetype/).
:::

### Generative AI actions

To specify that an asset was created using generative AI, use the `c2pa.created` action:

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

