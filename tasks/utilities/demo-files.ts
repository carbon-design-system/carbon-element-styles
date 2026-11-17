/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

import * as log from "./log.ts";

export const elementsContentDir = resolve(import.meta.dirname, "../../docs/content/elements");

export function getDemosDir(elementName: string): string {
  return resolve(elementsContentDir, elementName, "_demos");
}

export function getDemoScssPath(elementName: string, demoName: string): string {
  const scssPath = resolve(getDemosDir(elementName), `${demoName}.scss`);

  if (!existsSync(scssPath)) {
    log.error(
      `Could not find the SCSS file of demo '${demoName}' of element '${elementName}': missing '${scssPath}'.`,
    );
  }

  return scssPath;
}

export function getDemoNames(elementName: string): string[] {
  const demosDir = getDemosDir(elementName);

  if (!existsSync(demosDir)) {
    return [];
  }

  return readdirSync(demosDir, { withFileTypes: true })
    .filter(
      (entry) => entry.isFile() && entry.name.endsWith(".scss") && entry.name !== "index.scss",
    )
    .map((entry) => entry.name.slice(0, -".scss".length))
    .sort();
}
