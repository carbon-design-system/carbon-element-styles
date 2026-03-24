/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import themeIcon from '@carbon/icons/svg/32/color-palette.svg?raw';
import modeIcon from '@carbon/icons/svg/32/scale.svg?raw';
import sizeIcon from '@carbon/icons/svg/32/fit-to-height.svg?raw';
import densityIcon from '@carbon/icons/svg/32/fit-to-width.svg?raw';

import {
  set as setEnvironment,
  get as getEnvironment,
} from '../environment';

const target = document.getElementById('controls');

export function setup() {
  const icons = {
    theme: themeIcon,
    mode: modeIcon,
    size: sizeIcon,
    density: densityIcon,
  };

  for (const [key, value] of Object.entries(getEnvironment())) {
    const select = target?.querySelector<HTMLSelectElement>(`select[data-control-id="${key}"]`);

    if (select) {
      select.value = value;
    }
  }

  for (const select of (target?.querySelectorAll('select') ?? [])) {
    const icon = icons[select.dataset.controlId];

    if (icon) {
      const fragment = document.createElement('div');
      fragment.innerHTML = icon;

      const svg = fragment.querySelector('svg');

      if (svg) {
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('fill', 'currentColor');

        select.parentNode?.prepend(svg);
      }
    }

    select.addEventListener('change', () => {
      setEnvironment({
        [select.dataset.controlId]: select.value,
      });
    });
  }
}

export function update() {

}
