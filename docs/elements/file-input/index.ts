/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'file-input',
  name: 'File input',
  references: [
    {
      label: '<input type="file">',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file',
    },
    {
      label: 'File uploader',
      url: 'https://carbondesignsystem.com/components/file-uploader/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(input[type="file"])',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<label>
  Upload files
  <input type="file" />
</label>

<br />

<label>
  Upload files (disabled)
  <input type="file" disabled />
</label>
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
