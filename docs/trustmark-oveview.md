---
id: trustmark-overview
title: TrustMark watermarking
---

TrustMark is an open-source universal watermarking system for images that:  

- Can encode, decode, and remove watermarks from images.
- Works with arbitrary resolution images.
- Has implementations in both Python (using PyTorch) and JavaScript (using ONNX).

:::info
For full technical details and help getting started with TrustMark, see [TrustMark - Quick start](trustmark/readme.md#quick-start).
:::

## Variants

TrustMark has three primary model variants, each with different characteristics.

Images encoded with one variant cannot be decoded with another variant, so you need to stick with the same variant throughout your pipeline.

- **Variant Q (Default)** Use in most cases, where you want a good balance between robustness and imperceptibility.  PSNR is 48-50 dB.
- **Variant P** - Use when image quality is the top priority. PSNR is 43-45 dB.
- **Variant C (Compact)** - Use if you need to minimize model size and can live with slightly lower visual quality. PSNR is 38-39 dB.

The general recommendation is to use either:
- Variant Q for most use cases
- Variant P when visual quality is paramount

### About PSNR

PSNR (Peak Signal-to-Noise Ratio) is a technical metric used to measure image quality, particularly when comparing an original image to a modified version (in this case, the watermarked image). PSNR is measured in decibels (dB), and higher values indicate better image quality:
- Values around 40+ dB typically indicate very good quality
- Values around 30 dB indicate acceptable quality
- Values below 20 dB usually indicate poor quality

