/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import closeIcon from '@carbon/icons/svg/32/close.svg?raw';

import { EnvironmentChangeEvent } from '../../js/environment';

export class DocsPanelToggleButton extends HTMLElement {
  static observedAttributes = [
    'blocked',
    'label',
  ];

  #stylesheet: CSSStyleSheet = new CSSStyleSheet();
  #button: HTMLButtonElement = document.createElement('button');
  #icon: string = '';

  set icon(value: string) {
    this.#icon = value;
    this.#updateButton();
  }

  set target(value: HTMLElement) {
    this.#button.ariaControlsElements = [value];
  }

  get isExpanded(): boolean {
    return this.#button.getAttribute('aria-expanded') === 'true';
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #updateButton() {
    if (this.isExpanded) {
      this.#button.setAttribute('aria-label', `Close ${this.getAttribute('label')}`);
      this.#button.innerHTML = closeIcon;
    } else {
      this.#button.setAttribute('aria-label', `Open ${this.getAttribute('label')}`);
      this.#button.innerHTML = this.#icon;
    }

    this.#button.setAttribute('title', this.#button.getAttribute('aria-label')!);
  }

  #handleClick() {
    const newState = !this.isExpanded;
    this.#button.setAttribute('aria-expanded', newState.toString());
    this.dataset.isExpanded = newState.toString();
    this.#updateButton();

    for (const panelToggleButton of document.querySelectorAll('docs-panel-toggle-button')) {
      if (panelToggleButton !== this) {
        panelToggleButton.setAttribute('blocked', newState.toString());
      }
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'label':
        this.#updateButton();
        break;
      case 'blocked':
        if (newValue === 'true') {
          this.#button.setAttribute('disabled', 'true');
        } else {
          this.#button.removeAttribute('disabled');
        }
        break;
    }
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.#stylesheet.replace(styles);
      this.shadowRoot.adoptedStyleSheets.push(this.#stylesheet);

      this.#button.setAttribute('aria-expanded', 'false');
      this.#button.addEventListener('click', () => {
        this.#handleClick();
      });

      window.addEventListener(EnvironmentChangeEvent, () => {
        if (this.getAttribute('auto-close-on-environment-change') === 'true' && this.isExpanded) {
          this.#handleClick();
        }
      });

      this.shadowRoot?.appendChild(this.#button);
    }
  }
};
