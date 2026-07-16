/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import { Environment } from '@/model/Environment';
import { Inventory } from '@/model/Inventory';
import { CdsEsDocsElementDemoContent } from '@/components/ElementDemoContent';

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
          const { default: defaultExport } = await item.content?.() ?? {};

          if (defaultExport instanceof HTMLElement) {
            if (item.key) {
              defaultExport.setAttribute('key', item.key);
            }

            defaultExport.setAttribute('request-id', item.id);

            if (this.shadowRoot?.firstChild !== defaultExport) {
              const retainedTabIndex = this.shadowRoot?.firstChild instanceof CdsEsDocsElementDemoContent && defaultExport instanceof CdsEsDocsElementDemoContent
                ? this.shadowRoot.firstChild.activeTabIndex
                : -1;

              this.shadowRoot?.replaceChildren(defaultExport);

              setTimeout(() => {
                if (retainedTabIndex >= 0) {
                  (this.shadowRoot?.firstChild as CdsEsDocsElementDemoContent).activeTabIndex = retainedTabIndex;
                }
              });
            }
          }
        } catch {}
      }
    }
  }

  #boundRender = () => this.#render();

  connectedCallback() {
    Environment.addEventListener('change', this.#boundRender);
    this.#render();
  }

  disconnectedCallback() {
    Environment.removeEventListener('change', this.#boundRender);
  }
}
