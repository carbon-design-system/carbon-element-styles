/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as default_demo from "./default";
import * as subtle from "./subtle";
import * as strong from "./strong";

export const demos = new Map([
  ["default", default_demo],
  ["subtle", subtle],
  ["strong", strong],
]);
