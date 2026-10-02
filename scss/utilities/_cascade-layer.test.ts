/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, test } from "vitest";

import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { compileString } from "sass";

const configUrl = pathToFileURL(join(__dirname, "../_config.scss")).href;
const cascadeLayerUrl = pathToFileURL(join(__dirname, "_cascade-layer.scss")).href;
const nodeModules = join(__dirname, "../../node_modules");

function compile(scss: string) {
  return compileString(scss, { loadPaths: [nodeModules] });
}

describe("scss/utilities/_cascade-layer", () => {
  test("Top-level wrap mixin emits an @layer block", () => {
    const { css } = compile(/* scss */ `
@use "${cascadeLayerUrl}";

@include cascade-layer.wrap {
  selector {
    display: block;
  }
}
    `);

    expect(css).toContain("@layer");
    expect(css).toContain("selector");

    expect(css.indexOf("@layer")).toBeLessThan(css.indexOf("selector"));
  });

  test("Nested wrap includes do not produce a redundant inner @layer block", () => {
    const { css } = compile(/* scss */ `
@use "${cascadeLayerUrl}";

@include cascade-layer.wrap {
  @include cascade-layer.wrap {
    selector {
      display: block;
    }
  }
}
    `);

    const matches = css.match(/@layer/g);
    expect(matches).toHaveLength(1);
    expect(css).toContain("selector");
  });

  test("Cascade layer name is configurable via the config module", () => {
    const layerName = "test";

    const { css } = compile(/* scss */ `
@use "${configUrl}" with ($cascade-layer-name: "${layerName}");
@use "${cascadeLayerUrl}";

@include cascade-layer.wrap {
  selector {
    display: block;
  }
}
    `);

    expect(css).toContain(`@layer ${layerName}`);
  });

  test("Consecutive top-level wrap includes each emit their own @layer block", () => {
    const { css } = compile(/* scss */ `
@use "${cascadeLayerUrl}";

@include cascade-layer.wrap {
  first-selector {
    display: block;
  }
}

@include cascade-layer.wrap {
  second-selector {
    display: block;
  }
}
    `);

    const matches = css.match(/@layer/g);
    expect(matches).toHaveLength(2);
    expect(css).toContain("first-selector");
    expect(css).toContain("second-selector");
  });
});
