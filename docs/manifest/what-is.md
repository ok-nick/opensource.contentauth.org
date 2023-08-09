---
id: what-is-manifest
title: What is a manifest?
---

The concept of a _manifest_ is central to how CAI works.

C2PA works by attaching a collection of manifests (referred to as a manifest store) to an asset. The manifest store can be either embedded into the asset or external and linked to it.

A manifest contains information about the provenance of an asset based on the combination of one or more assertions (including content bindings), a single claim, and a claim signature.

Active manifest: The last manifest in the list of C2PA manifests inside of a C2PA manifest store which is the one with the set of content bindings that are able to be validated.

The structure of a manifest as described in the C2PA spec is a binary structure embedded in CBOR inside of JUMBF.
It's not a JSON file.
