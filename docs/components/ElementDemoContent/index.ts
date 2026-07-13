/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import styles from './index.scss?inline';

import type { ScssDoc } from '@/model/ScssDoc';

import type { CdsEsDocsApiTable } from '@/components/ApiTable';
import type { CdsEsDocsElementOverview } from '@/components/ElementOverview';
import type { CdsEsDocsSourceCode } from '@/components/SourceCode';

export class CdsEsDocsElementDemoContent extends HTMLElement {
  static observedAttributes = ['request-id'];

  key: string = '';
  label: string = '';
  references: {
    label: string;
    url: string;
  }[] = [];
  notes?: string;
  css = new CSSStyleSheet();
  scssDoc?: ScssDoc;
  demos: Map<string, {
    html: string;
    scssConfig?: {
      [key: string]: string;
    },
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

  #getScssSourceCode(demo: CdsEsDocsElementDemoContent['demos'] extends Map<any, infer I> ? I : never): string {
    if (!demo.scssConfig) {
      return `@include ${this.key}.styles;`;
    }

    const scssMapEntries = Object.entries(demo.scssConfig)
      .map(([key, value]) => `  ${key}: ${value},`)
      .join('\n');

    return `@include ${this.key}.styles((\n${scssMapEntries}\n));`;
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

      const apiTabPanel = document.createElement('cds-es-docs-api-table') as CdsEsDocsApiTable;
      for (const entry of this.scssDoc?.parameters.entries() ?? []) {
        apiTabPanel.insertRow({
          key: entry[0],
          type: entry[1].type,
          default: entry[1].default,
        });
      }

      const sourceHtmlTabPanel = document.createElement('cds-es-docs-source-code') as CdsEsDocsSourceCode;
      sourceHtmlTabPanel.setAttribute('kind', 'html');
      sourceHtmlTabPanel.textContent = demo.html;

      const sourceScssTabPanel = document.createElement('cds-es-docs-source-code') as CdsEsDocsSourceCode;
      sourceScssTabPanel.setAttribute('kind', 'scss');
      sourceScssTabPanel.textContent = this.#getScssSourceCode(demo);

      tabs.append(
        this.#createTabPanel('Overview', overviewTabPanel),
        this.#createTabPanel('Configuration', apiTabPanel),
        this.#createTabPanel('HTML', sourceHtmlTabPanel),
        this.#createTabPanel('SCSS', sourceScssTabPanel),
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
