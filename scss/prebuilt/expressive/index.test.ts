/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe } from "vitest";

import { scssExposesFunctioningPublicStylesMixin } from "../../../tests/common/scss-exposes-functioning-public-styles-mixin";
import { stylesAreWrappedInCascadeLayer } from "../../../tests/common/styles-are-wrapped-in-cascade-layer";

describe("prebuilt/expressive", () => {
  describe("_elements", () => {
    scssExposesFunctioningPublicStylesMixin({
      module: "prebuilt/expressive/_elements",
    });
    stylesAreWrappedInCascadeLayer({
      module: "prebuilt/expressive/_elements",
    });
  });
  describe("_layout", () => {
    scssExposesFunctioningPublicStylesMixin({
      module: "prebuilt/expressive/_layout",
    });
  });
});
