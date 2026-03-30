/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import collapsedIcon from '@carbon/icons/svg/32/menu.svg?raw';
import expandedIcon from '@carbon/icons/svg/32/close.svg?raw';

const target = document.querySelector('body > header');

export function setup() {
  const button = document.createElement('button');
  button.setAttribute('aria-controls', 'menu');
  button.setAttribute('aria-expanded', 'false');

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    update();
  });

  target?.prepend(button);

  update();
}

export function update() {
  const button = target?.querySelector('button:first-child');
  const menu = document.getElementById('menu');

  if (button && menu) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.innerHTML = isExpanded
      ? expandedIcon
      : collapsedIcon;
    const label = isExpanded
      ? 'Close menu'
      : 'Open menu';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);

    const controlsToggleButton = document.querySelector('body > header > button:last-child');

    if (isExpanded) {
      controlsToggleButton?.setAttribute('disabled', 'true');
    } else {
      controlsToggleButton?.removeAttribute('disabled');
    }
  }
}
