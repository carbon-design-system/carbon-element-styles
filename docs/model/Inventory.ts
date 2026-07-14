/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NavigationItem } from '@/model/NavigationItem';

export class Inventory {
  static #paths = import.meta.glob('../content/**/index.ts') as Record<string, () => Promise<{ default: unknown }>>;
  static #content: Map<string, NavigationItem> = new Map();

  static get content(): ReadonlyMap<string, NavigationItem> {
    return this.#content;
  }

  static async load() {
    await this.#parsePaths();
  }

  static #registerContent(prefix: string, item: NavigationItem) {
    const accessor = prefix.endsWith(`/${item.id}`)
      ? prefix
      : `${prefix}/${item.id}`;

    this.#content.set(accessor, item);

    for (const child of item.items ?? []) {
      this.#registerContent(accessor, child);
    }
  }

  static async #parsePaths() {
    for (const path in this.#paths) {
      const { default: defaultExport } = await this.#paths[path]();

      if (defaultExport instanceof NavigationItem) {
        const prefix = path
          .replace(/^\.\.\/content\//, '')
          .replace(/\/index\.ts$/, '');
        this.#registerContent(prefix, defaultExport);
      }
    }
  }
}
