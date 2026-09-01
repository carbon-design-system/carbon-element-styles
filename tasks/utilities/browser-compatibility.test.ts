/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, test } from "vitest";

import { getBrowserCompatibilityForCss } from "./browser-compatibility";

function getParsedFeatureLabels(css: string) {
  return Object.values(getBrowserCompatibilityForCss(css).features).map((feature) => feature.label);
}

describe("Correctly parses CSS features", () => {
  test("Declaration", () => {
    const featureLabels = getParsedFeatureLabels(/* css */ `
      div {
        display: inline-block;
        background-color: var(--custom-property);
        outline-offset: 0.125rem;
      }
    `);

    expect(featureLabels).toContain("display");
    expect(featureLabels).toContain("background-color");
    expect(featureLabels).toContain("outline-offset");
  });

  test("Function", () => {
    const featureLabels = getParsedFeatureLabels(/* css */ `
      div {
        background-color: var(--custom-property);
        padding: calc(var(--padding) * 0.5);
        inset-inline-start: cos(var(--alpha))
      }
    `);

    expect(featureLabels).toContain("var()");
    expect(featureLabels).toContain("calc()");
    expect(featureLabels).toContain("cos()");
  });

  test("Selector", () => {
    const featureLabels = getParsedFeatureLabels(/* css */ `
      div::before {}
      div:has(p) {}
      div:has(p:is([data-test])) {}
    `);

    expect(featureLabels).toContain("::before");
    expect(featureLabels).toContain(":has");
    expect(featureLabels).toContain(":is");
  });

  test("Length", () => {
    const featureLabels = getParsedFeatureLabels(/* css */ `
      div {
        font-size: 2rem;
        margin-block: 2lh;
        inline-size: 50vi;
        max-inline-size: 80ch;
        block-size: 100cqb;
        max-block-size: 50dvb;
      }
    `);

    expect(featureLabels).toContain("rem");
    expect(featureLabels).toContain("lh");
    expect(featureLabels).toContain("vi");
    expect(featureLabels).toContain("ch");
    expect(featureLabels).toContain("cqb");
    expect(featureLabels).toContain("dbv");
  });

  test("@media", () => {
    const featureLabels = getParsedFeatureLabels(/* css */ `
      @media (prefers-color-scheme: dark), (height >= 200px) and (orientation: landscape) {}
    `);

    expect(featureLabels).toContain("@media (height)");
    expect(featureLabels).toContain("@media (orientation)");
    expect(featureLabels).toContain("@media (prefers-color-scheme)");
  });

  test("@container", () => {
    const featureLabels = getParsedFeatureLabels(/* css */ `
      @container style(color: #0f62fe) {}
      @container style(--theme: dark) {}
      @container scroll-state(scrollable: top) {}
    `);

    expect(featureLabels).toContain("@container");
    expect(featureLabels).toContain("@container style(--*)");
    expect(featureLabels).toContain("@container scroll-state()");
  });

  test("@supports", () => {
    const featureLabels = getParsedFeatureLabels(/* css */ `
      @supports (-moz-appearance: none) {}
    `);

    expect(featureLabels).toContain("@supports");
  });

  test("@keyframes", () => {
    const featureLabels = getParsedFeatureLabels(/* css */ `
      @keyframes fade-in {}
    `);

    expect(featureLabels).toContain("@keyframes");
  });

  test("@starting-style", () => {
    const featureLabels = getParsedFeatureLabels(/* css */ `
      div {
        @starting-style {
          opacity: 0;
        }
      }
    `);

    expect(featureLabels).toContain("@starting-style");
  });
});
