/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from "./index.scss?inline";

export class CdsEsDocsTag extends HTMLElement {
  #slot = document.createElement("slot");

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);
  }

  connectedCallback() {
    const container =
      this.getAttribute("kind") === "operational"
        ? document.createElement("button")
        : document.createElement("div");

    if (container instanceof HTMLButtonElement) {
      container.setAttribute("type", "button");
    }

    container.appendChild(this.#slot);
    this.shadowRoot?.replaceChildren(container);

    if (!this.hasAttribute("color")) {
      this.setAttribute("color", "gray");
    }
  }
}
