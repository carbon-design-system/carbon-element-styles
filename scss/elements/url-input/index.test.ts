/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { scssExposesFunctioningPublicStylesMixin } from "../../../tests/common/scss-exposes-functioning-public-styles-mixin";
import { stylesAreWrappedInCascadeLayer } from "../../../tests/common/styles-are-wrapped-in-cascade-layer";
import { usesNoDeprecatedCssFeatures } from "../../../tests/common/uses-no-deprecated-css-features";

scssExposesFunctioningPublicStylesMixin({
  module: "elements/url-input",
});

stylesAreWrappedInCascadeLayer({
  module: "elements/url-input",
});

usesNoDeprecatedCssFeatures({ element: "url-input" });
