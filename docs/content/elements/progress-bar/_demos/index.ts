/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as default_demo from "virtual:element-demos/progress-bar/default";
import * as block from "virtual:element-demos/progress-bar/block";
import * as inline from "virtual:element-demos/progress-bar/inline";
import * as thick from "virtual:element-demos/progress-bar/thick";
import * as thin from "virtual:element-demos/progress-bar/thin";

export const demos = new Map([
  ["default", default_demo],
  ["block", block],
  ["inline", inline],
  ["thick", thick],
  ["thin", thin],
]);
