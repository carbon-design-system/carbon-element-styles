/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const setup = (frame: ShadowRoot) => {
  frame.querySelectorAll('[role="tab"]').forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("aria-controls");

      if (targetId) {
        const target = frame.querySelector(`#${targetId}`);

        if (target) {
          frame.querySelectorAll('[role="tab"]').forEach((t) => {
            t.setAttribute("aria-selected", "false");
          });

          frame.querySelectorAll('[role="tabpanel"]').forEach((t) => {
            t.setAttribute("hidden", "");
          });

          tab.setAttribute("aria-selected", "true");
          target.removeAttribute("hidden");
        }
      }
    });
  });
};
