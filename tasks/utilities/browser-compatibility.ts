/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  LengthValue,
  transform,
  type ContainerRule,
  type CustomProperty,
  type Declaration,
  type Function,
  type MediaCondition,
  type MediaRule,
  type QueryFeatureFor_MediaFeatureId,
  type Selector,
  type SupportsRule,
  type UnparsedProperty,
  type Variable,
} from "lightningcss";
import bcd, { Identifier, type SupportBlock } from "@mdn/browser-compat-data" with { type: "json" };

import { browsers, type BrowserCompatibility } from "../../docs/model/BrowserCompatibility.ts";

type ParsedFeatureResult = {
  id: string;
  feature: BrowserCompatibility["features"][0];
};

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

function parsedFeatureResult(
  type: ParsedFeatureResult["feature"]["type"],
  features: [label: string, compat: Identifier][],
): ParsedFeatureResult[] {
  const results: ParsedFeatureResult[] = [];

  for (const [label, compat] of features) {
    if (compat) {
      results.push({
        id: `${type}_${label}`,
        feature: {
          label,
          type: type,
          browsers: parseBrowserStatus(compat.__compat?.support),
        },
      });
    }
  }

  return results;
}

function parseDeclaration(declaration: Declaration): ParsedFeatureResult[] {
  let property = declaration.property as string;

  if (property === "unparsed") {
    property = (declaration.value as UnparsedProperty).propertyId.property;
  }

  if (property === "custom") {
    property = (declaration.value as CustomProperty).name;
  }

  return parsedFeatureResult("property", [[property, bcd.css.properties[property]]]);
}

function parseFunction(func: Function): ParsedFeatureResult[] {
  return parsedFeatureResult("function", [[`${func.name}()`, bcd.css.types[func.name]]]);
}

function parseVariable(_: Variable): ParsedFeatureResult[] {
  return parsedFeatureResult("function", [["var()", bcd.css.types.var]]);
}

function parseSelector(selector: Selector): ParsedFeatureResult[] {
  const pseudoClass = selector.find((s) => s.type === "pseudo-class");

  if (pseudoClass) {
    return parsedFeatureResult("selector", [
      [`:${pseudoClass.kind}`, bcd.css.selectors[pseudoClass.kind]],
    ]);
  }

  const pseudoElement = selector.find((s) => s.type === "pseudo-element");

  if (pseudoElement) {
    return parsedFeatureResult("selector", [
      [`::${pseudoElement.kind}`, bcd.css.selectors[pseudoElement.kind]],
    ]);
  }

  return [];
}

function parseLength(length: LengthValue): ParsedFeatureResult[] {
  return parsedFeatureResult("length", [[length.unit, bcd.css.types.length[length.unit]]]);
}

function parseMediaRule(mediaRule: MediaRule): ParsedFeatureResult[] {
  const [query] = mediaRule.query.mediaQueries;

  const names = (
    (query.condition as { conditions?: MediaCondition[] }).conditions ?? [query.condition]
  )
    .filter((condition) => condition && condition.type === "feature")
    .map((condition) => (condition as { value: QueryFeatureFor_MediaFeatureId }).value.name);

  return parsedFeatureResult(
    "at-rule",
    names.map((name) => [`@media (${name})`, bcd.css["at-rules"].media[name]]),
  );
}

function parseContainerRule(containerRule: ContainerRule): ParsedFeatureResult[] {
  const { condition } = containerRule;

  if (
    condition?.type === "style" &&
    condition.value.type === "declaration" &&
    condition.value.value.property === "custom"
  ) {
    return parsedFeatureResult("at-rule", [
      ["@container style(--*)", bcd.css["at-rules"].container.style_queries_for_custom_properties],
    ]);
  }

  if (condition?.type === "scroll-state") {
    return parsedFeatureResult("at-rule", [
      ["@container scroll-state()", bcd.css["at-rules"].container["scroll-state_queries"]],
    ]);
  }

  return parsedFeatureResult("at-rule", [["@container", bcd.css["at-rules"].container]]);
}

function parseSupportsRule(_: SupportsRule): ParsedFeatureResult[] {
  return parsedFeatureResult("at-rule", [["@supports", bcd.css["at-rules"].supports]]);
}

export function getBrowserCompatibilityForCss(css: string): BrowserCompatibility {
  const featureResults: ParsedFeatureResult[] = [];

  transform({
    filename: "temp.browser-compatibility.css",
    code: Buffer.from(css),
    visitor: {
      Declaration(declaration) {
        featureResults.push(...parseDeclaration(declaration));
      },
      Function(func) {
        featureResults.push(...parseFunction(func));
      },
      Variable(variable) {
        featureResults.push(...parseVariable(variable));
      },
      Selector(selector) {
        featureResults.push(...parseSelector(selector));
      },
      Length(length) {
        featureResults.push(...parseLength(length));
      },
      Rule: {
        media(rule) {
          featureResults.push(...parseMediaRule(rule.value));
        },
        container(rule) {
          featureResults.push(...parseContainerRule(rule.value));
        },
        supports(rule) {
          featureResults.push(...parseSupportsRule(rule.value));
        },
      },
    },
  });

  const features: BrowserCompatibility["features"] = featureResults.reduce(
    (acc, curr) => (Object.hasOwn(acc, curr.id) ? acc : { ...acc, [curr.id]: curr.feature }),
    {},
  );

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
