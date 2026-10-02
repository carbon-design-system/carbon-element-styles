/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe } from "vitest";

import { scssExposesFunctioningPublicStylesMixin } from "../../../tests/common/scss-exposes-functioning-public-styles-mixin";
import { stylesAreWrappedInCascadeLayer } from "../../../tests/common/styles-are-wrapped-in-cascade-layer";

describe("prebuilt/productive", () => {
  describe("_elements", () => {
    scssExposesFunctioningPublicStylesMixin({
      module: "prebuilt/productive/_elements",
    });
    stylesAreWrappedInCascadeLayer({
      module: "prebuilt/productive/_elements",
    });
  });
  describe("_layout", () => {
    scssExposesFunctioningPublicStylesMixin({
      module: "prebuilt/productive/_layout",
    });
  });
});
