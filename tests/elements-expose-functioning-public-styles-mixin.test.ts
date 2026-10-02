/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, test } from "vitest";

import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { readdirSync } from "node:fs";
import { compileString } from "sass";

const scssRoot = join(__dirname, "../scss");
const nodeModules = join(__dirname, "../node_modules");

function discoverModules(): string[] {
  const modules: string[] = [];

  // scss/elements/*/index.scss
  for (const entry of readdirSync(join(scssRoot, "elements"), { withFileTypes: true })) {
    if (entry.isDirectory()) {
      modules.push(`elements/${entry.name}`);
    }
  }

  // scss/prebuilt/*/_elements.scss, scss/prebuilt/*/_layout.scss
  for (const entry of readdirSync(join(scssRoot, "prebuilt"), { withFileTypes: true })) {
    if (entry.isDirectory()) {
      modules.push(`prebuilt/${entry.name}/_elements`);
      modules.push(`prebuilt/${entry.name}/_layout`);
    }
  }

  return modules;
}

describe("All elements expose a functioning public `styles` mixin", () => {
  test.each(discoverModules().map((m) => [m]))("%s", (module) => {
    const url = pathToFileURL(join(scssRoot, module));

    const scss = /* scss */ `
@use "${url}" as module;

selector {
  @include module.styles;
}
    `;

    expect(() =>
      compileString(scss, {
        loadPaths: [nodeModules],
      }),
    ).not.toThrow();
  });
});
