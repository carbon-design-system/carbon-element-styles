/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import {
  get as getEnvironment,
  EnvironmentChangeEvent,
} from '../../js/environment';
import * as elements from '../../elements';

export class DocsApiTable extends HTMLElement {
  #stylesheet: CSSStyleSheet = new CSSStyleSheet();
  #table: HTMLTableElement = document.createElement('table');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #updateContent() {
    const meta = Object.values(elements)
      .find((e) => e.meta.id === getEnvironment().element)?.meta;

    if (meta) {
      this.#table.querySelector('tbody')?.replaceChildren(...meta.config.map((c) => {
        const row = document.createElement('tr');

        row.append(...['key', 'type', 'default'].map((key) => {
          const cell = document.createElement('td');
          const code = document.createElement('code');

          code.innerText = c[key as keyof typeof meta.config[0]];

          cell.appendChild(code);
          return cell;
        }));

        return row;
      }));
    }
  }

  #createTableHead(): HTMLTableSectionElement {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    for (const label of ['Option', 'Type', 'Default']) {
      const cell = document.createElement('th');
      cell.textContent = label;
      tr.appendChild(cell);
    }

    thead.appendChild(tr);

    return thead;
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.#stylesheet.replace(styles);
      this.shadowRoot.adoptedStyleSheets.push(this.#stylesheet);

      window.addEventListener(EnvironmentChangeEvent, () => {
        this.#updateContent();
      });

      this.#table.appendChild(this.#createTableHead());
      this.#table.appendChild(document.createElement('tbody'));

      this.shadowRoot.appendChild(this.#table);
    }
  }
};
