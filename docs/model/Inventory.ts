/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NavigationItem } from '@/model/NavigationItem';

export class Inventory {
  static #base?: string;
  static #paths = import.meta.glob('../content/**/nav.ts') as Record<string, () => Promise<{ default: unknown }>>;
  static #content: Map<string, NavigationItem> = new Map();

  static get content(): ReadonlyMap<string, NavigationItem> {
    return this.#content;
  }

  static async load() {
    this.#base = await import.meta.resolve?.('../../content/');
    await this.#parsePaths();
  }

  static #generateAccessor(item: NavigationItem): string | undefined {
    if (!item.source) {
      return undefined;
    }

    const prefix = item.source.slice(this.#base?.length ?? 0);

    return prefix.endsWith(`${item.id}/`)
      ? prefix.slice(0, -1)
      : prefix + item.id;
  }

  static async #registerContent(path: string, item: NavigationItem) {
    item.source = await import.meta.resolve?.(`${path}/..`);

    const accessor = this.#generateAccessor(item);
    if (accessor) {
      this.#content.set(accessor, item);
    }

    for (const child of item.items ?? []) {
      await this.#registerContent(path, child);
    }
  }

  static async #parsePaths() {
    for (const path in this.#paths) {
      const { default: defaultExport } = await this.#paths[path]();

      if (defaultExport instanceof NavigationItem) {
        await this.#registerContent(path, defaultExport);
      }
    }
  }
}
