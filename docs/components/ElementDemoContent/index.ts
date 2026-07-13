/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import styles from './index.scss?inline';

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

  render() {
    const demo = this.demos.get(this.getAttribute('request-id') ?? '');

    if (demo) {
      this.shadowRoot?.adoptedStyleSheets.splice(1, Infinity, this.css);

      const frame = document.createElement('div');
      frame.classList.add('demo');
      frame.innerHTML = demo.html;
      demo.setup?.(frame);

      this.shadowRoot?.replaceChildren(frame);
    }
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
}
