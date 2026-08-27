/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as default_demo from "./default";
import * as with_caret from "./with-caret";
import * as without_caret from "./without-caret";
import * as alignment_start_start from "./alignment-start-start";
import * as alignment_start_center from "./alignment-start-center";
import * as alignment_start_end from "./alignment-start-end";
import * as alignment_center_start from "./alignment-center-start";
import * as alignment_center_end from "./alignment-center-end";
import * as alignment_end_start from "./alignment-end-start";
import * as alignment_end_center from "./alignment-end-center";
import * as alignment_end_end from "./alignment-end-end";

export const demos = new Map([
  ["default", default_demo],
  ["with-caret", with_caret],
  ["without-caret", without_caret],
  ["alignment-start-start", alignment_start_start],
  ["alignment-start-center", alignment_start_center],
  ["alignment-start-end", alignment_start_end],
  ["alignment-center-start", alignment_center_start],
  ["alignment-center-end", alignment_center_end],
  ["alignment-end-start", alignment_end_start],
  ["alignment-end-center", alignment_end_center],
  ["alignment-end-end", alignment_end_end],
]);
