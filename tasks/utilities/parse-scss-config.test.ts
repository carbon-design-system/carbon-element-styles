/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, test } from "vitest";

import { parseScssConfig } from "./parse-scss-config";

test("Correctly parses $config SCSS map", () => {
  const config = parseScssConfig(/* scss */ `
$config: (
  option-a: "One",
  option-b: two,
  option-c: true,
  option-d: 4,
);
  `);

  expect(config).not.toBeUndefined();
  expect(Object.values(config!)).toHaveLength(4);

  expect(config!["option-a"]).toBe(`"One"`);
  expect(config!["option-b"]).toBe("two");
  expect(config!["option-c"]).toBe("true");
  expect(config!["option-d"]).toBe("4");
});

test("Ignores 'config.selector'", () => {
  const config = parseScssConfig(/* scss */ `
$config: (
  selector: 'div',
);
  `);

  expect(config).not.toBeUndefined();
  expect(Object.values(config!)).toHaveLength(0);
});
