/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CustomProperty, Declaration, transform, UnparsedProperty } from "lightningcss";
import bcd, { type SupportBlock } from "@mdn/browser-compat-data" with { type: "json" };

import { browsers, type BrowserCompatibility } from "../../docs/model/BrowserCompatibility.ts";

type ParsedFeatureResult = { key: string; feature: BrowserCompatibility["features"][0] } | null;

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
        browsers: parseBrowserStatus(propertyCompat.__compat?.support),
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
