/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function parseScssConfig(source: string): Record<string, string> | undefined {
  const match = source.match(/\$config:\s*\(([\s\S]*?)\);/);

  if (!match) {
    return undefined;
  }

  const mapBody = match[1];
  const result: Record<string, string> = {};

  for (const entry of mapBody.split(",")) {
    const colonIndex = entry.indexOf(":");

    if (colonIndex === -1) {
      continue;
    }

    const key = entry.slice(0, colonIndex).trim();
    const value = entry.slice(colonIndex + 1).trim();

    if (key === "selector") {
      continue;
    }

    if (key) {
      result[key] = value;
    }
  }

  return result;
}
