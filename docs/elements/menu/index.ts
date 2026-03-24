/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

import saveCopyIcon from '@carbon/icons/svg/32/copy--file.svg?raw';
import exportIcon from '@carbon/icons/svg/32/export.svg?raw';
import cutIcon from '@carbon/icons/svg/32/cut.svg?raw';
import copyIcon from '@carbon/icons/svg/32/copy.svg?raw';
import pasteIcon from '@carbon/icons/svg/32/paste.svg?raw';
import boldIcon from '@carbon/icons/svg/32/text--bold.svg?raw';
import italicIcon from '@carbon/icons/svg/32/text--italic.svg?raw';
import deleteIcon from '@carbon/icons/svg/32/trash-can.svg?raw';

export const meta = {
  id: 'menu',
  name: 'Menu',
  references: [
    {
      label: 'menu role',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role',
    },
    {
      label: 'Menu',
      url: 'https://carbondesignsystem.com/components/menu/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'ul[role="menu"]',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<ul role="menu">
  <li role="menuitem" tabindex="0">Rename</li>
  <li role="menuitem" tabindex="0">Restart</li>
  <li role="separator"></li>
  <li role="menuitem" tabindex="0">Stop</li>
</ul>

<br /><br />

<ul role="menu">
  <li role="menuitem" tabindex="0">
    ${saveCopyIcon}
    Save as copy
  </li>
  <li role="menuitem" tabindex="0">
    ${exportIcon}
    Export
  </li>
</ul>

<br /><br />

<ul role="menu">
  <li role="menuitemradio" tabindex="0" aria-checked="false">Small</li>
  <li role="menuitemradio" tabindex="0" aria-checked="true">Medium</li>
  <li role="menuitemradio" tabindex="0" aria-checked="false">Large</li>
</ul>

<br /><br />

<ul role="menu">
  <li role="menuitem" tabindex="0">
    ${cutIcon}
    Cut
  </li>
  <li role="menuitem" tabindex="0">
    ${copyIcon}
    Copy
  </li>
  <li role="menuitem" tabindex="0" aria-disabled="true">
    ${pasteIcon}
    Paste
  </li>

  <li role="separator"></li>

  <li role="none">
    <ul role="group" aria-label="Font style">
      <li role="menuitemcheckbox" tabindex="0" aria-checked="true">
        ${boldIcon}
        Bold
      </li>
      <li role="menuitemcheckbox" tabindex="0" aria-checked="false">
        ${italicIcon}
        Italic
      </li>
    </ul>
  </li>

  <li role="separator"></li>

  <li role="none">
    <ul role="group" aria-label="Text decoration">
      <li role="menuitemradio" tabindex="0" aria-checked="true">None</li>
      <li role="menuitemradio" tabindex="0" aria-checked="false">Overline</li>
      <li role="menuitemradio" tabindex="0" aria-checked="false">Line-through</li>
      <li role="menuitemradio" tabindex="0" aria-checked="false">Underline</li>
    </ul>
  </li>

  <li role="separator"></li>

  <li role="menuitem" tabindex="0">
    ${deleteIcon}
    Delete
  </li>
</ul>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
  },
];
