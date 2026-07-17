/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

import { ContentBase } from '@/components/ContentBase';

marked.use(
  markedHighlight({
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  }),
);

export class CdsEsDocsMarkdownContent extends ContentBase {
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
