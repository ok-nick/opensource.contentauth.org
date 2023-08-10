---
id: understanding-manifest
title: Understanding manifests
---

The concept of a _manifest_ is central to how Content Credentials work.

A collection of manifests (referred to as a _manifest store_) is attached to an asset&mdash;either embedded into the asset or external and linked to it. Each manifest contains information about the provenance of the asset. A manifest contains information about the provenance of an asset based on the combination of one or more assertions (including content bindings), a single claim, and a claim signature. The _active manifest_ is the last manifest in the manifest store which is the one with the set of content bindings that are able to be validated.

_Questions_:

- _Can we say something at a high level about how an external manifest is linked to an asset? Currently, this is only possible for Adobe implementations because it requires a Content Cred. cloud right?_
- _Is the set of manifests in the store a linked list, i.e. is there ordering? Or what kind of structure is it?_
- _This is unclear: "the active manifest is the ... one with the set of content bindings that are able to be validated."_

_Explain why there multiple manifests. Is a new manifest created each time an asset is saved, e.g. initial capture, editing by a tool, etc.? Or when?_

The structure of a manifest as described in the C2PA spec is a binary structure in CBOR inside of JUMBF.
It's not a JSON file.

## Binary versus JSON manifest

The manifest structure described in the C2PA specification is a binary structure in Concise Binary Object Representation (CBOR) format. Using CBOR enables including binary data such as encryption keys, and thumbnail images. The CBOR daata is encapsulated inside a JPEG Universal Metadata Box Format (JUMBF) structure.

In contrast, CAI and c2patool works with a JSON format derived from this binary structure.

_Is that correct, or is it just that CAI/c2patool use the JSON format as a simplified way to deal with the more complex binary manifest? Is it just for persistence to a human-readable file format, or?_

C2PA tool has two modes:

- In the default standard mode, it saves a manifest file in JSON format, which is simplified and slightly different from the underlying binary manifest structure.
- In detailed mode (specified with the `-d` option) it saves a file that more closely reflects the actual structure of the binary data, including assertions with JUMBF URLs and their associated hashes.

---

this is a human readable format, something that somebody can program to.
This is like a a translation layer and we have higher level concepts that we think are easier for people to understand.

There is a one to one mapping. The user just doesn't see it. It's a more abstract representation

So for example, there is no such thing as an ingredient assertion in the spec.
We make one for them and put it in the file based on what's in that JSON.

### JSON manifest

A manifest is a a complicated binary structure that can't be represented in JSON directly, but the JSON manifest structure is a declarative language for representing and creating a manifest.  
Although strictly speaking it's not _actually_ the manifest, it is a language that describes how to create a manifest.

The JSON manifest structure has high-level structures called `ingredient` and `manifest` that aren't exactly what's in the C2PA spec, but are more of a high-level representation of the manifest binary content.

For instance, instead of having ingredient assertions and all their thumbnail assertions scattered in different ways and have to be sorted out, you just have an ingredient that refers to an ingredient structure. That ingredient structure looks similar to an ingredient assertion, but it's not treated as an assertion in our API.

The JSON structure can fully describe almost everything in the underlying manifest format, except for binary blobs for CPA structures and thumbnails that are included by a structure called a _resource reference_.

_Something_ has a MIME type as a format and it has an identifier is a path to a file and so you've got basically JSON and a bunch of associated files referenced from the JSON.

But if you're dealing with something like a camera that doesn't have a file system, those identifiers refer to memory blobs that are referenced in other ways in the underlying APIs.

Essentially the idea is is that you can create this JSON structure that describes all the stuff you want to put into a manifest, and some of those things might be binaries like thumbnails, in which case you'll put a file in there too, in reference that by from the JSON, and then when you hand that to the make manifest, it pulls all those things in and assembles all the pieces and constructs everything and takes the ingredients that you've defined and converts them into a bunch of different assertions and other things.

## References

- [JPEG Universal Metadata Box Format (JUMBF)](https://www.iso.org/standard/84635.html): A framework for JPEG standards to add universal metadata allowing future extensions using metadata, supplementary images, or other elements in addition to the base image.
  - _Can we link to something that doesn't require payment?_
- [Concise Binary Object Representation (CBOR)](https://cbor.io/) - Data format whose design goals include the possibility of extremely small code size, fairly small message size, and extensibility without the need for version negotiation.
