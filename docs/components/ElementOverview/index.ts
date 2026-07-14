/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

export class CdsEsDocsElementOverview extends HTMLElement {
  #headingElement: HTMLHeadingElement = document.createElement('h1');
  #referencesElement: HTMLElement = document.createElement('section');
  #notesElement: HTMLElement = document.createElement('section');

  label: string = '';
  references: {
    label: string;
    url: string;
  }[] = [];
  notes?: string;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

    const referencesHeading = document.createElement('h2');
    referencesHeading.textContent = 'References';
    this.#referencesElement.append(referencesHeading);

    const referencesList = document.createElement('ul');
    this.#referencesElement.append(referencesList);

    const notesHeading = document.createElement('h2');
    notesHeading.textContent = 'Notes';
    this.#notesElement.append(notesHeading);

    const notesContent = document.createElement('cds-es-docs-markdown-content');
    this.#notesElement.append(notesContent);

    this.shadowRoot?.append(
      this.#headingElement,
      this.#referencesElement,
      this.#notesElement,
    );
  }

  #render() {
    this.#headingElement.textContent = this.label;

    this.#referencesElement.querySelector('ul')?.replaceChildren(...(this.references ?? []).map((reference) => {
      const listItem = document.createElement('li');

      const anchor = document.createElement('a');
      anchor.innerText = `${reference.label} (${new URL(reference.url).hostname})`;
      anchor.setAttribute('href', reference.url);
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noreferrer');

      listItem.appendChild(anchor);

      return listItem;
    }));

    const notesContent = this.#notesElement.querySelector('cds-es-docs-markdown-content');
    if (notesContent) {
      notesContent.textContent = this.notes?.trim() ??  '';
    }
  }

  connectedCallback() {
    this.#render();
  }
};
