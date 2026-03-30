/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { prefix } from '../config';
import { get as getEnvironment } from '../environment';
import * as elements from '../../elements';

const target = document.getElementById('demo');

export function setup() {
  update();
}

export function update() {
  const demo = Object.values(elements)
    .find((e) => e.meta.id === getEnvironment().element)?.demos
    .find((d) => d.id === getEnvironment().demo);

  if (target && demo) {
    target.innerHTML = demo.html.raw;
    demo.setup?.(target);

    for (const [key, value] of Object.entries(getEnvironment())) {
      target.setAttribute(`data-${prefix}-${key}`, value);
    }
  }
}
