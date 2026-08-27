/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const setup = (frame: ShadowRoot) => {
  for (const button of frame.querySelectorAll("button")) {
    const tooltip = button.querySelector<HTMLElement>('[popover="hint"]');

    button.addEventListener("mouseover", () => {
      tooltip?.showPopover({
        source: button,
      });
    });

    button.addEventListener("mouseout", () => {
      tooltip?.hidePopover();
    });
  }
};
