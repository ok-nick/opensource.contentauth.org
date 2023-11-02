---
id: assertions-actions
title: Assertions and actions
---

## Assertions

Assertions provide information about when, where, and how an asset was created or transformed. Examples include:

- [Actions](#actions) performed on the asset such as cropping, color or contrast adjustment, and so on.  
- Creative work, indicating an asset is the product of creative effort.
- "Do not train" to indicate whether the creator/owner of an asset is granting permission to use it for data mining or AI/ML training.
- Content bindings (for example, cryptographic hashes).

Add each assertion to the manifest `assertions` property, which is an array of [ManifestAssertion](manifest-ref#manifestassertion) objects.  A ManifestAssertion object has two required properties, `label`, a string, and `data`, which can contain arbitrary information; and two optional properties, `kind` and `instance`. 

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
]
```

| Assertion | Label | Description |
|-----------|--------------|-------------|
| Action |  `c2pa.actions` | All edits and other actions on an asset. See [Actions](#actions) below. |
| Creative work | `stds.schema-org.CreativeWork`  | The asset is the result of creative effort.  See [Creative work assertion](#creative-work-assertion) below. |
| "Do not train" | `c2pa.training-mining` | Whether an asset may be used as part of a data mining or AI/ML training. See [Do not train assertion](#do-not-train-assertion) below. |
| Thumbnail | `c2pa.thumbnail.claim` - Claim creation time <br/> `c2pa.thumbnail.ingredient` - Importing an ingredient | Thumbnails
| Exif information | `stds.exif` | Camera information such as maker, lens stored in Exchangeable image file format (Exif).  See [Exif assertion](#exif-assertion) below. |

For the list of standard assertions and their labels, see the [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_standard_c2pa_assertion_summary). 

:::note
CAI API libraries handle assertions for thumbnails and ingredients, so normally you don't  need to think about them.
:::

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

A "do not train" assertion specifies whether permission is granted to use an asset in data mining or AI/ML training.  The `label` property of such an assertion has the value `c2pa.training-mining` and  the corresponding data object has four relevant properties:

- `c2pa.data_mining` - Whether text or data be extracted from the asset for purposes of determining "patterns, trends and correlations", including images containing text, where the text could be extracted via OCR.
- `c2pa.ai_inference` - Whether the asset be used as input to a trained AI/ML model for the purposes of inferring a result.
- `c2pa.ai_generative_training` - Whether the asset be used as training data for a generative AI/ML model that could produce derivative assets?  
- `c2pa.ai_training` - Whether the asset be used as data to train non-generative AI/ML models, such as those used for classification, object detection, and so on.

:::info
The `c2pa.ai_generative_training` is distinct because generative AI enables creating derivative assets, while other uses do not.
:::

The value of each of the above properties is an object with a `use` property that can have one of these properties:

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

### Exif assertion

Exchangeable image file (Exif) format is a standard for storing technical metadata in image files of JPEG, TIFF, PNG, and other formats. Most new digital cameras (including smartphones) as well as scanners and other digital capture devices use Exif to store information such as device make and model, shutter speed, ISO number, date and time of capture, location, and so on.  For more information on Exif, see the [Exif specification](https://www.cipa.jp/std/documents/download_e.html?DC-008-Translation-2019-E).

Use an Exif assertion to add Exif information to the asset in a way that can be validated cryptographically.  The label property for an Exif assertion has a value of `stds.exif`.

Here is a simple example:

```json
"assertions": [
  ...
  {
    "label": "stds.exif",
    "data": {
      "@context" : {
        "exif": "http://ns.adobe.com/exif/1.0/"
      },
      "exif:GPSVersionID": "2.2.0.0",
      "exif:GPSLatitude": "39,21.102N",
      "exif:GPSLongitude": "74,26.5737W",
      "exif:GPSAltitudeRef": 0,
      "exif:GPSAltitude": "100963/29890",
      "exif:GPSTimeStamp": "2019-09-22T18:22:57Z"
    }
  }
  ...
]
```

### Content bindings

Content bindings uniquely identify portions of an asset. 
Normally you don't need to write content bindings, just read them.

Example in detailed manifest

```json 
"alg": "sha256",  // Hash algorithm
"exclusions": [ // Don't hash these areas
  {
    "length": 51179, //Number of bytes to NOT hash
    "start": 20 // Number of bytes to exclude from start of file
  }
],
"hash": "DcGR4k9M6aLXXCeDii4tSdX45rrIM5HSr1Wy/czQ6ro=", // Base64 encoding of SHA of hash of asset except for  manifest
```

## Actions

An `actions` assertion is an array of [ManifestAssertion](https://opensource.contentauthenticity.org/docs/manifest/manifest-ref#manifestassertion) objects that provides information on edits and other actions that have been performed on an asset. 

Each action has the following standard properties.

| Property | Required? | Description | Example |
|----------|-----------| ------------|---------|
| `action` | Yes | The action name. | `c2pa.created` |
| `digitalSourceType` | No | A URL identifying a [IPTC term](https://cv.iptc.org/newscodes/digitalsourcetype/).  | `http://cv.iptc.org/newscodes/digitalsourcetype/`<br/>`compositeWithTrainedAlgorithmicMedia` |
| `softwareAgent` | No | The software or hardware used to perform the action.   | `"Adobe Firefly"` |
| `parameters` | No | Additional information describing the action. | Reference to an ingredient. |

The value of the `action` property must be either a pre-defined standard C2PA action name string (of the form `c2pa.*`) or a custom action name. The set of standard C2PA actions includes fundamental ones as `c2pa.created` for when an asset is first created, and numerous others for when an asset's content is modified in some way.  For a complete list, see the [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_actions).

You can also define a custom action which have a label string with reverse domain syntax, for example `com.adobe.foo`.

<div class="review-comment">
Below doesn't seem right (it's not an action) but is from Truepic testfile https://github.com/crandmck/public-testfiles/blob/main/manifests/image/jpeg/truepic-20230212-library/manifest_store.json#L22.
</div>

