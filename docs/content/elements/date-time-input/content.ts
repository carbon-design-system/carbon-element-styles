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

elementDemoContent.label = 'Date and time input';

elementDemoContent.references = [
  {
    label: '<input type="datetime-local">',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local',
  },
  {
    label: 'Date picker',
    url: 'https://carbondesignsystem.com/components/date-picker/usage/',
  },
];

elementDemoContent.css.replace(css);
elementDemoContent.scssDoc = scssDoc;

elementDemoContent.demos.set('default', { html });
elementDemoContent.demos.set('block', { html, scssConfig: { axis: `'block'` } });
elementDemoContent.demos.set('inline', { html, scssConfig: { axis: `'inline'` } });

export default elementDemoContent;
