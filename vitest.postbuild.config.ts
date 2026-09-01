/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineConfig } from "vitest/config";
import baseConfig from "./vitest.config.ts";

export default defineConfig({
  test: {
    ...baseConfig.test,
    include: ["**/*.postbuild.test.[jt]s"],
    exclude: undefined,
  },
});
