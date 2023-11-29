---
id: introduction
title: Introduction
---

import cr_pin from '../static/img/cr-pin.png';

:::tip
You're strongly encouraged to read this introduction and [Getting started](getting-started) to give you some basic background and context, before you dive right into development.  [Working with manifests](manifest/understanding-manifest) also has some crucial information common to all the language APIs
:::

## Overview

The **Content Authenticity Initiative (CAI)** is an Adobe-led cross-industry consortium that advocates for the adoption of Content Credentials based on C2PA standards.  CAI develops and maintains open-source software for working with Content Credentials.

The **Coalition for Content Provenance and Authenticity (C2PA)** is a mutually-governed standards development organization (SDO) under the structure of the [Linux Foundation’s Joint Development Foundation](https://jointdevelopment.org/) that creates formal standards for content provenance.  CAI open-source software is compliant with C2PA technical specifications.

| Organization | Website | Purpose / Description |
|--------------|---------|-----------------------|
| C2PA / Linux Foundation | [c2pa.org](https://c2pa.org/)  | Standards body |
| CAI| [contentauthenticity.org](https://contentauthenticity.org/) | Industry consortium |
| CAI | [contentcredentials.org](https://contentcredentials.org/) | Industry consortium <br/> Consumer-friendly site|
| CAI / Adobe | [Verify](https://contentcredentials.org/verify) | Web-based tool to display Content Credentials |

### CAI

The CAI is creating a secure end-to-end system for digital content provenance through open-source development and cross-industry collaboration. 

The CAI collaborates with software, publishing, social media companies, human rights organizations, photojournalism, and academic researchers. 
Members include Adobe, Microsoft, The New York Times Co., The Associated Press, Intel, Qualcomm, and many more.  

### C2PA

The C2PA complements the efforts of the CAI by providing the technical specifications and open standards for creators, editors, publishers, media platforms, and consumers.  C2PA also provides a [User Experience Guide for Implementers](https://c2pa.org/specifications/specifications/1.1/ux/UX_Recommendations.html).

The CAI develops tools and software based on C2PA standards.

#### The "cr" icon

<img src={cr_pin} width="60" style={{float: 'left', margin: 10}} />

The "cr" icon is trademarked by the C2PA and is the _de facto_ mark for C2PA user experiences. Use  this icon to provide a consistent user experience and set expectations that an application, tool, or website implements C2PA standards.

## CAI open-source software

The Content Authenticity Initiative's open-source offerings consist of:

- [The c2patool command-line tool](#c2pa-tool).
- [The Rust SDK](#rust-sdk).
- [Language-specific libraries](#language-specific-libraries) that implement APIs for JavaScript, C++/C, Python, and Node.js.

The Rust SDK is the fundamental library underlying everything else.  The c2patool uses it "under the hood" and language-specific APIs are all generated from it.

### c2patool

[C2patool](c2patool) is a **command-line utility for working with C2PA manifest data**. Use this tool to work with assets in a supported file format to:

- Read a JSON report of manifest data.
- Attach a manifest store to an asset, if it doesn't already have an associated manifest store.
- Add a manifest to to the associated manifest store if the asset does have an associated manifest store.

### Rust SDK

The [Rust SDK](rust-sdk) enables **adding C2PA capabilities to a desktop, mobile, or embedded application**. Use the Rust SDK to:

- Create and sign C2PA claims and manifests.
- Embed a manifest store into certain asset file formats.
- Parse and validate manifests found in certain asset file formats.

### Language-specific libraries

CAI includes libraries that provide APIs for JavaScript, C++/C, Python, and Node.js.

#### JavaScript SDK

The client [JavaScript SDK](js-sdk/getting-started/overview) enables **working with manifest data in the browser**. Use this SDK to:

- Verify and display manifest data on a website or web application.
- Link manifest data displayed on your site to [Verify](https://verify.contentauthenticity.org/).
- Easily add user interface elements to your website that display manifest data while following the [C2PA user experience recommendations](https://c2pa.org/specifications/specifications/1.0/ux/UX_Recommendations.html).

#### Other languages

The [C++/C](c2pa-c), [Python](c2pa-python), and [Node.js](c2pa-node) APIs are all early prerelease libraries. They may have bugs and unimplemented features, and their APIs are subject to change.
