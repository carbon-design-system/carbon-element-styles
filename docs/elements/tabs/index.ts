/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'tabs',
  name: 'Tabs',
  references: [
    {
      label: 'tablist role',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role',
    },
    {
      label: 'Tabs',
      url: 'https://carbondesignsystem.com/components/tabs/usage/',
    },
    {
      label: 'Content switcher',
      url: 'https://carbondesignsystem.com/components/content-switcher/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: '[role="tablist"]',
    },
    {
      key: 'kind',
      type: `| 'line'\n| 'contained'\n| 'content-switcher'\n| 'content-switcher--low-contrast'`,
      default: `'line'`,
    },
  ],
  notes: [
    'Succeeding elements with [role="tabpanel"] will automatically be targeted to apply appropriate styling.'
  ],
} as const satisfies Meta;

const html = /* html */`
<div role="tablist">
  <button role="tab" id="tab-1" aria-controls="tabpanel-1" aria-selected="true" type="button">
    Lorem ipsum
  </button>
  <button role="tab" id="tab-2" aria-controls="tabpanel-2" aria-selected="false" type="button">
    Dolor sit
  </button>
  <button role="tab" id="tab-3" aria-controls="tabpanel-3" aria-selected="false" type="button">
    Amet
  </button>
  <button role="tab" id="tab-4" aria-controls="tabpanel-4" aria-selected="false" type="button" disabled>
    Consetetur
  </button>
</div>
<div role="tabpanel" id="tabpanel-1" aria-labelledby="tab-1">
  Tab panel 1
</div>
<div role="tabpanel" id="tabpanel-2" aria-labelledby="tab-2" hidden>
  Tab panel 2
</div>
<div role="tabpanel" id="tabpanel-3" aria-labelledby="tab-3" hidden>
  Tab panel 3
</div>
<div role="tabpanel" id="tabpanel-4" aria-labelledby="tab-4" hidden>
  Tab panel 4
</div>
`;

const setup = (frame: HTMLElement) => {
  frame.querySelectorAll('[role="tab"]').forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('aria-controls');

      if (targetId) {
        const target = frame.querySelector(`#${targetId}`);

        if (target) {
          frame.querySelectorAll('[role="tab"]').forEach((t) => {
            t.setAttribute('aria-selected', 'false');
          });

          frame.querySelectorAll('[role="tabpanel"]').forEach((t) => {
            t.setAttribute('hidden', '');
          });

          tab.setAttribute('aria-selected', 'true');
          target.removeAttribute('hidden');
        }
      }
    });
  });
};

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
    setup,
  },
  {
    id: 'line',
    name: 'Line',
    html: {
      raw: html,
    },
    config: {
      kind: `'line'`,
    },
    setup,
  },
  {
    id: 'contained',
    name: 'Contained',
    html: {
      raw: html,
    },
    config: {
      kind: `'contained'`,
    },
    setup,
  },
  {
    id: 'content-switcher',
    name: 'Content switcher',
    html: {
      raw: html,
    },
    config: {
      kind: `'content-switcher'`,
    },
    setup,
  },
  {
    id: 'content-switcher--low-contrast',
    name: 'Content switcher (low contrast)',
    html: {
      raw: html,
    },
    config: {
      kind: `'content-switcher--low-contrast'`,
    },
    setup,
  },
];
