/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'tooltip',
  name: 'Tooltip',
  references: [
    {
      label: '"hint" popover',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using#using_hint_popover_state',
    },
    {
      label: 'Tooltip',
      url: 'https://carbondesignsystem.com/components/tooltip/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: '[popover="hint"]',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<button>
  Toggle tooltip

  <div popover="hint">
    Tooltip
  </div>
</button>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
    setup: (frame) => {
      const button = frame.querySelector('button');
      const tooltip = button?.querySelector<HTMLElement>('[popover="hint"]');

      button?.addEventListener('mouseover', () => {
        tooltip?.showPopover({
          source: button,
        });
      });

      button?.addEventListener('mouseout', () => {
        tooltip?.hidePopover();
      });
    },
  },
];
