/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

export class CdsEsDocsTabPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

    const frame = document.createElement('div');
    const slot = document.createElement('slot');
    frame.append(slot);

    this.shadowRoot?.appendChild(frame);
  }

  connectedCallback() {
    this.setAttribute('role', 'tabpanel');
    this.hidden = true;
  }
};
