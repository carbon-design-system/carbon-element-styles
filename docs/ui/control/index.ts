/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import {
  get as getEnvironment,
  set as setEnvironment,
  EnvironmentChangeEvent,
  type DemoEnvironmentOptions,
} from '../../js/environment';

export class DocsControl extends HTMLElement {
  static observedAttributes = [
    'label',
    'key',
  ];

  #stylesheet: CSSStyleSheet = new CSSStyleSheet();
  #icon: HTMLSpanElement = document.createElement('span');
  #select: HTMLSelectElement = document.createElement('select');

  set icon(value: string) {
    this.#icon.innerHTML = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #renderOption(data: Element): HTMLOptionElement {
    const option = document.createElement('option');

    option.textContent = data.getAttribute('label');
    option.value = (data.getAttribute('value') ?? '');

    return option;
  }

  #renderOptions() {
    this.#select.replaceChildren(...Array.from(this.querySelectorAll('docs-control-option') ?? []).map((option) => this.#renderOption(option)));
  }

  #updateActiveItem() {
    const key = this.getAttribute('key');

    if (key) {
      const value = getEnvironment()[key as keyof DemoEnvironmentOptions];

      if (value) {
        this.#select.value = value;
      }
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'label':
        this.#select.setAttribute('aria-label', newValue);
        break;
    }
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.#stylesheet.replace(styles);
      this.shadowRoot.adoptedStyleSheets.push(this.#stylesheet);

      const label = document.createElement('label');
      label.appendChild(this.#icon);
      label.appendChild(this.#select);

      this.#renderOptions();

      this.#select.addEventListener('change', () => {
        const key = this.getAttribute('key');

        if (key) {
          setEnvironment({
            [key]: this.#select.value,
          });
        }
      });

      window.addEventListener(EnvironmentChangeEvent, () => {
        this.#updateActiveItem();
      });

      this.shadowRoot?.appendChild(label);
    }
  }
};
