/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Inventory } from '@/model/Inventory';
import styles from './index.scss?inline';

import { Environment } from '@/model/Environment';
import { Content } from '@/model/Content';

export class CdsEsDocsContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

  }

  async #render() {
    if (Environment.path) {
      const item = Inventory.content.get(Environment.path);

      if (item) {
        try {
          const { default: defaultExport } = await import(`${item.source}content.ts`);

          if (defaultExport instanceof Content && this.shadowRoot) {
            const { html, css, } = await defaultExport.render({
              id: item.id,
            });

            this.shadowRoot.replaceChildren(html);
            this.shadowRoot.adoptedStyleSheets = [css];
          }
        } catch {}
      }
    }
  }

  async connectedCallback() {
    Environment.addEventListener('change', () => {
      this.#render();
    });

    this.#render();
  }
}
