/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { version } from '../../../package.json';

const target = document.querySelector<HTMLElement>('body > header .version');

export function setup() {
  if (target) {
    target.innerText = `v${version}`;
  }
}

export function update() {}
