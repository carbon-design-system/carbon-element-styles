/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as default_demo from "./default";
import * as block from "./block";
import * as inline from "./inline";
import * as thick from "./thick";
import * as thin from "./thin";

export const demos = new Map([
  ["default", default_demo],
  ["block", block],
  ["inline", inline],
  ["thick", thick],
  ["thin", thin],
]);
