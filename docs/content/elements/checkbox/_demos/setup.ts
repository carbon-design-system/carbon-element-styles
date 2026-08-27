/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const setup = (frame: ShadowRoot) => {
  Array.from(frame.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'))
    .slice(-2)
    .forEach((checkbox) => {
      checkbox.indeterminate = true;
    });
};
