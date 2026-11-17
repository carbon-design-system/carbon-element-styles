/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as default_demo from "virtual:element-demos/tooltip/default";
import * as alignment_start_start from "virtual:element-demos/tooltip/alignment-start-start";
import * as alignment_start_center from "virtual:element-demos/tooltip/alignment-start-center";
import * as alignment_start_end from "virtual:element-demos/tooltip/alignment-start-end";
import * as alignment_center_start from "virtual:element-demos/tooltip/alignment-center-start";
import * as alignment_center_end from "virtual:element-demos/tooltip/alignment-center-end";
import * as alignment_end_start from "virtual:element-demos/tooltip/alignment-end-start";
import * as alignment_end_center from "virtual:element-demos/tooltip/alignment-end-center";
import * as alignment_end_end from "virtual:element-demos/tooltip/alignment-end-end";

export const demos = new Map([
  ["default", default_demo],
  ["alignment-start-start", alignment_start_start],
  ["alignment-start-center", alignment_start_center],
  ["alignment-start-end", alignment_start_end],
  ["alignment-center-start", alignment_center_start],
  ["alignment-center-end", alignment_center_end],
  ["alignment-end-start", alignment_end_start],
  ["alignment-end-center", alignment_end_center],
  ["alignment-end-end", alignment_end_end],
]);
