/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import hljs from 'highlight.js';

export class CdsEsDocsSourceCode extends HTMLElement {
  #observer = new MutationObserver(() => this.#render());

  #code: HTMLElement = document.createElement('code');

  #renderers: { [kind: string]: () => string } = {
    html: this.#renderHtml,
    scss: this.#renderScss,
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

    const preformatted = document.createElement('pre');
    preformatted.appendChild(this.#code);
    this.shadowRoot?.appendChild(preformatted);
  }

  #renderHtml(): string {
    return hljs.highlight(
      this.textContent.replace(/^<!--[\s\S]*?-->\s*/, ''),
      { language: 'html' },
    ).value;
  }

  #renderScss(): string {
    return hljs.highlight(
      this.textContent,
      { language: 'scss' },
    ).value;
  }

  #render() {
    const renderer = this.#renderers[this.getAttribute('kind') ?? ''];

    if (renderer) {
      this.#code.innerHTML = renderer.bind(this)();
    }
  }

  connectedCallback() {
    this.#observer.observe(this, {
      characterData: true,
      childList: true,
      subtree: true,
    });

    this.#render();
  }

  disconnectedCallback() {
    this.#observer.disconnect();
  }
};
