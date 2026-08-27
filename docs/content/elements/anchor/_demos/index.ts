/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as default_demo from "./default";
import * as with_visited_styles from "./with-visited-styles";
import * as without_visited_styles from "./without-visited-styles";

export const demos = new Map([
  ["default", default_demo],
  ["with-visited-styles", with_visited_styles],
  ["without-visited-styles", without_visited_styles],
]);
