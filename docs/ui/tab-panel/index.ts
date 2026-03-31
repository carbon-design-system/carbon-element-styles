/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

export class DocsTabPanel extends HTMLElement {
  #stylesheet: CSSStyleSheet = new CSSStyleSheet();

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.#stylesheet.replace(styles);
      this.shadowRoot.adoptedStyleSheets.push(this.#stylesheet);

      this.setAttribute('role', 'tabpanel');
      this.hidden = true;

      const frame = document.createElement('div');
      frame.append(...this.children);

      this.shadowRoot.appendChild(frame);
    }
  }
};
