/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'popover',
  name: 'Popover',
  references: [
    {
      label: 'Popover API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Popover_API',
    },
    {
      label: 'Popover',
      url: 'https://carbondesignsystem.com/components/popover/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: '[popover]',
    },
    {
      key: 'caret',
      type: 'boolean',
      default: 'true',
    },
    {
      key: 'alignment',
      type: `| 'start start'\n| 'start center'\n| 'start end'\n| 'center start'\n| 'center end'\n| 'end start'\n| 'end center'\n| 'end end'`,
      default: 'end center',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<button popovertarget="popover-demo-01" popovertargetaction="toggle">
  Toggle popover
</button>

<div id="popover-demo-01" popover>
  Popover content

  <br /><br />

  <label>
    Text input
    <input type="text" />
  </label>
</div>

<br /><br />

<div data-tile>
  Within tile

  <br /><br />

  <button popovertarget="popover-demo-02" popovertargetaction="toggle">
    Toggle popover
  </button>

  <div id="popover-demo-02" popover>
    Popover content

    <br /><br />

    <label>
      Text input
      <input type="text" />
    </label>
  </div>
</div>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
  },
  {
    id: 'with-caret',
    name: 'With caret',
    html: {
      raw: html,
    },
    config: {
      caret: 'true',
    },
  },
  {
    id: 'without-caret',
    name: 'Without caret',
    html: {
      raw: html,
    },
    config: {
      caret: 'false',
    },
  },
  {
    id: 'alignment-start-start',
    name: 'Alignment: start start',
    html: {
      raw: html,
    },
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
    config: {
      alignment: `'end end'`,
    },
  },
];
