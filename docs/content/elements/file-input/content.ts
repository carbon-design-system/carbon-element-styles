/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from '@/components/ElementDemoContent';

export { default as css } from './demo.scss?inline';
export { default as html } from './demo.html';
export { default as scssDoc } from 'virtual:scss-docs/file-input';

const elementDemoContent = document.createElement('cds-es-docs-element-demo-content') as CdsEsDocsElementDemoContent;

elementDemoContent.label = 'File input';

elementDemoContent.references = [
  {
    label: '<input type="file">',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file',
  },
  {
    label: 'File uploader',
    url: 'https://carbondesignsystem.com/components/file-uploader/usage/',
  },
];

elementDemoContent.demos.set('default', {});

export default elementDemoContent;