For example:

```json
"assertions": [
  ...
  {
    "label": "com.truepic.libc2pa",
    "data": {
      "git_hash": "023bb51",
      "lib_name": "Truepic C2PA C++ Library",
      "lib_version": "2.5.1",
      "target_spec_version": "1.2"
    },
    "kind": "Json"
  },
  ...
]
```

### V2 actions

This documentation covers C2PA v1 actions.  The [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_actions) also describes expanded v2 actions.  V1 actions are fully specified in the actions array. However, in v2, an action may either be specified by an element of the actions array or from an element in the templates array with the same action name.

Thre are some differences between v1 and v2 actions, for example in v2, `softwareAgent` is a [ClaimGeneratorInfo](../manifest-ref#claimgeneratorinfo) structure instead of a string.
The CAI APIs can read all v2 actions and write most v2 actions.

<!-- 
If action is associated with an ingredient, need to link them

In spec, create a hashed URI map

In v1, was called ingredient , in v2 `ingredients` is an array.
-->

The `instanceId` field only used when defining/writing a manifest, not reading one.

```json 
 "parameters": {
    "ingredient": {
      "hash": "sYBHErcYn+C6wO88KoeakQ/gfdxOy2BdvqajBd57hvE=",
      "url": "self#jumbf=c2pa.assertions/c2pa.ingredient"
    },
    "instanceId": "<String-instance-ID-of-ingredient>"
 }
```

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

Use the `digitalSourceType` property with the `c2pa.created` action to specify how an asset was created, for example "digital capture", "digitized from negative" or "trained algorithmic media." The values of `digitalSourceType` is one of the URLs specified by the International Press Telecommunications Council (IPTC) [NewsCodes Digital Source Type scheme](https://cv.iptc.org/newscodes/digitalsourcetype/).  The URL is of the form `http://cv.iptc.org/newscodes/digitalsourcetype/negativeFilm/<CODE>`, where `<CODE>` is one of the codes shown in the following table.

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

