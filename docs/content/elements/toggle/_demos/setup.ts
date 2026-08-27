/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const setup = (frame: ShadowRoot) => {
  frame.querySelectorAll('button[role="switch"]').forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const state = toggle.getAttribute("aria-checked") === "true";
      toggle.setAttribute("aria-checked", (!state).toString());
      toggle.children[Number(state)].setAttribute("aria-hidden", "true");
      toggle.children[Number(!state)].setAttribute("aria-hidden", "false");
    });
  });
};
