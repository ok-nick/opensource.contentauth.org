---
id: index
title: Manifest JSON reference
hide_table_of_contents: true
pagination_next: null
pagination_prev: null
---

The manifest as described in the C2PA specification is a binary structure in JPEG universal metadata box format ([JUMBF](https://www.iso.org/standard/84635.html)) that can include JSON and binary data for things like encryption keys and thumbnail images.

Because the binary structure is hard to understand and program to, the SDK defines a JSON manifest structure that's a declarative language for representing and creating a manifest in binary format.

The JSON manifest format is an abstract translation layer that's easier to understand than the binary format. It can describe everything in the underlying binary format except for binary data such as thumbnails that are included by a structure called a _resource reference_. When the SDK generates the binary manifest structure, it assembles all the JSON objects, resource references, and ingredients defined, and then converts them into different assertions and other objects as required.

References:

- [ManifestDefinition](manifest-def.mdx)
- [Reader](reader.mdx)