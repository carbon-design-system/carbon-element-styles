/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import styles from './index.scss?inline';

import type { CdsEsDocsElementOverview } from '../ElementOverview';

export class CdsEsDocsElementDemoContent extends HTMLElement {
  static observedAttributes = ['request-id'];

  label: string = '';
  references: {
    label: string;
    url: string;
  }[] = [];
  notes?: string;
  css = new CSSStyleSheet();
  demos: Map<string, {
    html: string;
    setup?: (frame: HTMLElement) => void;
  }> = new Map();

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);
  }

  #createTabPanel(label: string, content: HTMLElement): HTMLElement {
    const tabPanel = document.createElement('cds-es-docs-tab-panel');
    tabPanel.setAttribute('label', label);

    tabPanel.append(content);

    return tabPanel;
  }

  #render() {
    const demo = this.demos.get(this.getAttribute('request-id') ?? '');

    if (demo) {
      this.shadowRoot?.adoptedStyleSheets.splice(1, Infinity, this.css);

      const frame = document.createElement('div');
      frame.classList.add('demo');
      frame.innerHTML = demo.html;
      demo.setup?.(frame);

      const tabs = document.createElement('cds-es-docs-tabs');

      const overviewTabPanel = document.createElement('cds-es-docs-element-overview') as CdsEsDocsElementOverview;
      overviewTabPanel.label = this.label;
      overviewTabPanel.references = this.references;
      overviewTabPanel.notes = this.notes;

      tabs.append(
        this.#createTabPanel('Overview', overviewTabPanel),
      );

      this.shadowRoot?.replaceChildren(frame, tabs);
    }
  }

  connectedCallback() {
    this.#render();
  }

  attributeChangedCallback() {
    this.#render();
  }
}
