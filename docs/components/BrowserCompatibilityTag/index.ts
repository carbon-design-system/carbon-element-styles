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
import { browserNames, browsers, type BrowserCompatibility } from "@/model/BrowserCompatibility";

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

  #formatDate(date: string): string {
    return new Intl.DateTimeFormat("en-us", {
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  }

  #getStatus(baselineStatus: ReturnType<typeof getBaselineStatus>): {
    color: string;
    label: string;
    since?: string;
    icon: SVGElement;
  } {
    const since =
      baselineStatus === "high" || baselineStatus === "low"
        ? Object.values(this.#support?.browsers ?? [])
            .toSorted(
              (a, b) => new Date(b.date as string).getTime() - new Date(a.date as string).getTime(),
            )
            .at(0)
        : undefined;

    if (baselineStatus === "high") {
      return {
        color: "green",
        label: "Widely available",
        since: `since ${this.#formatDate(since!.date as string)}`,
        icon: this.#getIconAsSvgElement(widelyAvailableIcon),
      };
    }

    if (baselineStatus === "low") {
      return {
        color: "blue",
        label: "Newly available",
        since: `since ${this.#formatDate(since!.date as string)}`,
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

  #renderPopover() {
    if (this.#support) {
      const ul = document.createElement("ul");
      ul.setAttribute("role", "list");

      for (const browser of browsers) {
        const release = this.#support.browsers[browser];
        const baselineStatus = getBaselineStatus([release]);
        const status = this.#getStatus(baselineStatus);

        const li = document.createElement("li");

        const icon = status.icon;
        icon.classList.add("status", `status--${status.color}`);
        li.appendChild(icon);

        const heading = document.createElement("p");
        heading.textContent = browserNames[browser];
        li.appendChild(heading);

        const subline = document.createElement("p");
        subline.textContent =
          release.version && release.date
            ? `since ${release.version} (${this.#formatDate(release.date)})`
            : baselineStatus === false
              ? "Unsupported"
              : "Unknown";
        li.appendChild(subline);

        ul.appendChild(li);
      }

      this.#popover.replaceChildren(ul);
    }
  }

  #renderTag() {
    const status = this.#getStatus(getBaselineStatus(Object.values(this.#support?.browsers ?? [])));

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
