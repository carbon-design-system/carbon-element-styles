/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe } from "vitest";

import { scssExposesFunctioningPublicStylesMixin } from "../../../tests/common/scss-exposes-functioning-public-styles-mixin";

describe("text-area", () => {
  scssExposesFunctioningPublicStylesMixin({
    module: "elements/text-area",
  });
});
