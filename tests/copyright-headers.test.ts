/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, test } from "vitest";

import { extname, join } from "node:path";
import { glob, readFile } from "node:fs/promises";

import gitignore from "../.gitignore?raw";
import { type FileType, validateBanner } from "../tasks/utilities/banner";
import * as log from "../tasks/utilities/log";

const ignoredFiles = gitignore.split("\n").filter((line) => line != "");
const extensions: { [extension: string]: FileType } = {
  ".js": "js",
  ".ts": "js",

  ".css": "css",
  ".scss": "css",

  ".html": "html",
};

describe("All source files contain a valid copyright header", async () => {
  const sourceFiles: [relative: string, absolute: string][] = [];

  const files = glob(join(__dirname, "../**/*.{js,ts,css,scss,html}"), {
    exclude: (file) => !ignoredFiles.every((ignoredFile) => !file.match(ignoredFile)),
  });

  for await (const file of files) {
    sourceFiles.push([file.slice(join(__dirname, "..").length), file]);
  }

  test.each(sourceFiles)("%s", async (_, path) => {
    const extension = extname(path);
    const fileType = Object.hasOwn(extensions, extension) ? extensions[extension] : undefined;

    expect.assertions(1);

    if (fileType) {
      let content = "";

      try {
        content = await readFile(path, "utf-8");
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
