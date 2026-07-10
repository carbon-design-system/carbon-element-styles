/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

import exportIcon from '@carbon/icons/svg/32/export.svg?raw';

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
    {
      key: 'alignment',
      type: `| 'start start'\n| 'start center'\n| 'start end'\n| 'center start'\n| 'center end'\n| 'end start'\n| 'end center'\n| 'end end'`,
      default: 'start center',
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

<br /><br />

<button>
  ${exportIcon}

  <div popover="hint">
    Export asset
  </div>
</button>
`;

function setup(frame: HTMLElement) {
  for (const button of frame.querySelectorAll('button')) {
    const tooltip = button.querySelector<HTMLElement>('[popover="hint"]');

    button.addEventListener('mouseover', () => {
      tooltip?.showPopover({
        source: button,
      });
    });

    button.addEventListener('mouseout', () => {
      tooltip?.hidePopover();
    });
  }
}

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
    id: 'alignment-start-start',
    name: 'Alignment: start start',
    html: {
      raw: html,
    },
    setup,
    config: {
      alignment: `'start start'`,
    },
  },
  {
    id: 'alignment-start-center',
    name: 'Alignment: start center',
    html: {
      raw: html,
    },
    setup,
    config: {
      alignment: `'start center'`,
    },
  },
  {
    id: 'alignment-start-end',
    name: 'Alignment: start end',
    html: {
      raw: html,
    },
    setup,
    config: {
      alignment: `'start end'`,
    },
  },
  {
    id: 'alignment-center-start',
    name: 'Alignment: center start',
    html: {
      raw: html,
    },
    setup,
    config: {
      alignment: `'center start'`,
    },
  },
  {
    id: 'alignment-center-end',
    name: 'Alignment: center end',
    html: {
      raw: html,
    },
    setup,
    config: {
      alignment: `'center end'`,
    },
  },
  {
    id: 'alignment-end-start',
    name: 'Alignment: end start',
    html: {
      raw: html,
    },
    setup,
    config: {
      alignment: `'end start'`,
    },
  },
  {
    id: 'alignment-end-center',
    name: 'Alignment: end center',
    html: {
      raw: html,
    },
    setup,
    config: {
      alignment: `'end center'`,
    },
  },
  {
    id: 'alignment-end-end',
    name: 'Alignment: end end',
    html: {
      raw: html,
    },
    setup,
    config: {
      alignment: `'end end'`,
    },
  },
];
