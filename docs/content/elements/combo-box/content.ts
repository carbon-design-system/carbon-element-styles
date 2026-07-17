/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from '@/components/ElementDemoContent';

export { default as css } from './demo.scss?inline';
export { default as html } from './demo.html';
export { default as scssDoc } from 'virtual:scss-docs/combo-box';

const elementDemoContent = document.createElement('cds-es-docs-element-demo-content') as CdsEsDocsElementDemoContent;

elementDemoContent.label = 'Combo box';

elementDemoContent.references = [
  {
    label: '<datalist> (textual)',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist#textual_types',
  },
  {
    label: 'Combo box',
    url: 'https://carbondesignsystem.com/components/dropdown/usage/#combo-box',
  },
];

elementDemoContent.demos.set('default', {});
elementDemoContent.demos.set('block', { scssConfig: { axis: `'block'` } });
elementDemoContent.demos.set('inline', { scssConfig: { axis: `'inline'` } });

export default elementDemoContent;
