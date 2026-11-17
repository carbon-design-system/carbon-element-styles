/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as default_demo from "virtual:element-demos/table/default";
import * as dataTable from "virtual:element-demos/table/data-table";
import * as structuredList from "virtual:element-demos/table/structured-list";
import * as structuredListFlush from "virtual:element-demos/table/structured-list--flush";

export const demos = new Map([
  ["default", default_demo],
  ["data-table", dataTable],
  ["structured-list", structuredList],
  ["structured-list--flush", structuredListFlush],
]);
