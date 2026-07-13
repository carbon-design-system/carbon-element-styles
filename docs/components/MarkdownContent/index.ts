/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { marked } from 'marked';

import styles from './index.scss?inline';

export class CdsEsDocsMarkdownContent extends HTMLElement {
  #observer = new MutationObserver(() => this.#render());

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);
  }

  async #render() {
    const html = await marked.parse(this.textContent ?? '');

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = html;
    }
  }  

  async connectedCallback() {
    this.#observer.observe(this, {
      characterData: true,
      childList: true,
      subtree: true,
    });

    await this.#render();
  }

  disconnectedCallback() {
    this.#observer.disconnect();
  }
}
