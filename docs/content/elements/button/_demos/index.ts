/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as default_demo from "virtual:element-demos/button/default";
import * as primary from "virtual:element-demos/button/primary";
import * as secondary from "virtual:element-demos/button/secondary";
import * as tertiary from "virtual:element-demos/button/tertiary";
import * as ghost from "virtual:element-demos/button/ghost";
import * as danger__primary from "virtual:element-demos/button/danger--primary";
import * as danger__tertiary from "virtual:element-demos/button/danger--tertiary";
import * as danger__ghost from "virtual:element-demos/button/danger--ghost";

export const demos = new Map([
  ["default", default_demo],
  ["primary", primary],
  ["secondary", secondary],
  ["tertiary", tertiary],
  ["ghost", ghost],
  ["danger--primary", danger__primary],
  ["danger--tertiary", danger__tertiary],
  ["danger--ghost", danger__ghost],
]);
