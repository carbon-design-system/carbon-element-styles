/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import type { Demo, Meta } from '../../js/_types';
import {
  get as getEnvironment,
  set as setEnvironment,
  EnvironmentChangeEvent,
} from '../../js/environment';

type Item = { meta: Meta; demos: Demo[] };

export class DocsMenu extends HTMLElement {
  #stylesheet: CSSStyleSheet = new CSSStyleSheet();
  #list: HTMLUListElement = document.createElement('ul');
  #items: Item[] = [];

  set items(items: Item[]) {
    this.#items = items;
    this.#renderItems();
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #createMenuButton(meta: Meta): HTMLButtonElement {
    const button = document.createElement('button');
    button.textContent = meta.name;
    button.setAttribute('type', 'button');
    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', (!isExpanded).toString());

      if (!isExpanded) {
        button.nextElementSibling?.querySelector('a')?.click();
      }
    });

    return button;
  }

  #getHref(element: string, demo: string): string {
    const target = new URL(window.location.toString());
    target.searchParams.set('element', element);
    target.searchParams.set('demo', demo);

    return target.href;
  }

  #createMenuItem(meta: Meta, demo: Demo): HTMLLIElement {
    const listItem = document.createElement('li');
    listItem.dataset.demoId = demo.id;

    const anchor = document.createElement('a');
    anchor.textContent = demo.name;
    anchor.setAttribute('href', this.#getHref(meta.id, demo.id));
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      setEnvironment({
        element: meta.id,
        demo: demo.id,
      });
    });
    listItem.appendChild(anchor);

    return listItem;
  }

  #createMenu(item: Item): HTMLLIElement {
    const listItem = document.createElement('li');
    listItem.dataset.elementId = item.meta.id;
    listItem.appendChild(this.#createMenuButton(item.meta));

    const menuItems = document.createElement('ul');
    menuItems.append(...item.demos.map((demo) => this.#createMenuItem(item.meta, demo)));
    listItem.appendChild(menuItems);

    return listItem;
  }

  #renderItems() {
    this.#list.replaceChildren(...this.#items.map((item) => this.#createMenu(item)));
  }

  #updateAnchorHrefs() {
    for (const menu of this.#list.querySelectorAll('li[data-element-id]')) {
      const elementId = (menu as HTMLElement).dataset.elementId;

      for (const menuItem of menu.querySelectorAll('li[data-demo-id]')) {
        const demoId = (menuItem as HTMLElement).dataset.demoId;

        const anchor = menuItem.querySelector('a');

        if (elementId && demoId && anchor) {
          anchor.setAttribute('href', this.#getHref(elementId, demoId));
        }
      }
    }
  }

  #updateActiveItem() {
    const { element, demo } = getEnvironment();

    for (const activeItem of this.#list.querySelectorAll('a[aria-current="page"]')) {
      activeItem.removeAttribute('aria-current');
    }

    const activeElement = this.#list.querySelector(`li[data-element-id="${element}"]`);
    const activeDemo = activeElement?.querySelector(`li[data-demo-id="${demo}"]`);

    if (activeElement && activeDemo) {
      activeElement.querySelector('button')?.setAttribute('aria-expanded', 'true');
      activeDemo.querySelector('a')?.setAttribute('aria-current', 'page');
    }
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.#stylesheet.replace(styles);
      this.shadowRoot.adoptedStyleSheets.push(this.#stylesheet);

      window.addEventListener(EnvironmentChangeEvent, () => {
        this.#updateAnchorHrefs();
        this.#updateActiveItem();
      });

      this.shadowRoot?.appendChild(this.#list);
    }
  }
};
