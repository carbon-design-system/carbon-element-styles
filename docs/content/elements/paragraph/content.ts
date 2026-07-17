/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from '@/components/ElementDemoContent';

export { default as css } from './demo.scss?inline';
export { default as html } from './demo.html';
export { default as scssDoc } from 'virtual:scss-docs/paragraph';

const elementDemoContent = document.createElement('cds-es-docs-element-demo-content') as CdsEsDocsElementDemoContent;

elementDemoContent.label = 'Paragraph';

elementDemoContent.references = [
  {
    label: '<p>',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p',
  },
  {
    label: 'Type basics',
    url: 'https://ibm.com/design/language/typography/type-basics',
  },
];

elementDemoContent.demos.set('default', {});

export default elementDemoContent;
