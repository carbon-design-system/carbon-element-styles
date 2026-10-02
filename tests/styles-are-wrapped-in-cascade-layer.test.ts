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

  // scss/prebuilt/*/_elements.scss
  for (const entry of readdirSync(join(scssRoot, "prebuilt"), { withFileTypes: true })) {
    if (entry.isDirectory()) {
      modules.push(`prebuilt/${entry.name}/_elements`);
    }
  }

  return modules;
}

describe("All element styles are wrapped in a cascade layer", () => {
  test.each(discoverModules().map((m) => [m]))("%s", (module) => {
    const url = pathToFileURL(join(scssRoot, module));

    const scss = /* scss */ `
  @use "${url}" as module;

  selector {
    @include module.styles;
  }
      `;

    const { css } = compileString(scss, {
      loadPaths: [nodeModules],
    });

    const matches = css.match(/@layer/g);
    expect(matches).toHaveLength(1);
    expect(css.indexOf("@layer")).toBeLessThan(css.indexOf("selector"));
  });
});
