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
import * as pages from '../../pages';

export class DocsDemo extends HTMLElement {
  #stylesheet: CSSStyleSheet = new CSSStyleSheet();
  #frame: HTMLDivElement = document.createElement('div');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #updateDemo() {
    if (getEnvironment().element) {
      const demo = Object.values(elements)
        .find((e) => e.meta.id === getEnvironment().element)?.demos
        .find((d) => d.id === getEnvironment().demo);

      if (demo) {
        this.dataset.kind = 'element';
        this.#frame.innerHTML = demo.html.raw;
        demo.setup?.(this.#frame);
      }
    } else if (getEnvironment().page) {
      const page = Object.values(pages)
        .find((p) => p.meta.id === getEnvironment().page);

      if (page) {
        this.dataset.kind = 'page';
        this.#frame.innerHTML = page.meta.html.raw;
      }
    }
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.#stylesheet.replace(styles);
      this.shadowRoot.adoptedStyleSheets.push(this.#stylesheet);

      window.addEventListener(EnvironmentChangeEvent, () => {
        this.#updateDemo();
      });

      this.shadowRoot.appendChild(this.#frame);
    }
  }
};
