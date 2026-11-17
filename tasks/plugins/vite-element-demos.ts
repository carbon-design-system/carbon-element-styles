/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { existsSync } from "node:fs";

import { normalizePath } from "vite";
import type { Plugin } from "vite";

import { elementsContentDir, getDemoNames, getDemosDir } from "../utilities/demo-files.ts";
import * as log from "../utilities/log.ts";
import { elementDemoVirtualPrefix } from "./vite-element-demo.ts";

const virtualPrefix = "virtual:element-demos/";
const resolvedPrefix = "\0element-demos:";

const elementsContentDirNormalized = normalizePath(elementsContentDir);

export const elementDemos: Plugin = {
  name: "element-demos",

  resolveId(source) {
    if (source.startsWith(virtualPrefix)) {
      return `${resolvedPrefix}${source.slice(virtualPrefix.length)}`;
    }
  },

  load: {
    filter: {
      id: {
        include: [new RegExp(`^${resolvedPrefix}`)],
      },
    },
    handler(id) {
      const elementName = id.slice(resolvedPrefix.length);
      const demosDir = getDemosDir(elementName);

      if (!existsSync(demosDir)) {
        log.error(
          `Could not load the demos of element '${elementName}': there is no _demos directory at '${demosDir}'.`,
        );
      }

      const demoNames = getDemoNames(elementName);

      if (demoNames.length === 0) {
        log.error(
          `Could not load the demos of element '${elementName}': there are no SCSS files in '${demosDir}'.`,
        );
      }

      const imports = demoNames.map(
        (demoName, index) =>
          `import * as demo${index} from ${JSON.stringify(`${elementDemoVirtualPrefix}${elementName}/${demoName}`)};`,
      );

      const entries = demoNames.map(
        (demoName, index) => `[${JSON.stringify(demoName)}, demo${index}]`,
      );

      return `
        ${imports.join("\n")}

        export default new Map([${entries.join(", ")}]);
      `;
    },
  },

  /**
   * The demo map of an element is built from `_demos/*.scss`. Adding or
   * removing such a file changes the generated code without changing any
   * module that was imported before, so the map of the element is invalidated
   * here.
   */
  configureServer(server) {
    server.watcher.on("add", invalidateDemoMap);
    server.watcher.on("unlink", invalidateDemoMap);

    function invalidateDemoMap(changedPath: string) {
      const normalized = normalizePath(changedPath);

      if (!normalized.startsWith(`${elementsContentDirNormalized}/`)) {
        return;
      }

      const [elementName, demosDirName, fileName] = normalized
        .slice(elementsContentDirNormalized.length + 1)
        .split("/");

      if (demosDirName !== "_demos" || !fileName?.endsWith(".scss")) {
        return;
      }

      const { moduleGraph, hot } = server.environments.client;
      const mod = moduleGraph.idToModuleMap.get(`${resolvedPrefix}${elementName}`);

      if (mod) {
        moduleGraph.invalidateModule(mod);
        hot.send({ type: "full-reload" });
      }
    }
  },
};
