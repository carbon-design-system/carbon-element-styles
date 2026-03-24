/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'toggle',
  name: 'Toggle',
  references: [
    {
      label: 'switch role',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role',
    },
    {
      label: 'Toggle',
      url: 'https://carbondesignsystem.com/components/toggle/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(button[role="switch"])',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<label>
  Toggle
  <button type="button" role="switch" aria-checked="false">
    <span aria-hidden="false">Off</span>
    <span aria-hidden="true">On</span>
  </button>
</label>

<br />

<label>
  Toggle
  <button type="button" role="switch" aria-checked="true">
    <span aria-hidden="true">Off</span>
    <span aria-hidden="false">On</span>
  </button>
</label>

<br />

<label>
  Disabled (off)
  <button type="button" role="switch" aria-checked="false" disabled>
    <span aria-hidden="false">Off</span>
    <span aria-hidden="true">On</span>
  </button>
</label>

<br />

<label>
  Disabled (on)
  <button type="button" role="switch" aria-checked="true" disabled>
    <span aria-hidden="true">Off</span>
    <span aria-hidden="false">On</span>
  </button>
</label>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
    setup: (frame) => {
      frame.querySelectorAll('button[role="switch"]').forEach((toggle) => {
        toggle.addEventListener('click', () => {
          const state = toggle.getAttribute('aria-checked') === 'true';
          toggle.setAttribute('aria-checked', (!state).toString());
          toggle.children[Number(state)].setAttribute('aria-hidden', 'true');
          toggle.children[Number(!state)].setAttribute('aria-hidden', 'false');
        });
      });
    },
  },
];
