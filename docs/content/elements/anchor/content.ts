/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from '@/components/ElementDemoContent';

export { default as css } from './demo.scss?inline';
export { default as html } from './demo.html';
export { default as scssDoc } from 'virtual:scss-docs/anchor';

const elementDemoContent = document.createElement('cds-es-docs-element-demo-content') as CdsEsDocsElementDemoContent;

elementDemoContent.label = 'Abbreviation';

elementDemoContent.references = [
  {
    label: '<a>',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a',
  },
  {
    label: 'Link',
    url: 'https://carbondesignsystem.com/components/link/usage/',
  },
];

elementDemoContent.demos.set('default', {});
elementDemoContent.demos.set('with-visited-styles', { scssConfig: { 'emit-visited': 'true' } });
elementDemoContent.demos.set('without-visited-styles', { scssConfig: { 'emit-visited': 'false' } });

export default elementDemoContent;
