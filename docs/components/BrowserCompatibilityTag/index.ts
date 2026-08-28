/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from "./index.scss?inline";

import widelyAvailableIcon from "@carbon/icons/svg/32/checkmark--outline.svg?raw";
import newlyAvailableIcon from "@carbon/icons/svg/32/pending.svg?raw";
import limitedAvailableIcon from "@carbon/icons/svg/32/misuse--outline.svg?raw";
import unknownAvailableIcon from "@carbon/icons/svg/32/help.svg?raw";

import type { CdsEsDocsTag } from "@/components/Tag";
import { type BrowserCompatibility } from "@/model/BrowserCompatibility";

import { getBaselineStatus } from "@/utilities/baseline";

export class CdsEsDocsBrowserCompatibilityTag extends HTMLElement {
  #tag = document.createElement("cds-es-docs-tag") as CdsEsDocsTag;
  #popover = document.createElement("div");

  #support?: BrowserCompatibility;

  set support(value: BrowserCompatibility | undefined) {
    this.#support = value;

    this.shadowRoot?.appendChild(this.#tag);

    this.#renderTag();
    this.#renderPopover();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

    this.#tag.setAttribute("kind", "operational");
    this.#tag.addEventListener("click", this.#handleClick);

    this.#popover.setAttribute("popover", "");

    this.shadowRoot?.appendChild(this.#popover);
  }

  #handleClick = () => {
    this.#popover.togglePopover({
      source: this.#tag,
    });
  };

  #getIconAsSvgElement(svg: string): SVGElement {
    const temp = document.createElement("span");
    temp.innerHTML = svg;

    return temp.firstElementChild as SVGElement;
  }

  #getStatus(): {
    color: string;
    label: string;
    since?: string;
    icon: SVGElement;
  } {
    const baselineStatus = getBaselineStatus(this.#support?.browsers);
    const since =
      baselineStatus === "high" || baselineStatus === "low"
        ? Object.values(this.#support?.browsers ?? [])
            .toSorted(
              (a, b) => new Date(b.date as string).getTime() - new Date(a.date as string).getTime(),
            )
            .at(0)
        : undefined;

    const formatDate = new Intl.DateTimeFormat("en-us", {
      month: "long",
      year: "numeric",
    }).format;

    if (baselineStatus === "high") {
      return {
        color: "green",
        label: "Widely available",
        since: `since ${formatDate(new Date(since!.date as string))}`,
        icon: this.#getIconAsSvgElement(widelyAvailableIcon),
      };
    }

    if (baselineStatus === "low") {
      return {
        color: "blue",
        label: "Newly available",
        since: `since ${formatDate(new Date(since!.date as string))}`,
        icon: this.#getIconAsSvgElement(newlyAvailableIcon),
      };
    }

    if (baselineStatus === false) {
      return {
        color: "gray",
        label: "Limited availability",
        icon: this.#getIconAsSvgElement(limitedAvailableIcon),
      };
    }

    return {
      color: "gray",
      label: "Browser compatibility unkown",
      icon: this.#getIconAsSvgElement(unknownAvailableIcon),
    };
  }

  #renderPopover() {}

  #renderTag() {
    const status = this.#getStatus();

    this.#tag.setAttribute("color", status.color);

    const label = document.createElement("span");
    label.textContent = status.label;

    const content = [status.icon, label];

    if (status.since) {
      const since = document.createElement("b");
      since.textContent = status.since;

      content.push(since);
    }

    this.#tag.replaceChildren(...content);
  }

  connectedCallback() {}
}
