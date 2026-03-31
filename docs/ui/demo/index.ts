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

export class DocsDemo extends HTMLElement {
  #stylesheet: CSSStyleSheet = new CSSStyleSheet();
  #frame: HTMLDivElement = document.createElement('div');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #updateDemo() {
    const demo = Object.values(elements)
      .find((e) => e.meta.id === getEnvironment().element)?.demos
      .find((d) => d.id === getEnvironment().demo);

    if (demo) {
      this.#frame.innerHTML = demo.html.raw;
      demo.setup?.(this.#frame);
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
