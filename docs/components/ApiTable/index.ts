/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

export class CdsEsDocsApiTable extends HTMLElement {
  #table: HTMLTableElement = document.createElement('table');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

    this.#table.appendChild(this.#createTableHead());
    this.#table.appendChild(document.createElement('tbody'));

    this.shadowRoot?.appendChild(this.#table);
  }

  clearRows() {
    const [tbody] = this.#table.tBodies;
    tbody.replaceChildren();
  }

  insertRow(data: {
    key: string;
    type: string;
    default: string;
  }) {
    const [tbody] = this.#table.tBodies;
    const row = tbody.insertRow();

    for (const key in data) {
      const cell = row.insertCell();
      const code = document.createElement('code');

      code.innerText = data[key as keyof typeof data];

      cell.appendChild(code);
    }
  }

  #createTableHead(): HTMLTableSectionElement {
    const thead = document.createElement('thead');
    const row = thead.insertRow();

    for (const label of ['Option', 'Type', 'Default']) {
      const cell = row.insertCell();
      cell.textContent = label;
    }

    return thead;
  }
};
