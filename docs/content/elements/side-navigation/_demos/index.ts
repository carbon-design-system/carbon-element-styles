/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as default_demo from "virtual:element-demos/side-navigation/default";
import * as alignment_start from "virtual:element-demos/side-navigation/alignment-start";
import * as alignment_end from "virtual:element-demos/side-navigation/alignment-end";

export const demos = new Map([
  ["default", default_demo],
  ["alignment-start", alignment_start],
  ["alignment-end", alignment_end],
]);
