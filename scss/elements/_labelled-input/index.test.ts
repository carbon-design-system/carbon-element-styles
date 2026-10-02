/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { scssExposesFunctioningPublicStylesMixin } from "../../../tests/common/scss-exposes-functioning-public-styles-mixin";
import { stylesAreWrappedInCascadeLayer } from "../../../tests/common/styles-are-wrapped-in-cascade-layer";

scssExposesFunctioningPublicStylesMixin({
  module: "elements/_labelled-input",
});

stylesAreWrappedInCascadeLayer({
  module: "elements/_labelled-input",
});
