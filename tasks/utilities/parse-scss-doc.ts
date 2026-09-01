/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

type ScssParameter = {
  name: string;
  type: string;
  default: string;
};

export function parseScssDoc(source: string): ScssParameter[] | null {
  const match = source.match(/((?:\/\/\/[^\n]*\n)+)@mixin styles/);

  if (!match) {
    return null;
  }

  const lines = match[1]
    .split("\n")
    .map((l) => l.replace(/^\/\/\/\s?/, "").trim())
    .filter(Boolean);

  const parameters: ScssParameter[] = [];

  for (const line of lines) {
    // @param {type} name [default]
    // @param {type} name.key [default]
    const paramMatch = line.match(
      /^@param\s+\{([^}]+)\}\s+([\w.-]+)\s+\[((?:[^[\]]|\[[^\]]*\])*)\]/,
    );

    if (paramMatch) {
      const name = paramMatch[2].trim().replace(/config.?/, "");

      if (name) {
        parameters.push({
          name,
          type: paramMatch[1].trim().replaceAll(/ \| /g, "\n| "),
          default: paramMatch[3].trim(),
        });
      }
    }
  }

  return parameters;
}
