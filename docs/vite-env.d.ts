/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/// <reference types="vite/client" />

declare module "*.html" {
  const content: string;
  export default content;
}

declare module "virtual:docs-inventory" {
  const inventory: Record<string, unknown>;
  export = inventory;
}

declare module "virtual:scss-docs/*" {
  import type { ScssDoc } from "@/model/ScssDoc";
  const scssDoc: ScssDoc;
  export default scssDoc;
}

declare module "virtual:scss-config/*" {
  const scssConfig: Record<string, string> | undefined;
  export default scssConfig;
}

declare module "virtual:browser-compatibility/*" {
  import type { BrowserCompatibility } from "@/model/BrowserCompatibility";
  const browserCompatibility: BrowserCompatibility;
  export default browserCompatibility;
}

declare module "virtual:element-demo/*" {
  import type { BrowserCompatibility } from "@/model/BrowserCompatibility";
  export const css: string;
  export const html: string;
  export const scssConfig: Record<string, string> | undefined;
  export const browserCompatibility: BrowserCompatibility;
  export const setup: ((frame: ShadowRoot) => void) | undefined;
}

declare module "virtual:element-demos/*" {
  import type { BrowserCompatibility } from "@/model/BrowserCompatibility";
  const demos: Map<
    string,
    {
      css: string;
      html: string;
      scssConfig: Record<string, string> | undefined;
      browserCompatibility: BrowserCompatibility;
      setup: ((frame: ShadowRoot) => void) | undefined;
    }
  >;
  export default demos;
}
