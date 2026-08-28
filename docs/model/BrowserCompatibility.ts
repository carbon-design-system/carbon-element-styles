/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const browsers = ["chrome", "edge", "firefox", "safari"] as const;

export type BrowserCompatibility = {
  browsers: Record<
    (typeof browsers)[number],
    {
      date?: string;
      version?: string;
      isPrerelease?: boolean;
    }
  >;
  features: Record<
    string,
    {
      browsers: BrowserCompatibility["browsers"];
    }
  >;
};
