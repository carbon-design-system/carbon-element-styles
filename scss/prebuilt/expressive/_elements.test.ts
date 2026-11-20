/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, test } from "vitest";

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const source = readFileSync(join(__dirname, "_elements.scss"), "utf-8");

// Public elements only; directories prefixed with `_` are excluded
const elements = readdirSync(join(__dirname, "../../elements"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
  .map((entry) => entry.name)
  .sort();

describe("Expressive prebuilt includes all public elements", () => {
  test.each(elements.map((e) => [e]))("%s", (element) => {
    const isEmitted = new RegExp(`@include\\s+${element}\\.styles\\b`).test(source);

    expect(isEmitted).toBeTruthy();
  });
});
