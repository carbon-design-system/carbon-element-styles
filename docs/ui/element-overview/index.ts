/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import {
  get as getEnvironment,
  EnvironmentChangeEvent,
} from '../../js/environment';
import type { Meta } from '../../js/_types';
import * as elements from '../../elements';

export class DocsElementOverview extends HTMLElement {
  #stylesheet: CSSStyleSheet = new CSSStyleSheet();
  #heading: HTMLHeadingElement = document.createElement('h1');
  #references: HTMLElement = document.createElement('section');
  #notes: HTMLElement = document.createElement('section');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  #updateContent() {
    const element = Object.values(elements)
      .find((e) => e.meta.id === getEnvironment().element);
    const meta = element?.meta as Meta | undefined;
    const demo = element?.demos
      .find((d) => d.id === getEnvironment().demo);

    if (meta && demo) {
      this.#heading.textContent = meta.name;

      this.#references.querySelector('ul')?.replaceChildren(...(meta.references ?? []).map((reference) => {
        const listItem = document.createElement('li');

        const anchor = document.createElement('a');
        anchor.innerText = `${reference.label} (${new URL(reference.url).hostname})`;
        anchor.setAttribute('href', reference.url);
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noreferrer');

        listItem.appendChild(anchor);

        return listItem;
      }));

      this.#notes.querySelector('ul')?.replaceChildren(...(meta.notes ?? []).map((note) => {
        const listItem = document.createElement('li');
        listItem.textContent = note;

        return listItem;
      }));
    }
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.#stylesheet.replace(styles);
      this.shadowRoot.adoptedStyleSheets.push(this.#stylesheet);

      const referencesHeading = document.createElement('h2');
      referencesHeading.textContent = 'References';
      this.#references.appendChild(referencesHeading);

      const referencesList = document.createElement('ul');
      this.#references.appendChild(referencesList);

      const notesHeading = document.createElement('h2');
      notesHeading.textContent = 'Notes';
      this.#notes.appendChild(notesHeading);

      const notesList = document.createElement('ul');
      this.#notes.appendChild(notesList);

      window.addEventListener(EnvironmentChangeEvent, () => {
        this.#updateContent();
      });

      this.shadowRoot.appendChild(this.#heading);
      this.shadowRoot.appendChild(this.#references);
      this.shadowRoot.appendChild(this.#notes);
    }
  }
};
