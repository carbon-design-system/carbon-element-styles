/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import hljs from 'highlight.js';

import {
  get as getEnvironment,
  EnvironmentChangeEvent,
} from '../../js/environment';
import type { Demo, Meta } from '../../js/_types';
import * as elements from '../../elements';

export class DocsSourceCode extends HTMLElement {
  #stylesheet: CSSStyleSheet = new CSSStyleSheet();
  #code: HTMLElement = document.createElement('code');

  #renderers: { [kind: string]: (meta: Meta, demo: Demo) => string } = {
    html: this.#renderHtml,
    scss: this.#renderScss,
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #renderHtml(meta: Meta, demo: Demo): string {
    return hljs.highlight(
      (demo.html.presentation ?? demo.html.raw).slice(1),
      { language: 'html' },
    ).value;
  }

  #renderScss(meta: Meta, demo: Demo): string {
    if (!demo.config) {
      return hljs.highlight(
        `@include ${meta.id}.styles;`,
        { language: 'scss' },
      ).value;
    }

    const scssMapEntries = Object.entries(demo.config)
      .map(([key, value]) => `  ${key}: ${value},`)
      .join('\n');

    return hljs.highlight(
      `@include ${meta.id}.styles((\n${scssMapEntries}\n));`,
      { language: 'scss' },
    ).value;
  }

  #updateContent() {
    const element = Object.values(elements)
      .find((e) => e.meta.id === getEnvironment().element);
    const meta = element?.meta as Meta | undefined;
    const demo = element?.demos
      .find((d) => d.id === getEnvironment().demo);

    if (meta && demo) {
      const renderer = this.#renderers[this.getAttribute('kind') ?? ''];

      if (renderer) {
        this.#code.innerHTML = renderer(meta, demo);
      }
    }
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.#stylesheet.replace(styles);
      this.shadowRoot.adoptedStyleSheets.push(this.#stylesheet);

      window.addEventListener(EnvironmentChangeEvent, () => {
        this.#updateContent();
      });

      const preformatted = document.createElement('pre');
      preformatted.appendChild(this.#code);

      this.shadowRoot.appendChild(preformatted);
    }
  }
};
