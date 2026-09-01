/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, test } from "vitest";

import { join } from "node:path";
import { readdirSync } from "node:fs";

import { getBrowserCompatibilityForDemo } from "../../tasks/utilities/browser-compatibility.ts";

const demosBase = join(__dirname, "../../docs/content/elements");

export function usesNoDeprecatedCssFeatures(options: { element: string }) {
  const demosDir = join(demosBase, options.element, "_demos");

  const demoNames = readdirSync(demosDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => [e.name]);

  describe("No deprecated CSS features are used", () => {
    test.each(demoNames)("Demo: %s", async (demoName) => {
      const features = Object.values(
        (await getBrowserCompatibilityForDemo(options.element, demoName)).features,
      );

      const deprecatedFeatures = Object.values(features)
        .filter((feature) => feature.deprecated)
        .map((feature) => feature.label);

      expect(deprecatedFeatures).toHaveLength(0);
    });
  });
}
