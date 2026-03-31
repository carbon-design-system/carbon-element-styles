/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

export class DocsTabs extends HTMLElement {
  #stylesheet: CSSStyleSheet = new CSSStyleSheet();
  #tablist: HTMLDivElement = document.createElement('div');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #activateTab(tab: HTMLButtonElement) {
    for (const activeTab of (this.shadowRoot?.querySelectorAll('[role="tab"][aria-selected="true"]') ?? [])) {
      activeTab.setAttribute('aria-selected', 'false');

      for (const element of (activeTab.ariaControlsElements ?? [])) {
        (element as HTMLElement).hidden = true;
      }
    }

    tab.setAttribute('aria-selected', 'true');

    for (const element of (tab.ariaControlsElements ?? [])) {
      (element as HTMLElement).hidden = false;
    }
  }

  #createTab(tabpanel: Element): HTMLButtonElement {
    const button = document.createElement('button');
    button.textContent = tabpanel.getAttribute('label');
    button.setAttribute('type', 'button');
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', 'false');
    button.ariaControlsElements = [tabpanel];
    button.addEventListener('click', () => {
      this.#activateTab(button);
    });

    tabpanel.ariaLabelledByElements = [button];

    return button;
  }

  #renderTablist() {
    this.#tablist.replaceChildren(
      ...Array.from(this.querySelectorAll('docs-tab-panel') ?? [])
        .map((tabpanel) => this.#createTab(tabpanel)),
    );
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.#stylesheet.replace(styles);
      this.shadowRoot.adoptedStyleSheets.push(this.#stylesheet);

      this.#tablist.setAttribute('role', 'tablist');
      this.#renderTablist();

      this.shadowRoot.appendChild(this.#tablist);

      const slot = document.createElement('slot');
      this.shadowRoot.appendChild(slot);

      setTimeout(() => {
        const firstTab = this.#tablist.querySelector<HTMLButtonElement>('button[role="tab"]');

        if (firstTab) {
          this.#activateTab(firstTab);
        }
      });
    }
  }
};
