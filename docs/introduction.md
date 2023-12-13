---
id: introduction
title: Introduction
---

import cr_pin from '../static/img/cr-pin.png';
import cai_open_source_red from '../static/img/cai-open-source-red.jpg';

:::tip
You're strongly encouraged to read this introduction and [Getting started](getting-started) to give you some basic background and context, before you dive right into development.  [Working with manifests](manifest/understanding-manifest) also has some crucial information common to all the language APIs
:::

## Overview

The **Coalition for Content Provenance and Authenticity (C2PA)** creates formal standards for the source and history (or provenance) of media content.   

The **Content Authenticity Initiative (CAI)** is an Adobe-led cross-industry consortium that advocates for the adoption of Content Credentials based on C2PA standards.  CAI develops and maintains open-source software based on C2PA technical specifications.

|  Website | Organization | Purpose / Description |
|--------------|---------|-----------------------|
| [c2pa.org](https://c2pa.org/)  | C2PA / Linux Foundation |  Standards body<br/>Technical specifications and guidance documents |
| [contentcredentials.org](https://contentcredentials.org/) | C2PA | Consumer-friendly site|
| [Verify](https://contentcredentials.org/verify) | C2PA / Adobe | Web-based tool to display Content Credentials |
| [contentauthenticity.org](https://contentauthenticity.org/)| CAI  | Industry consortium<br/>Open-source software and community resources |

### C2PA

C2PA provides the technical specifications and open standards for content provenance for use by creators, editors, publishers, media platforms, and consumers.  C2PA is a mutually-governed standards development organization (SDO) under the structure of the [Linux Foundation’s Joint Development Foundation](https://jointdevelopment.org/).

#### The "cr" icon

<img src={cr_pin} width="50" style={{float: 'left', margin: 10}} />

The "cr" icon is trademarked by the C2PA and is the _de facto_ mark for C2PA user experiences. Use  this icon to provide a consistent user experience and set expectations that an application, tool, or website implements C2PA standards.

### CAI

The CAI is creating a secure end-to-end system for digital content provenance through open-source development and cross-industry collaboration. CAI members include Adobe, Microsoft, The New York Times Co., The Associated Press, Intel, Qualcomm, and many more.  

## CAI open-source SDK

The Content Authenticity Initiative's open-source SDK (software development kit) consists of:

- [The c2patool command-line tool](#c2pa-tool): a command-line tool for working with C2PA manifests and media assets (audio, image or video files).
- [The JavaScript library](#javascript-library) (also known as the JavaScript SDK): Client JavaScript library for code that runs, for example, in a web browser.
- [Libraries for other programming languages](#other-language-libraries): Prerelease libraries for C++/C, Python, and Node.js.
- [The Rust library](#rust-library), which is the code that underlies everything else.  It's the "source of truth" that generates all the other APIs.

<img src={cai_open_source_red} width="800" />

### C2PA Tool 

C2PA Tool ([c2patool](c2patool)) is a **command-line utility for working with C2PA manifest data**. Use this tool to work with assets in a supported file format to:

- Read a JSON report of manifest data.
- Attach a manifest store to an asset, if it doesn't already have an associated manifest store.
- Add a manifest to to the associated manifest store if the asset does have an associated manifest store.

#### JavaScript library

The client [JavaScript library](js-sdk/getting-started/overview) enables **working with manifest data in the browser**. Use this library to:

- Verify and display manifest data on a website or web application.
- Link manifest data displayed on your site to [Verify](https://verify.contentauthenticity.org/).
- Easily add user interface elements to your website that display manifest data while following the [C2PA user experience recommendations](https://c2pa.org/specifications/specifications/1.0/ux/UX_Recommendations.html).


### Other language libraries

The [C++/C](c2pa-c), [Python](c2pa-python), and [Node.js](c2pa-node) libraries enable applications written in those languages to **create, verify, and display Content Credentials**.

:::warning Warning
These libraries are all early prerelease versions. They may have bugs and unimplemented features, and their APIs are subject to change.
:::

### Rust library

The CAI Rust library enables **adding C2PA capabilities to a desktop, mobile, or embedded application**. The Rust library is the fundamental system underlying everything else.  The c2patool uses it "under the hood" and language-specific APIs are generated from it.

You can use the Rust library via the Foreign Function Interface (FFI) to:

- Create and sign C2PA claims and manifests.
- Embed a manifest store into certain asset file formats.
- Parse and validate manifests found in certain asset file formats.
