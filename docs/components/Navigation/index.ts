/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import { Environment } from '@/model/Environment';
import { Inventory } from '@/model/Inventory';
import { NavigationItem } from '@/model/NavigationItem';

type Item = {
  path: string;
  item: NavigationItem;
  children: Item[];
};

export class CdsEsDocsNavigation extends HTMLElement {
  #items: Item[] = [];
  #ul: HTMLUListElement = document.createElement('ul');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

    this.shadowRoot?.appendChild(this.#ul);
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
        item: Inventory.content.get(key)!,
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

    Inventory.content.forEach((_, key) => getOrCreate(key));
  }

  #renderBranchItem(item: Item): HTMLButtonElement {
    const button = document.createElement('button');

    button.textContent = item.item?.label;
    button.setAttribute('type', 'button');
    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', () => {
      const state = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', (!state).toString());

      const hasActiveChildren = button.parentElement?.querySelector('a[aria-current="page"]');

      if (!state && !hasActiveChildren) {
        button.parentElement?.querySelector('a')?.click();
      }
    });

    return button;
  }

  #renderLeafItem(item: Item): HTMLAnchorElement {
    const anchor = document.createElement('a');

    anchor.textContent = item.item.label;
    anchor.setAttribute('href', Environment.getUrl({
      path: item.path,
    }).toString());

    function updateAriaCurrent() {
      if (item.path === Environment.path) {
        anchor.setAttribute('aria-current', 'page');
      } else {
        anchor.removeAttribute('aria-current');
      }
    }

    Environment.addEventListener('change', updateAriaCurrent);
    updateAriaCurrent();

    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      Environment.path = item.path;
    });

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

    this.#ul.replaceChildren(
      ...documentation ?? [],
      separator,
      ...elements ?? [],
    );
  }

  connectedCallback() {
    this.#parseItems();
    this.#renderMenu();
  }
}
