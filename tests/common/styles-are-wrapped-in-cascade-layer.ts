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

export function stylesAreWrappedInCascadeLayer(options: { module: string }) {
  test("Styles are wrapped in a cascade layer", () => {
    const url = pathToFileURL(join(__dirname, "../../scss", options.module));

    const scss = /* scss*/ `
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
}
