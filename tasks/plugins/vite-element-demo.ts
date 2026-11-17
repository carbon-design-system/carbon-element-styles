/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { normalizePath } from "vite";
import type { Plugin } from "vite";

import { elementsContentDir, getDemoScssPath, getDemosDir } from "../utilities/demo-files.ts";
import * as log from "../utilities/log.ts";

export const elementDemoVirtualPrefix = "virtual:element-demo/";
const resolvedPrefix = "\0element-demo:";

const elementsContentDirNormalized = normalizePath(elementsContentDir);

export const elementDemo: Plugin = {
  name: "element-demo",

  resolveId(source) {
    if (source.startsWith(elementDemoVirtualPrefix)) {
      return `${resolvedPrefix}${source.slice(elementDemoVirtualPrefix.length)}`;
    }
  },

  load: {
    filter: {
      id: {
        include: [new RegExp(`^${resolvedPrefix}`)],
      },
    },
    handler(id) {
      const [elementName, demoName] = id.slice(resolvedPrefix.length).split("/");
      const demosDir = getDemosDir(elementName);
      const htmlPath = resolve(demosDir, "index.html");
      const setupPath = resolve(demosDir, "setup.ts");

      if (!existsSync(demosDir)) {
        log.error(
          `Could not load demo '${demoName}' of element '${elementName}': there is no _demos directory at '${demosDir}'.`,
        );
      } else if (!existsSync(htmlPath)) {
        log.error(
          `Could not load demo '${demoName}' of element '${elementName}': missing '${htmlPath}'.`,
        );
      }

      const scssPath = getDemoScssPath(elementName, demoName);

      const setupExport = existsSync(setupPath)
        ? `export { setup } from ${JSON.stringify(normalizePath(setupPath))};`
        : "export const setup = undefined;";

      return `
        export { default as css } from ${JSON.stringify(`${normalizePath(scssPath)}?inline`)};
        export { default as html } from ${JSON.stringify(normalizePath(htmlPath))};
        export { default as scssConfig } from ${JSON.stringify(`virtual:scss-config/${elementName}/${demoName}`)};
        export { default as browserCompatibility } from ${JSON.stringify(`virtual:browser-compatibility/${elementName}/${demoName}`)};
        ${setupExport}
      `;
    },
  },

  /**
   * Whether a demo has a `setup` export is decided when its module is loaded.
   * Adding or removing `_demos/setup.ts` changes the generated code without
   * changing any module that was imported before, so the affected modules are
   * invalidated here.
   */
  configureServer(server) {
    server.watcher.on("add", invalidateSetupDependents);
    server.watcher.on("unlink", invalidateSetupDependents);

    function invalidateSetupDependents(changedPath: string) {
      const normalized = normalizePath(changedPath);

      if (!normalized.startsWith(`${elementsContentDirNormalized}/`)) {
        return;
      }

      const [elementName, demosDirName, fileName] = normalized
        .slice(elementsContentDirNormalized.length + 1)
        .split("/");

      if (demosDirName !== "_demos" || fileName !== "setup.ts") {
        return;
      }

      const { moduleGraph, hot } = server.environments.client;
      let invalidated = false;

      for (const [id, mod] of moduleGraph.idToModuleMap) {
        if (id.startsWith(`${resolvedPrefix}${elementName}/`)) {
          moduleGraph.invalidateModule(mod);
          invalidated = true;
        }
      }

      if (invalidated) {
        hot.send({ type: "full-reload" });
      }
    }
  },
};
