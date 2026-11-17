/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, test } from "vitest";

import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

import type { NavigationItem } from "../docs/model/NavigationItem.ts";
import { getDemoNames } from "../tasks/utilities/demo-files.ts";

const elementsDir = join(__dirname, "../docs/content/elements");

const elements = readdirSync(elementsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => existsSync(join(elementsDir, name, "_demos")));

describe("Navigation item IDs match the demo files", () => {
  test.each(elements.map((e) => [e]))("%s", async (element) => {
    const navigationItem = (await import(`../docs/content/elements/${element}/index.ts`))
      .default as NavigationItem;

    const itemIds = (navigationItem.items ?? []).map((item) => item.id).sort();
    const demoNames = getDemoNames(element);

    const itemsWithoutDemoFile = itemIds.filter((id) => !demoNames.includes(id));
    const demoFilesWithoutNavigationItem = demoNames.filter((name) => !itemIds.includes(name));

    expect(itemsWithoutDemoFile).toHaveLength(0);
    expect(demoFilesWithoutNavigationItem).toHaveLength(0);
  });
});
