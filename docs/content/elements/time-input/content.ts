/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from '@/components/ElementDemoContent';

export { default as css } from './demo.scss?inline';
export { default as html } from './demo.html';
export { default as scssDoc } from 'virtual:scss-docs/time-input';

const elementDemoContent = document.createElement('cds-es-docs-element-demo-content') as CdsEsDocsElementDemoContent;

elementDemoContent.label = 'Time input';

elementDemoContent.references = [
  {
    label: '<input type="time">',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/time',
  },
  {
    label: 'Date picker',
    url: 'https://carbondesignsystem.com/components/date-picker/usage/',
  },
];

elementDemoContent.demos.set('default', {});
elementDemoContent.demos.set('block', { scssConfig: { axis: `'block'` } });
elementDemoContent.demos.set('inline', { scssConfig: { axis: `'inline'` } });

export default elementDemoContent;
