/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, test } from "vitest";

import { extname, join } from "node:path";
import { glob, readFile } from "node:fs/promises";

import { type FileType, validateBanner } from "../tasks/utilities/banner";
import * as log from "../tasks/utilities/log";

const dists = [join(__dirname, "../css"), join(__dirname, "../docs/dist")];

describe("All dist files contain a valid copyright header", async () => {
  const distFiles: [relative: string, absolute: string][] = [];

  for (const dir of dists) {
    const files = glob(join(dir, "**/*.{js,css,html}"));

    for await (const file of files) {
      distFiles.push([file.slice(join(__dirname, "..").length), file]);
    }
  }

  test.each(distFiles)("%s", async (_, path) => {
    const fileType = extname(path).slice(1) as FileType;

    expect.assertions(1);

    if (fileType) {
      let content = "";

      try {
        content = String(await readFile(path));

        if (content.startsWith("const __vite__mapDeps")) {
          content = content.split("\n").slice(1).join("\n");
        }
      } catch (e) {
        log.error(`Error reading file "${path}"`, e);
        return;
      }

      if (content) {
        expect(validateBanner(content, { fileType })).toBe(true);
      }
    }
  });
});
