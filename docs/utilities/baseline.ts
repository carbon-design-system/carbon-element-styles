/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BrowserCompatibility } from "../../docs/model/BrowserCompatibility";

const highThreshold = (() => {
  const now = new Date();
  now.setMonth(now.getMonth() - 30);

  return now.getTime();
})();

export function getBaselineStatus(
  support?: BrowserCompatibility["browsers"],
): "high" | "low" | false | undefined {
  if (!support) {
    return undefined;
  }

  const browsers = Object.values(support);

  if (
    browsers.some(
      (status) =>
        status.date === undefined ||
        status.isPrerelease === undefined ||
        status.version === undefined,
    )
  ) {
    return undefined;
  }

  if (
    browsers.some(
      (status) => status.date === false || status.version === false || status.isPrerelease === true,
    )
  ) {
    return false;
  }

  const newestMinimumRequired = browsers
    .map((browser) => new Date(browser.date as string).getTime())
    .toSorted((a, b) => b - a)
    .at(0)!;

  if (newestMinimumRequired < highThreshold) {
    return "high";
  }

  return "low";
}
