/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'preformatted',
  name: 'Preformatted',
  references: [
    {
      label: '<pre>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre',
    },
    {
      label: 'Multi-line code snippet',
      url: 'https://carbondesignsystem.com/components/code-snippet/usage/#multi-line',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'pre',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<pre>lorem ipsum(): dolor {
  sit(amet)
  consetetur = sadipscing(elitr)

  sed (diam nonumy eirmod) {
    tempor = invidunt
      .ut((labore) => et.dolore.magna)

    aliquyam = erat.sed
    diam.voluptua()
  } at (vero: eos&lt;et&gt;) {
    accusam(et.justo)
    duo = dolores
  }
}</pre>
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
