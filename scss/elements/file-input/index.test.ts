/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe } from "vitest";

import { scssExposesFunctioningPublicStylesMixin } from "../../../tests/common/scss-exposes-functioning-public-styles-mixin";
import { usesNoDeprecatedCssFeatures } from "../../../tests/common/uses-no-deprecated-css-features";

describe("file-input", () => {
  scssExposesFunctioningPublicStylesMixin({
    module: "elements/file-input",
  });

  usesNoDeprecatedCssFeatures({ element: "file-input" });
});
