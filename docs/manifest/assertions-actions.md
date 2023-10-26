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
- ... ?

### Do not train assertion

The "do not train" specifies whether an asset may be used as part of a data mining or AI/ML training. 

This is expressed in the assertion through a map of one or more training-mining-entries. Each entry describes whether its use is allowed, notAllowed or constrained.

For full details, see the [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_training_and_data_mining).

There are four pre-defined entries:

- `c2pa.data_mining` - Can any text or data content be extracted from the asset for purposes of determining "patterns, trends and correlations". This would include images containing text, where the text could be extracted via OCR.
- `c2pa.ai_inference` - Can the asset be used as input to a trained AI/ML model for the purposes of inferring a result.
- `c2pa.ai_generative_training` - Can the asset be used as training data to a generative AI/ML model that could produce derivative assets?
- `c2pa.ai_training` - Can the asset be used as data to train non-generative AI/ML models, such as those used for classification, object detection, etc.

:::info
There are separate `c2pa.ai_generative_training` and `c2pa.ai_training` assertions because generative AI training enables creating derivative assets from training assets, while other types, such as object detection, do not.
:::

Example:

```
...
"assertions": [
    {
      "label": "c2pa.training-mining",
      "data": {
        "entries": {
          "c2pa.ai_generative_training": { "use": "notAllowed" },
          "c2pa.ai_inference": { "use": "notAllowed" },
          "c2pa.ai_training": { "use": "notAllowed" },
          "c2pa.data_mining": { "use": "notAllowed" }
        }
      }
    }
  ]
...
```


### Redaction

_TBD.  What should we say here?_

## Actions

An actions assertion provides information on edits and other actions taken that affect the asset’s content. There will be an array of actions - each action declaring what took place on the asset, when it took place, along with possible other information such as what software performed the action.

_Should we mention v2 actions?_

Each action has the following standard properties.

| Property | Description | Example |
|---|---|---|
| `action` | The action name, `c2pa.*` | `c2pa.created` |
| `digitalSourceType` | A URL identifying a [IPTC term](https://cv.iptc.org/newscodes/digitalsourcetype/)  | `http://cv.iptc.org/newscodes/digitalsourcetype/compositeWithTrainedAlgorithmicMedia` |
| softwareAgent | The software or hardware used to perform the action. | `"Adobe Firefly"` |



The set of standard C2PA actions includes such fundamental ones as `c2pa.created` for when an asset is first created, `c2pa.cropped` for when areas of the asset’s "editorial" content was cropped out, and `c2pa.edited` for when an asset's content is modified in some way.  For a complete list, see the [C2PA Technical Specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_actions).

### Generative AI actions

DigitalSourceTypes that should be found by searching all actions in all nested manifests
http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia
http://cv.iptc.org/newscodes/digitalsourcetype/compositeWithTrainedAlgorithmicMedia

For example:

```
...
"assertions": [
  {
    "label": "c2pa.actions",
    "data": {
      "actions": [
        {
          "action": "c2pa.created",
          "digitalSourceType": "http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia",
          "softwareAgent": "Adobe Firefly"
        }
      ]
    }
  }
],
...
```