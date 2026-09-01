/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, test } from "vitest";

import { getBanner, supportedFileTypes, validateBanner } from "./banner";

const currentYear = new Date().getFullYear();
const pastYear = new Date().getFullYear() - 2;

describe.each(supportedFileTypes)(`fileType: "%s"`, (fileType) => {
  describe("Generation", () => {
    test("year = undefined → current year", () => {
      const banner = getBanner({ fileType, year: undefined });

      expect(banner).toContain(currentYear);
      expect(banner).not.toContain(",");
    });

    test("year = <current-year> → current year", () => {
      const banner = getBanner({ fileType, year: currentYear });

      expect(banner).toContain(currentYear);
      expect(banner).not.toContain(",");
    });

    test("year = <past-year> → year range", () => {
      const banner = getBanner({ fileType, year: pastYear });

      expect(banner).toContain(`${pastYear}, ${currentYear}`);
    });

    test("year = null → no year", () => {
      const banner = getBanner({ fileType: "js", year: null });
      const copyrightLine = banner.split("\n")[1];

      expect(copyrightLine).not.toMatch(/\d{4}/);
      expect(banner).not.toContain(",");
    });
  });

  describe("Validation", () => {
    test("Accepts a current year banner", () => {
      const banner = getBanner({ fileType });
      expect(validateBanner(banner, { fileType })).toBeTruthy();
    });

    test("Accepts a past year banner", () => {
      const banner = getBanner({ fileType, year: pastYear });
      expect(validateBanner(banner, { fileType })).toBeTruthy();
    });

    test("Rejects an empty banner", () => {
      expect(validateBanner("", { fileType })).toBeFalsy();
    });

    test("Rejects a no year banner", () => {
      const banner = getBanner({ fileType, year: null });
      expect(validateBanner(banner, { fileType })).toBeFalsy();
    });

    test("Rejects a non-numeric year banner", () => {
      const banner = getBanner({ fileType }).replace(/\d{4}/, "ABCD");
      expect(banner).toContain("ABCD");
      expect(validateBanner(banner, { fileType })).toBeFalsy();
    });

    describe("Rejects a banner with tampered lines", () => {
      test.each([1, 2, 3, 4])("Line %s", (i) => {
        const banner = getBanner({ fileType }).split("\n");
        banner[i] = `_${banner[i]}*`;

        expect(validateBanner(banner.join("\n"), { fileType })).toBeFalsy();
      });
    });
  });
});
