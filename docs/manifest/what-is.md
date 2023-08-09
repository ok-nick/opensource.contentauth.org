---
id: what-is-manifest
title: What is a manifest?
---

The concept of a _manifest_ is central to how Content Credentials work.

A collection of manifests (referred to as a _manifest store_) is attached to an asset&mdash;either embedded into the asset or external and linked to it.  Each manifest contains information about the provenance of the asset. A manifest contains information about the provenance of an asset based on the combination of one or more assertions (including content bindings), a single claim, and a claim signature. The _active manifest_ is the last manifest in the manifest store which is the one with the set of content bindings that are able to be validated.

_Questions_:
- _Can we say something at a high level about how an external manifest is linked to an asset? Currently, this is only possible for Adobe implementations because it requires a Content Cred. cloud right?_
- _Is the set of manifests in the store a linked list, i.e. is there ordering?  Or what kind of structure is it?_
- _This is unclear: "the active manifest is the ... one with the set of content bindings that are able to be validated."_

_Explain why there multiple manifests. Is a new manifest created each time an asset is saved, e.g. initial capture, editing by a tool, etc.?  Or when?_

The structure of a manifest as described in the C2PA spec is a binary structure in CBOR inside of JUMBF.
It's not a JSON file.

## Binary manifest versus JSON manifest

The manifest structure described in the C2PA specification is a binary structure in  Concise Binary Object Representation (CBOR) format.  Using CBOR enables including binary data such as encryption keys, and thumbnail images. The CBOR daata is encapsulated inside a JPEG Universal Metadata Box Format (JUMBF) structure.  

In contrast, CAI and c2patool works with a JSON format derived from this binary structure.

_Is that correct, or is it just that CAI/c2patool use the JSON format as a simplified way to deal with the more complex binary manifest?  Is it just for persistence to a human-readable file format, or?_

C2PA tool has two modes. In standard mode, the manifest saved has JSON format.  But in  detailed mode it saves that looks a lot more like the structure of the actual data that's stored, because it will show all these assertions, all these jumbf URLs, and a bunch of hashes and other stuff in it. And what we do here is we convert this into a higher level format.

And so, for instance, instead of having ingredient assertions and all their thumbnail assertions
and things like that that are scattered in different ways and have to be sorted out, you just

have an ingredient that refers to an ingredient structure. That ingredient structure is sort of like what an ingredient assertion looks like, but it's not treated as an assertion in our API, and it's different.

So there's these high level structures called ingredient and manifest that aren't exactly
what's in the spec. They are something we created that is our way of generating the content or representing the content.

So what this thing really is a declarative way of creating a manifest. It's a declarative language for doing
that.

That's done in JSON with binaries and that's the really weird concept to get across.

What we ended up with is a JSON structure that can fully describe almost everything except for the binary blobs that are in there, like CPA structures and thumbnails and things which are now referenced by this other little structure that's called a resource reference.



## References

- [JPEG Universal Metadata Box Format (JUMBF)](https://www.iso.org/standard/84635.html): A framework for JPEG standards to add universal metadata allowing future extensions using metadata, supplementary images, or other elements in addition to the base image.
  - Can we link to something that doesn't require payment?
- [Concise Binary Object Representation (CBOR)](https://cbor.io/) - Data format whose design goals include the possibility of extremely small code size, fairly small message size, and extensibility without the need for version negotiation.
