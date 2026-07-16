/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from '@/components/ElementDemoContent';

import css from './demo.scss?inline';
import scssDoc from './scss';
import html from './demo.html';

const elementDemoContent = document.createElement('cds-es-docs-element-demo-content') as CdsEsDocsElementDemoContent;

elementDemoContent.label = 'Inserted text';

elementDemoContent.references = [
  {
    label: '<ins>',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ins',
  },
  {
    label: 'Text highlighter',
    url: 'https://labs.carbondesignsystem.com/?path=/docs/react_components-texthighlighter--overview',
  },
];

elementDemoContent.css.replace(css);
elementDemoContent.scssDoc = scssDoc;

elementDemoContent.demos.set('default', { html });

export default elementDemoContent;
