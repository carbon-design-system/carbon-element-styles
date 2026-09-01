/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, test } from "vitest";

import { parseScssDoc } from "./parse-scss-doc";

test("Correctly parses SCSS doc block comment", () => {
  const parameters = parseScssDoc(/* scss */ `
/// @group test
/// @param {Selector} target ['div']
/// @param {Bool} emit-focus-styles [true]
/// @param {Map} colors [()]
@mixin styles() {}
  `);

  expect(parameters).not.toBeNull();
  expect(parameters).toHaveLength(3);

  expect(parameters?.at(0)?.name).toBe("target");
  expect(parameters?.at(0)?.type).toBe("Selector");
  expect(parameters?.at(0)?.default).toBe("'div'");

  expect(parameters?.at(1)?.name).toBe("emit-focus-styles");
  expect(parameters?.at(1)?.type).toBe("Bool");
  expect(parameters?.at(1)?.default).toBe("true");

  expect(parameters?.at(2)?.name).toBe("colors");
  expect(parameters?.at(2)?.type).toBe("Map");
  expect(parameters?.at(2)?.default).toBe("()");
});

test("Trims 'config.' prefix", () => {
  const parameters = parseScssDoc(/* scss */ `
/// @group test
/// @param {Map} config [()]
/// @param {Bool} config.emit-focus-styles [true]
@mixin styles() {}
  `);

  expect(parameters).not.toBeNull();
  expect(parameters).toHaveLength(1);

  expect(parameters?.at(0)?.name).toBe("emit-focus-styles");
  expect(parameters?.at(0)?.type).toBe("Bool");
  expect(parameters?.at(0)?.default).toBe("true");
});

test("Wraps unions into newlines", () => {
  const parameters = parseScssDoc(/* scss */ `
/// @group test
/// @param {'primary' | 'secondary'} kind ['primary']
@mixin styles() {}
  `);

  expect(parameters).not.toBeNull();
  expect(parameters).toHaveLength(1);

  expect(parameters?.at(0)?.name).toBe("kind");
  expect(parameters?.at(0)?.type).toBe("'primary'\n| 'secondary'");
  expect(parameters?.at(0)?.default).toBe("'primary'");
});
