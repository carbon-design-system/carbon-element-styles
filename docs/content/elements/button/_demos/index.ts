/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as default_demo from "./default";
import * as primary from "./primary";
import * as secondary from "./secondary";
import * as tertiary from "./tertiary";
import * as ghost from "./ghost";
import * as danger__primary from "./danger--primary";
import * as danger__tertiary from "./danger--tertiary";
import * as danger__ghost from "./danger--ghost";

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
