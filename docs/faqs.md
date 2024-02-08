---
id: faqs
title: Frequently-asked questions
---

## What happens if I use a C2PA-enabled camera to take a photo of an AI-generated image? 

The camera will sign the image, but since it has no way of detecting what it is, it won’t flag it as generated with AI.  In general, the camera will indicate the device, when and where the image was taken in metadata, but it is not capable of analyzing the content of the image.

## What happens to CAI data if an image is cloned or someone takes a screenshot of it?

Content Credentials don't prevent anyone from taking a screenshot of an image, but they indicate when a file does not have historical data. A screenshot of an image wouldn’t include CAI metadata from the original file. 



## What information is embedded in an image? Is it every change or is it just a hash to each ingredient?

The information embedded is totally up to each implementor. 

## What is the normal dataflow? The flow when you make a new image? The flow when you take a photo? The flow when you alter the image? A diagram with boxes and arrows would be helpful.

I don't know if there is a "normal" flow as the standard is still so new compared to the speed of most standard organizations. However if you have an asset with C2PA and make modifications, an app should use the original as an ingredient and continue recording more details.

## How can I prove time, place, and content for an image without revealing my identity?

Identity is an optional piece in any Content Credential. For example, using Photoshop you can easily sign what was done (if any edits at all) without saying who did it. You would know Adobe was the signer and that was it. Regardless of the who, the cryptography ensures we know the date time.

## How do you prevent faking GPS location metadata? 

The location data is based on the implementor. People would trust the data based on the various "trust signals" they are given in the manifest, ie who signed it and when.

