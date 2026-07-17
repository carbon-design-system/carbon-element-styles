/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from '@/components/ElementDemoContent';

export { default as css } from './demo.scss?inline';
export { default as html } from './demo.html';
export { default as scssDoc } from 'virtual:scss-docs/block-quotation';

const elementDemoContent = document.createElement('cds-es-docs-element-demo-content') as CdsEsDocsElementDemoContent;

elementDemoContent.label = 'Block quotation';

elementDemoContent.references = [
  {
    label: '<blockquote>',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote',
  },
  {
    label: '<cite>',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/cite',
  },
  {
    label: 'Type sets',
    url: 'https://carbondesignsystem.com/elements/typography/type-sets/',
  },
];

elementDemoContent.notes = /* md */`
To denote a source, use a suceeding \`<cite>\` element.
`;

elementDemoContent.demos.set('default', {});

export default elementDemoContent;
