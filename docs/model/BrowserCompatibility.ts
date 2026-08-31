/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const browsers = ["chrome", "edge", "firefox", "safari"] as const;
export const browserNames: Record<(typeof browsers)[number], string> = {
  chrome: "Chrome",
  edge: "Edge",
  firefox: "Firefox",
  safari: "Safari",
};

export type BrowserCompatibility = {
  browsers: Record<
    (typeof browsers)[number],
    {
      date?: string | false;
      version?: string | false;
      isPrerelease?: boolean | false;
    }
  >;
  features: Record<
    string,
    {
      label: string;
      type: "property" | "function" | "selector" | "at-rule";
      browsers: BrowserCompatibility["browsers"];
    }
  >;
};
