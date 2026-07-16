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
import type { CdsEsDocsTabs } from '@/components/Tabs';

export class CdsEsDocsElementDemoContent extends HTMLElement {
  static observedAttributes = ['key', 'request-id'];

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

  #frame: HTMLDivElement = document.createElement('div');
  #tabs = document.createElement('cds-es-docs-tabs') as CdsEsDocsTabs;
  #elementOverviewTabPanel = document.createElement('cds-es-docs-element-overview') as CdsEsDocsElementOverview;
  #apiTableTabPanel = document.createElement('cds-es-docs-api-table') as CdsEsDocsApiTable;
  #sourceHtmlTabPanel = document.createElement('cds-es-docs-source-code') as CdsEsDocsSourceCode;
  #sourceScssTabPanel = document.createElement('cds-es-docs-source-code') as CdsEsDocsSourceCode;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

    this.#frame.classList.add('demo');

    const fade = document.createElement('div');
    fade.classList.add('fade');

    this.#tabs.append(
      this.#createTabPanel('Overview', this.#elementOverviewTabPanel),
      this.#createTabPanel('Configuration', this.#apiTableTabPanel),
      this.#createTabPanel('HTML', this.#sourceHtmlTabPanel),
      this.#createTabPanel('SCSS', this.#sourceScssTabPanel),
    );

    this.shadowRoot?.replaceChildren(this.#frame, fade, this.#tabs);
  }

  get activeTabIndex(): number {
    return this.#tabs.activeTabIndex;
  }

  set activeTabIndex(index: number) {
    this.#tabs.activeTabIndex = index;
  }

  #createTabPanel(label: string, content: HTMLElement): HTMLElement {
    const tabPanel = document.createElement('cds-es-docs-tab-panel');
    tabPanel.setAttribute('label', label);

    tabPanel.append(content);

    return tabPanel;
  }

  #getScssSourceCode(demo: CdsEsDocsElementDemoContent['demos'] extends Map<any, infer I> ? I : never): string {
    if (!demo.scssConfig) {
      return `@include ${this.getAttribute('key')}.styles;`;
    }

    const scssMapEntries = Object.entries(demo.scssConfig)
      .map(([key, value]) => `  ${key}: ${value},`)
      .join('\n');

    return `@include ${this.getAttribute('key')}.styles((\n${scssMapEntries}\n));`;
  }

  #render() {
    const demo = this.demos.get(this.getAttribute('request-id') ?? '');

    if (demo) {
      this.shadowRoot?.adoptedStyleSheets.splice(1, Infinity, this.css);

      this.#frame.innerHTML = demo.html;
      demo.setup?.(this.#frame);

      this.#elementOverviewTabPanel.label = this.label;
      this.#elementOverviewTabPanel.references = this.references;
      this.#elementOverviewTabPanel.notes = this.notes;

      this.#apiTableTabPanel.clearRows();
      for (const entry of this.scssDoc?.parameters.entries() ?? []) {
        this.#apiTableTabPanel.insertRow({
          key: entry[0],
          type: entry[1].type,
          default: entry[1].default,
        });
      }

      this.#sourceHtmlTabPanel.setAttribute('kind', 'html');
      this.#sourceHtmlTabPanel.textContent = demo.html;

      this.#sourceScssTabPanel.setAttribute('kind', 'scss');
      this.#sourceScssTabPanel.textContent = this.#getScssSourceCode(demo);
    }
  }

  connectedCallback() {
    this.#render();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.#render();
    }
  }
}
