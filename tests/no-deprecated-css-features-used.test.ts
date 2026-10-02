/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, test } from "vitest";

import { join } from "node:path";
import { existsSync, readdirSync } from "node:fs";

import { getBrowserCompatibilityForDemo } from "../tasks/utilities/browser-compatibility.ts";

const scssRoot = join(__dirname, "../scss");
const demosBase = join(__dirname, "../docs/content/elements");

const elements = readdirSync(join(scssRoot, "elements"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => existsSync(join(demosBase, name, "_demos")));

describe("No deprecated CSS features are used", () => {
  describe.each(elements.map((e) => [e]))("%s", (element) => {
    const demosDir = join(demosBase, element, "_demos");

    const demoNames = readdirSync(demosDir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => [e.name]);

    test.each(demoNames)("Demo: %s", async (demoName) => {
      const features = Object.values(
        (await getBrowserCompatibilityForDemo(element, demoName)).features,
      );

      const deprecatedFeatures = Object.values(features)
        .filter((feature) => feature.deprecated)
        .map((feature) => feature.label);

      expect(deprecatedFeatures).toHaveLength(0);
    });
  });
});
