/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as default_demo from "./default";
import * as line from "./line";
import * as contained from "./contained";
import * as content_switcher from "./content-switcher";
import * as content_switcher__low_contrast from "./content-switcher--low-contrast";

export const demos = new Map([
  ["default", default_demo],
  ["line", line],
  ["contained", contained],
  ["content-switcher", content_switcher],
  ["content-switcher--low-contrast", content_switcher__low_contrast],
]);
