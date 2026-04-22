/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

import bannerLight from '../../assets/banner-light.svg';
import bannerDark from '../../assets/banner-dark.svg';

export const meta = {
  id: 'image',
  name: 'Image',
  references: [
    {
      label: '<img>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img',
    },
    {
      label: '<picture>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'img, picture',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="${bannerDark}">
  <img alt="" src="${bannerLight}">
</picture>
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
