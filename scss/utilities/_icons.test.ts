/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, test } from "vitest";

import { join } from "node:path";
import { readFile } from "node:fs/promises";

import { icons } from "../../tasks/_icons";

describe("A SCSS mixin is available for each icon defined in _icons.ts", async () => {
  const content = await readFile(join(__dirname, "../../scss/utilities/_icons.scss"), "utf-8");

  test.each(icons)("%s", (icon) => {
    const regex = new RegExp(String.raw`^@mixin ${RegExp.escape(icon)}\(\$args\.\.\.\) {$`, "gm");

    expect(content.match(regex)).toBeTruthy();
  });
});
