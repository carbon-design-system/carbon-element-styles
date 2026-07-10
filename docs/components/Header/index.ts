/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import { Environment } from '@/model/Environment';

import { version } from '../../../package.json';

export class CdsEsDocsHeader extends HTMLElement {
  #header: HTMLElement = document.createElement('header');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);
  }

  #renderTitle() {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', Environment.getUrl({
      path: '/',
    }).toString());
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      Environment.path = '/';
    });

    anchor.textContent = 'Carbon';

    const bold = document.createElement('b');
    bold.textContent = 'element styles';

    const span = document.createElement('span');
    span.textContent = `v${version}`
    span.classList.add('version');

    anchor.append(bold, span);

    return anchor;
  }

  #renderHeader() {
    const nav = document.createElement('nav');

    nav.append(
      this.#renderTitle(),
    );

    this.#header.replaceChildren(nav);
  }

  async connectedCallback() {
    this.#renderHeader();

    this.shadowRoot?.appendChild(this.#header);
  }
}
