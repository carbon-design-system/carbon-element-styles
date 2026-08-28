/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ContainerRule,
  CustomProperty,
  Declaration,
  Function,
  MediaRule,
  Selector,
  SupportsRule,
  transform,
  UnparsedProperty,
} from "lightningcss";
import bcd, { type SupportBlock } from "@mdn/browser-compat-data" with { type: "json" };

import { browsers, type BrowserCompatibility } from "../../docs/model/BrowserCompatibility.ts";

type ParsedFeatureResult = {
  key: string;
  feature: BrowserCompatibility["features"][0];
} | null;

function parseBrowserStatus(support: SupportBlock | undefined): BrowserCompatibility["browsers"] {
  return Object.fromEntries(
    browsers.map((browser) => {
      const status: BrowserCompatibility["browsers"][(typeof browsers)[number]] = {
        date: undefined,
        version: undefined,
        isPrerelease: undefined,
      };

      if (support) {
        const { releases } = bcd.browsers[browser];
        const browserSupport = support[browser];

        if (browserSupport) {
          const { version_added } = Array.isArray(browserSupport)
            ? browserSupport[0]
            : browserSupport;

          if (version_added === false) {
            status.version = false;
            status.date = false;
            status.isPrerelease = false;
          } else if (version_added) {
            const version = version_added.startsWith("≤") ? version_added.slice(1) : version_added;

            const release = releases[version];

            if (release) {
              status.version = version;
              status.date = release.release_date;
              status.isPrerelease = !["retired", "current"].includes(release.status);
            }
          }
        }
      }

      return [browser, status] as [
        (typeof browsers)[number],
        BrowserCompatibility["browsers"][(typeof browsers)[number]],
      ];
    }),
  ) as BrowserCompatibility["browsers"];
}

function parseDeclaration(declaration: Declaration): ParsedFeatureResult {
  let property = declaration.property as string;

  if (property === "unparsed") {
    property = (declaration.value as UnparsedProperty).propertyId.property;
  }

  if (property === "custom") {
    property = (declaration.value as CustomProperty).name;
  }

  const propertyCompat = bcd.css.properties[property];

  if (propertyCompat) {
    return {
      key: property,
      feature: {
        type: "property",
        browsers: parseBrowserStatus(propertyCompat.__compat?.support),
      },
    };
  }

  return null;
}

function parseFunction(func: Function): ParsedFeatureResult {
  const { name } = func;

  const compat = bcd.css.types[name];

  if (compat) {
    return {
      key: `${name}()`,
      feature: {
        type: "function",
        browsers: parseBrowserStatus(compat.__compat?.support),
      },
    };
  }

  return null;
}

function parseSelector(selector: Selector): ParsedFeatureResult {
  const pseudoClass = selector.find((s) => s.type === "pseudo-class");

  if (pseudoClass) {
    const compat = bcd.css.selectors[pseudoClass.kind];

    if (compat) {
      return {
        key: `:${pseudoClass.kind}`,
        feature: {
          type: "selector",
          browsers: parseBrowserStatus(compat.__compat?.support),
        },
      };
    }
  }

  const pseudoElement = selector.find((s) => s.type === "pseudo-element");

  if (pseudoElement) {
    const compat = bcd.css.selectors[pseudoElement.kind];

    if (compat) {
      return {
        key: `::${pseudoElement.kind}`,
        feature: {
          type: "selector",
          browsers: parseBrowserStatus(compat.__compat?.support),
        },
      };
    }
  }

  return null;
}

function parseMediaRule(_: MediaRule): ParsedFeatureResult {
  const compat = bcd.css["at-rules"].media;

  if (compat) {
    return {
      key: `@media`,
      feature: {
        type: "at-rule",
        browsers: parseBrowserStatus(compat.__compat?.support),
      },
    };
  }

  return null;
}

function parseContainerRule(_: ContainerRule): ParsedFeatureResult {
  const compat = bcd.css["at-rules"].container;

  if (compat) {
    return {
      key: `@container`,
      feature: {
        type: "at-rule",
        browsers: parseBrowserStatus(compat.__compat?.support),
      },
    };
  }

  return null;
}

function parseSupportsRule(_: SupportsRule): ParsedFeatureResult {
  const compat = bcd.css["at-rules"].supports;

  if (compat) {
    return {
      key: `@supports`,
      feature: {
        type: "at-rule",
        browsers: parseBrowserStatus(compat.__compat?.support),
      },
    };
  }

  return null;
}

export function getBrowserCompatibilityForCss(css: string): BrowserCompatibility {
  const features: BrowserCompatibility["features"] = {};

  transform({
    filename: "temp.browser-compatibility.css",
    code: Buffer.from(css),
    visitor: {
      Declaration(declaration) {
        const feature = parseDeclaration(declaration);
        if (feature) features[feature.key] = feature.feature;
      },
      Function(func) {
        const feature = parseFunction(func);
        if (feature) features[feature.key] = feature.feature;
      },
      Selector(selector) {
        const feature = parseSelector(selector);
        if (feature) features[feature.key] = feature.feature;
      },
      Rule: {
        media(rule) {
          const feature = parseMediaRule(rule.value);
          if (feature) features[feature.key] = feature.feature;
        },
        container(rule) {
          const feature = parseContainerRule(rule.value);
          if (feature) features[feature.key] = feature.feature;
        },
        supports(rule) {
          const feature = parseSupportsRule(rule.value);
          if (feature) features[feature.key] = feature.feature;
        },
      },
    },
  });

  return {
    browsers: Object.fromEntries(
      browsers.map((browser) => {
        const status: BrowserCompatibility["browsers"][(typeof browsers)[number]] = {
          date: undefined,
          version: undefined,
          isPrerelease: undefined,
        };

        for (const feature of Object.values(features)) {
          const browserSupport = feature.browsers[browser];
          const featureMinimumBrowserDate = browserSupport.date
            ? new Date(browserSupport.date).getTime()
            : Infinity;
          const currentMinimumBrowserDate = status.date
            ? new Date(status.date).getTime()
            : -Infinity;

          if (featureMinimumBrowserDate > currentMinimumBrowserDate) {
            status.date = browserSupport.date;
            status.version = browserSupport.version;
            status.isPrerelease = browserSupport.isPrerelease;
          }
        }

        return [browser, status] as [
          (typeof browsers)[number],
          BrowserCompatibility["browsers"][(typeof browsers)[number]],
        ];
      }),
    ),
    features,
  } as BrowserCompatibility;
}
