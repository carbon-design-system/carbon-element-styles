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

import typePropertyIcon from "@carbon/icons/svg/32/paint-brush.svg?raw";
import typeFunctionIcon from "@carbon/icons/svg/32/function--2.svg?raw";
import typeSelectorIcon from "@carbon/icons/svg/32/select--01.svg?raw";
import typeAtRuleIcon from "@carbon/icons/svg/32/at.svg?raw";
import typeLengthIcon from "@carbon/icons/svg/32/ruler--alt.svg?raw";

import launchDialogIcon from "@carbon/icons/svg/32/arrow--up-right.svg?raw";

import type { CdsEsDocsTag } from "@/components/Tag";
import { browserNames, browsers, type BrowserCompatibility } from "@/model/BrowserCompatibility";

import { getBaselineStatus } from "@/utilities/baseline";

export class CdsEsDocsBrowserCompatibility extends HTMLElement {
  #tag = document.createElement("cds-es-docs-tag") as CdsEsDocsTag;
  #popover = document.createElement("div");
  #dialog = document.createElement("dialog");

  #support?: BrowserCompatibility;

  set support(value: BrowserCompatibility | undefined) {
    this.#support = value;

    this.shadowRoot?.appendChild(this.#tag);

    this.#renderTag();
    this.#renderPopover();
    this.#renderDialog();
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

    this.shadowRoot?.append(this.#popover, this.#dialog);
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
            .filter((b) => typeof b.date === "string")
            .toSorted(
              (a, b) => new Date(b.date as string).getTime() - new Date(a.date as string).getTime(),
            )
            .at(0)
        : undefined;

    if (baselineStatus === "high") {
      return {
        color: "green",
        label: "Wide browser support",
        since: since ? `since ${this.#formatDate(since.date as string)}` : undefined,
        icon: this.#getIconAsSvgElement(widelyAvailableIcon),
      };
    }

    if (baselineStatus === "low") {
      return {
        color: "blue",
        label: "New browser support",
        since: since ? `since ${this.#formatDate(since.date as string)}` : undefined,
        icon: this.#getIconAsSvgElement(newlyAvailableIcon),
      };
    }

    if (baselineStatus === false) {
      return {
        color: "gray",
        label: "Limited browser support",
        icon: this.#getIconAsSvgElement(limitedAvailableIcon),
      };
    }

    return {
      color: "gray",
      label: "Browser compatibility unkown",
      icon: this.#getIconAsSvgElement(unknownAvailableIcon),
    };
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

      const launchDialogButton = document.createElement("button");
      launchDialogButton.appendChild(this.#getIconAsSvgElement(launchDialogIcon));
      launchDialogButton.addEventListener("click", () => {
        this.#dialog.showModal();
      });

      this.#popover.replaceChildren(ul, launchDialogButton);
    }
  }

  #getTypeIcon(type: BrowserCompatibility["features"][0]["type"]): SVGElement {
    const icons: Record<BrowserCompatibility["features"][0]["type"], string> = {
      property: typePropertyIcon,
      function: typeFunctionIcon,
      selector: typeSelectorIcon,
      ["at-rule"]: typeAtRuleIcon,
      length: typeLengthIcon,
    };

    return this.#getIconAsSvgElement(icons[type]);
  }

  #getFeatureCompatibilityTable(): HTMLTableElement {
    const table = document.createElement("table");

    const thead = document.createElement("thead");
    table.appendChild(thead);

    const headerRow = thead.insertRow();

    for (const label of ["Feature", ...browsers.map((browser) => browserNames[browser])]) {
      const cell = document.createElement("th");
      cell.textContent = label;
      headerRow.appendChild(cell);
    }

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    const sortedFeatures = Object.values(this.#support?.features ?? []).toSorted((a, b) => {
      function convertBrowserDateToNumber(
        browser: BrowserCompatibility["browsers"][(typeof browsers)[number]],
      ) {
        return browser.date === false
          ? Infinity
          : typeof browser.date === "string"
            ? new Date(browser.date).getTime()
            : -Infinity;
      }

      const aNewest = Object.values(a.browsers)
        .map(convertBrowserDateToNumber)
        .toSorted((a, b) => b - a)
        .at(0)!;
      const bNewest = Object.values(b.browsers)
        .map(convertBrowserDateToNumber)
        .toSorted((a, b) => b - a)
        .at(0)!;

      return bNewest - aNewest;
    });

    for (const feature of sortedFeatures) {
      const row = tbody.insertRow();

      const featureCell = row.insertCell();
      featureCell.textContent = feature.label;

      const typeIcon = this.#getTypeIcon(feature.type);
      typeIcon.classList.add("status");
      featureCell.prepend(typeIcon);

      for (const browser of browsers) {
        const release = feature.browsers[browser];
        const baselineStatus = getBaselineStatus([release]);
        const status = this.#getStatus(baselineStatus);

        const cell = row.insertCell();
        cell.textContent = release.version || "--";

        const icon = status.icon;
        icon.classList.add("status", `status--${status.color}`);
        cell.prepend(icon);
      }
    }

    return table;
  }

  #renderDialog() {
    const header = document.createElement("header");
    header.textContent = "Browser compatibility";

    const closeButton = document.createElement("button");
    closeButton.addEventListener("click", () => {
      this.#dialog.close();
    });
    header.appendChild(closeButton);

    const body = document.createElement("div");

    const disclaimer = document.createElement("p");
    disclaimer.textContent =
      "This compatibility report was automatically generated from the source code and may not cover all used CSS features. Please open an issue if you find a mistake.";
    body.appendChild(disclaimer);

    const legend = document.createElement("ul");
    body.appendChild(legend);

    for (const [baselineStatus, label] of [
      ["high", "Released ≥ 30 months ago"],
      ["low", "Released < 30 months ago"],
      [false, "Not supported"],
    ] as const) {
      const definition = this.#getStatus(baselineStatus);

      const legendItem = document.createElement("li");
      legendItem.textContent = label;

      const icon = definition.icon;
      icon.classList.add("status", `status--${definition.color}`);
      legendItem.prepend(icon);

      legend.appendChild(legendItem);
    }

    const container = document.createElement("div");
    container.classList.add("feature-compatibility-table");

    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table-container");
    tableContainer.appendChild(this.#getFeatureCompatibilityTable());
    container.appendChild(tableContainer);

    this.#dialog.replaceChildren(header, body, container);
  }

  connectedCallback() {}
}
