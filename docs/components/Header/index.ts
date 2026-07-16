/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import navigationIcon from '@carbon/icons/svg/32/menu.svg?raw';
import controlsIcon from '@carbon/icons/svg/32/settings--adjust.svg?raw';

import { Environment } from '@/model/Environment';
import type { CdsEsDocsPanelToggleButton } from '@/components/PanelToggleButton';

import { version } from '../../../package.json';

export class CdsEsDocsHeader extends HTMLElement {
  #header: HTMLElement = document.createElement('header');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

    this.shadowRoot?.appendChild(this.#header);
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

  #createNavigationItem(label: string, href: string) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = label;
    a.setAttribute('href', href);

    li.append(a);

    return li;
  }

  #renderNavigation() {
    const ul = document.createElement('ul');

    ul.append(
      this.#createNavigationItem('GitHub', 'https://github.com/carbon-design-system/carbon-element-styles'),
    );

    return ul;
  }

  #renderHeader() {
    const nav = document.createElement('nav');

    nav.append(
      this.#renderTitle(),
      this.#renderNavigation(),
    );

    const controls = document.createElement('cds-es-docs-controls');

    const navigationPanelToggleButton = document.createElement('cds-es-docs-panel-toggle-button') as CdsEsDocsPanelToggleButton;
    navigationPanelToggleButton.setAttribute('part', 'navigation-panel-toggle-button');
    navigationPanelToggleButton.setAttribute('label', 'navigation');
    navigationPanelToggleButton.setAttribute('auto-close-on-environment-change', 'true');
    navigationPanelToggleButton.icon = navigationIcon;
    navigationPanelToggleButton.target = document.querySelector('cds-es-docs-navigation')!;

    const controlsPanelToggleButton = document.createElement('cds-es-docs-panel-toggle-button') as CdsEsDocsPanelToggleButton;
    controlsPanelToggleButton.setAttribute('part', 'controls-panel-toggle-button');
    controlsPanelToggleButton.setAttribute('label', 'controls');
    controlsPanelToggleButton.icon = controlsIcon;
    controlsPanelToggleButton.target = controls;

    this.#header.replaceChildren(
      navigationPanelToggleButton,
      nav,
      controls,
      controlsPanelToggleButton,
    );
  }

  connectedCallback() {
    this.#renderHeader();
  }
}
