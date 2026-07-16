/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import closeIcon from '@carbon/icons/svg/32/close.svg?raw';

import { Environment } from '@/model/Environment';

export class CdsEsDocsPanelToggleButton extends HTMLElement {
  static observedAttributes = [
    'blocked',
    'label',
  ];

  #button: HTMLButtonElement = document.createElement('button');
  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-has-overlay') {
        const overlayExists = document.documentElement.dataset.hasOverlay === 'true';

        if (!overlayExists) {
          this.setAttribute('blocked', 'false');
        } else {
          this.setAttribute('blocked', this.isExpanded ? 'false' : 'true');
        }
      }
    }
  });
  icon?: string;

  set target(value: HTMLElement) {
    this.#button.ariaControlsElements = [value];
  }

  get isExpanded(): boolean {
    return this.#button.getAttribute('aria-expanded') === 'true';
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

    this.shadowRoot?.appendChild(this.#button);

    this.#button.setAttribute('aria-expanded', 'false');
    this.#button.addEventListener('click', () => {
      this.#handleClick();
    });
  }

  #updateButton() {
    if (this.isExpanded) {
      this.#button.setAttribute('aria-label', `Close ${this.getAttribute('label')}`);
      this.#button.innerHTML = closeIcon;
      document.documentElement.dataset.hasOverlay = 'true';
    } else {
      this.#button.setAttribute('aria-label', `Open ${this.getAttribute('label')}`);
      this.#button.innerHTML = this.icon ?? '';
      document.documentElement.dataset.hasOverlay = 'false';
    }

    this.#button.setAttribute('title', this.#button.getAttribute('aria-label')!);
  }

  #handleClick() {
    const newState = !this.isExpanded;
    this.#button.setAttribute('aria-expanded', newState.toString());
    this.#updateButton();

    const target = this.#button.ariaControlsElements?.[0] as HTMLElement | undefined;

    if (target) {
      target.dataset.isExpanded = newState.toString();
    }
  }

  #handleEnvironmentChange() {
    if (this.getAttribute('auto-close-on-environment-change') === 'true' && this.isExpanded) {
      this.#handleClick();
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
    this.#updateButton();

    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-has-overlay'],
    });

    Environment.addEventListener('change', this.#handleEnvironmentChange.bind(this));
  }

  disconnectedCallback() {
    this.observer.disconnect();
    Environment.removeEventListener('change', this.#handleEnvironmentChange.bind(this));
  }
};
