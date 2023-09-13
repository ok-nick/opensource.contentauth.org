---
id: understanding-manifest
title: Working with manifest data
---

## Overview

The concept of a _manifest_ is central to how Content Credentials work.

A collection of manifests (referred to as a _manifest store_) is attached to an asset. Each manifest contains information about the provenance of the asset. Creating or editing an asset using a C2PA-compliant device or tool (for example Adobe Photoshop) adds a new manifest to the manifest store.

A manifest store can be linked to an asset in three different ways. To determine if an asset has Content Credentials, the CAI SDKs check to see if there is a manifest store (in this order):

1. Directly embedded in the file.
1. In a sidecar file, a file with the same file name as the asset but with a `.c2pa` extension.
1. In a remote URL, linked from the asset's XMP metadata, as detailed in the [C2PA specification](https://c2pa.org/specifications/specifications/1.3/specs/C2PA_Specification.html#_embedding_a_reference_to_the_active_manifest).

So, for example to see if `foo.jpg` has Content Credentials, the SDKs first check if there's a manifest store in the file itself, then they look for a sidecar file (`foo.c2pa` in the same directory), and finally they look in the asset's XMP metadata for a reference to a remote manifest store.

:::info
Currently, only Adobe has implemented a Content Credentials cloud service to provide access to remote manifest stores, but in theory anyone could do so to provide a publicly-accessible network location for manifests.
:::

The manifests in the manifest store are not in any order, but the most-recently added manifest is the _active manifest_. The active manifest has content bindings that can be validated with the asset&mdash;that is, it's hashed with the asset to ensure its validity.

## Binary versus JSON manifest

The manifest as described in the C2PA specification is a binary structure in Concise Binary Object Representation (CBOR) format. Using CBOR enables including binary data such as encryption keys and thumbnail images. The CBOR data is encapsulated inside JPEG Universal Metadata Box Format (JUMBF).

Because this binary structure is hard to understand and program to, the SDKs define a JSON manifest structure that's a declarative language for representing and creating a manifest in CBOR format. The JSON manifest format is a human-readable format, something like a translation layer that's easier to understand than the CBOR format. While there is a one-to-one mapping between the two formats, the JSON format is a more abstract representation. Although strictly speaking the JSON format is not _actually_ the manifest, it is a language that describes how to create a manifest.

So for example, there is no such thing as an ingredient assertion in the CBOR format, while there is in the JSON format. The CAI SDKs make the ingredient assertion and puts it in the manifest data based on what's in the JSON. _Ingredient_ means something else in the C2PA specification.

:::caution Question
_Is that correct?_
:::

The JSON manifest structure can fully describe almost everything in the underlying manifest format, except for binary blobs for C2PA structures and thumbnails that are included by a structure called a _resource reference_.

The JSON manifest structure has high-level structures called `ingredient` and `manifest` that aren't exactly what's in the C2PA spec, but are more of a high-level representation of the manifest binary content.

For instance, instead of having ingredient assertions and all their thumbnail assertions scattered in different ways and have to be sorted out, you just have an ingredient that refers to an ingredient structure. That ingredient structure looks similar to an ingredient assertion, but it's not treated as an assertion in the SDK API.

_Something_ has a MIME type as a format and it has an identifier is a path to a file and so you've got basically JSON and a bunch of associated files referenced from the JSON.

:::caution Question
_What is "something" above?_
:::

But if you're dealing with something like a camera that doesn't have a file system, those identifiers refer to memory blobs that are referenced in other ways in the underlying APIs.

Essentially the idea is is that you can create this JSON structure that describes all the things you want to put into a manifest, and some of those things might be binaries like thumbnails, in which case you'll put a file in there too, and reference that from the JSON. Then when you use the SDK to make the manifest, it assembles all the pieces, takes the ingredients that you've defined, and converts them into different assertions and other objects.

## Displaying manifest data with c2patool

`c2patool` is very helpful when developing applications to work with manfiest data. When saving a manifest, it has two modes:

- In the standard mode (the default), it saves a manifest file in JSON format, which is simplified and slightly different from the underlying binary manifest structure.
- In detailed mode (specified with the `-d` option) it saves a file that more closely reflects the actual structure of the binary data, including assertions with JUMBF URLs and their associated hashes.

## References

- [JPEG Universal Metadata Box Format (JUMBF)](https://www.iso.org/standard/84635.html): A framework for JPEG standards to add universal metadata, supplementary images, or other elements in addition to the base image.
- [Concise Binary Object Representation (CBOR)](https://cbor.io/): Data format whose design goals include the possibility of extremely small code size, fairly small message size, and extensibility without the need for version negotiation.
