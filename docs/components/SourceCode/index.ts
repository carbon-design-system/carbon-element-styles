/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

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
    return this.textContent.replace(/^<!--[\s\S]*?-->\s*/, '');
  }

  #renderScss(): string {
    return this.textContent;
  }

  #render() {
    const renderer = this.#renderers[this.getAttribute('kind') ?? ''];

    if (renderer) {
      this.#code.innerText = renderer.bind(this)();
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
