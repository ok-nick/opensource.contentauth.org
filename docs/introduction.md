---
id: introduction
title: Introduction
---

:::tip
You're strongly encouraged to read this introduction and [Getting started](getting-started) to give you some basic background and context, before you dive right into development.  [Working with manifests](manifest/understanding-manifest) also has some crucial information common to all the language APIs
:::

## Overview

The Content Authenticity Initiative's open-source offerings consist of:

- [The c2patool command-line tool](#c2pa-tool).
- [The Rust SDK](#rust-sdk).
- [Language-specific libraries](#language-specific-libraries) that implement APIs for JavaScript, C++/C, Python, and Node.js.

The Rust SDK is the fundamental library underlying everything else.  The c2patool uses it "under the hood" and language-specific APIs are all generated from it.

## c2patool

[C2patool](c2patool) is a **command-line utility for working with C2PA manifest data**. Use this tool to work with assets in a supported file format to:

- Read a JSON report of manifest data.
- Attach a manifest store to an asset, if it doesn't already have an associated manifest store.
- Add a manifest to to the associated manifest store if the asset does have an associated manifest store.

## Rust SDK

The [Rust SDK](rust-sdk) enables **adding C2PA capabilities to a desktop, mobile, or embedded application**. Use the Rust SDK to:

- Create and sign C2PA claims and manifests.
- Embed a manifest store into certain asset file formats.
- Parse and validate manifests found in certain asset file formats.

## Language-specific libraries

CAI includes libraries that provide APIs for JavaScript, C++/C, Python, and Node.js.

### JavaScript SDK

The client [JavaScript SDK](js-sdk/getting-started/overview) enables **working with manifest data in the browser**. Use this SDK to:

- Verify and display manifest data on a website or web application.
- Link manifest data displayed on your site to [Verify](https://verify.contentauthenticity.org/).
- Easily add user interface elements to your website that display manifest data while following the [C2PA user experience recommendations](https://c2pa.org/specifications/specifications/1.0/ux/UX_Recommendations.html).

### Other languages

The [C++/C](c2pa-c), [Python](c2pa-python), and [Node.js](c2pa-node) APIs are all early prerelease libraries. They may have bugs and unimplemented features, and their APIs are subject to change.
