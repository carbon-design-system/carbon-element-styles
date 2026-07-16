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

elementDemoContent.label = 'Table';

elementDemoContent.references = [
  {
    label: '<table>',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table',
  },
  {
    label: 'Data table',
    url: 'https://carbondesignsystem.com/components/data-table/usage/',
  },
  {
    label: 'Structured list',
    url: 'https://carbondesignsystem.com/components/structured-list/usage/',
  },
];

elementDemoContent.css.replace(css);
elementDemoContent.scssDoc = scssDoc;

elementDemoContent.demos.set('default', { html });
elementDemoContent.demos.set('data-table', { html, scssConfig: { kind: `'data-table'` } });
elementDemoContent.demos.set('structured-list', { html, scssConfig: { kind: `'structured-list'` } });
elementDemoContent.demos.set('structured-list--flush', { html, scssConfig: { kind: `'structured-list--flush'` } });

export default elementDemoContent;
