/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { marked } from 'marked';

import styles from './index.scss?inline';

export class CdsEsDocsMarkdownContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);
  }

  async connectedCallback() {
    const html = await marked.parse(this.textContent ?? '');

    const article = document.createElement('article');
    article.innerHTML = html;

    this.shadowRoot?.append(article);
  }
}
