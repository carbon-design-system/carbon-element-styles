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

elementDemoContent.label = 'Popover';

elementDemoContent.references = [
  {
    label: 'Popover API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Popover_API',
  },
  {
    label: 'Popover',
    url: 'https://carbondesignsystem.com/components/popover/usage/',
  },
];

elementDemoContent.css.replace(css);
elementDemoContent.scssDoc = scssDoc;

elementDemoContent.demos.set('default', { html });
elementDemoContent.demos.set('with-caret', { html, scssConfig: { caret: 'true' } });
elementDemoContent.demos.set('without-caret', { html, scssConfig: { caret: 'false' } });

const alignments = [
  'start start', 'start center', 'start end',
  'center start', 'center end',
  'end start', 'end center', 'end end',
];

for (const alignment of alignments) {
  const key = `alignment-${alignment.replace(' ', '-')}`;
  elementDemoContent.demos.set(key, { html, scssConfig: { alignment: `'${alignment}'` } });
}

export default elementDemoContent;
