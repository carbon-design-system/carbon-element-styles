/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NavigationItem } from '@/model/NavigationItem';

type Item = {
  path: string;
  item: NavigationItem;
  children: Item[];
};

export class CdsEsDocsNavigation extends HTMLElement {
  #base?: string;
  #paths = import.meta.glob('../../content/**/nav.ts') as Record<string, () => Promise<{ default: unknown }>>;
  #content: Map<string, NavigationItem> = new Map();
  #items: Item[] = [];
  #ul: HTMLUListElement = document.createElement('ul');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #generateAccessor(item: NavigationItem): string | undefined {
    if (!item.source) {
      return undefined;
    }

    const prefix = item.source.slice(this.#base?.length ?? 0);

    return prefix.endsWith(`${item.id}/`)
      ? prefix.slice(0, -1)
      : prefix + item.id;
  }

  async #registerContent(path: string, item: NavigationItem) {
    item.source = await import.meta.resolve?.(`${path}/..`);

    const accessor = this.#generateAccessor(item);
    if (accessor) {
      this.#content.set(accessor, item);
    }

    for (const child of item.items ?? []) {
      await this.#registerContent(path, child);
    }
  }

  async #parsePaths() {
    for (const path in this.#paths) {
      const { default: defaultExport } = await this.#paths[path]();

      if (defaultExport instanceof NavigationItem) {
        await this.#registerContent(path, defaultExport);
      }
    }
  }

  #parseItems() {
    this.#items = [];
    const knownItems = new Map<string, Item>();

    const getOrCreate = (key: string): Item => {
      if (knownItems.has(key)) {
        return knownItems.get(key)!;
      }

      const node: Item = {
        path: key,
        item: this.#content.get(key)!,
        children: [],
      };

      knownItems.set(key, node);

      const separator = key.lastIndexOf('/');
      const parent = separator === -1
        ? this.#items
        : getOrCreate(key.slice(0, separator)).children;

      parent.push(node);

      return node;
    };

    this.#content.forEach((_, key) => getOrCreate(key));
  }

  #renderBranchItem(item: Item): HTMLButtonElement {
    const button = document.createElement('button');

    button.textContent = item.item?.label;

    return button;
  }

  #renderLeafItem(item: Item): HTMLAnchorElement {
    const anchor = document.createElement('a');

    anchor.textContent = item.item.label;

    return anchor;
  }

  #renderItem(item: Item): HTMLLIElement {
    const li = document.createElement('li');

    if (item.children.length > 0) {
      const submenu = document.createElement('ul');
      submenu.replaceChildren(...item.children.map((child) => this.#renderItem(child)));

      li.append(
        this.#renderBranchItem(item),
        submenu,
      );
    } else {
      li.append(
        this.#renderLeafItem(item),
      );
    }

    return li;
  }

  #renderMenu() {
    const documentation = this.#items
      .find((i) => i.path === 'documentation')?.children
      .map((item) => this.#renderItem(item));
    const elements = this.#items
      .find((i) => i.path === 'elements')?.children
      .map((item) => this.#renderItem(item));

    const separator = document.createElement('li');
    separator.setAttribute('role', 'separator');

    this.#ul.append(
      ...documentation ?? [],
      separator,
      ...elements ?? [],
    );
  }

  async connectedCallback() {
    this.#base = await import.meta.resolve?.('../../content/');
    await this.#parsePaths();

    this.#parseItems();
    this.#renderMenu();

    this.shadowRoot?.appendChild(this.#ul);
  }
}
