---
id: examples
title: JavaScript examples
---

JavaScript examples in [contentauth/c2pa-js-examples](https://github.com/contentauth/c2pa-js-examples) are mirrored from the [examples directory in the contentauth/c2pa-js repository](https://github.com/contentauth/c2pa-js/tree/main/examples).

:::note
As noted in the [overview](../getting-started/overview), the JavaScript library uses a number of modern JavaScript technologies such as WebAssembly (Wasm) and Web Workers. To understand the JavaScript examples, you should be familiar with these technologies, [TypeScript](https://www.typescriptlang.org/) and at least one bundler tool such as [Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org/), or [Vite](https://vitejs.dev/).
:::

Additionally, the JavaScript examples use TypeScript for type safety. 

## Examples

| Example | Tooling | UI framework | Notes |
|---------|------------------------|--------------|-------|
| [esm-imports](https://github.com/contentauth/c2pa-js/tree/main/examples/esm-imports) | None | None | The simplest example using vanilla JavaScript.|
| [minimal-ts-webpack](https://github.com/contentauth/c2pa-js/tree/main/examples/minimal-ts-webpack) |  [Webpack](https://webpack.js.org/) | None | Uses TypeScript. |
| [minimal-ts-rollup](https://github.com/contentauth/c2pa-js/tree/main/examples/minimal-ts-rollup) | [Rollup](https://rollupjs.org/)  | None | Uses TypeScript. |
| [minimal-ts-vite](https://github.com/contentauth/c2pa-js/tree/main/examples/minimal-ts-vite) | [Vite](https://vitejs.dev/)| None | Uses TypeScript.<br/>Includes multiple examples; see [below](#examples-in-minimal-ts-vite). |	
| [react-ts-vite](https://github.com/contentauth/c2pa-js/tree/main/examples/react-ts-vite) | [Vite](https://vitejs.dev/) | [React](https://react.dev/) | Uses TypeScript. |

## Examples in minimal-ts-vite

The `minimal-ts-vite` example directory contains these examples:
- active-manifest
- cdn
- check-provenance
- quick-start
- web-components


