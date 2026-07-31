/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, test } from "vitest";

import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { compileString } from "sass";

const nodeModules = join(__dirname, "../../node_modules");

export function scssExposesFunctioningPublicStylesMixin(options: { module: string }) {
  test("SCSS exposes functioning public styles mixin", () => {
    const url = pathToFileURL(join(__dirname, "../../scss", options.module));

    const scss = /* scss*/ `
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
}
