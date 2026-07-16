/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import { Environment } from '@/model/Environment';

export class CdsEsDocsControl extends HTMLElement {
  key?: string;
  label: string = '';
  icon: string = '';
  options: {
    label: string;
    value: string;
  }[] = [];

  #icon: HTMLSpanElement = document.createElement('span');
  #select: HTMLSelectElement = document.createElement('select');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

    const label = document.createElement('label');
    label.append(this.#icon, this.#select);

    this.#select.addEventListener('change', () => {
      if (this.key && Object.hasOwn(Environment, this.key)) {
        Environment[this.key as keyof typeof Environment.state] = this.#select.value;
      }
    });

    this.shadowRoot?.append(label);
  }

  #createOption(label: string, value: string): HTMLOptionElement {
    const option = document.createElement('option');

    option.textContent = label;
    option.value = value;

    return option;
  }

  #updateValue() {
    const value = Environment.state[this.key as keyof typeof Environment.state];

    if (value) {
      this.#select.value = value;
    }
  }

  connectedCallback() {
    Environment.addEventListener('change', this.#updateValue);

    this.#icon.innerHTML = this.icon;
    this.#select.setAttribute('aria-label', this.label);
    this.#select.replaceChildren(...this.options.map((option) => this.#createOption(option.label, option.value)));

    this.#updateValue();
  }

  disconnectedCallback() {
    Environment.removeEventListener('change', this.#updateValue);
  }
}
