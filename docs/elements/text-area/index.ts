/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'text-area',
  name: 'Text area',
  references: [
    {
      label: '<textarea>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea',
    },
    {
      label: 'Text area',
      url: 'https://carbondesignsystem.com/components/text-input/usage/#text-area',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'label:has(textarea)',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<label>
  Enabled
  <textarea></textarea>
</label>

<br />

<label>
  Read only
  <textarea readonly>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.</textarea>
</label>

<br />

<label>
  Disabled
  <textarea disabled>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.</textarea>
</label>

<br />

<label>
  Invalid
  <textarea aria-invalid="true">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.</textarea>
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
