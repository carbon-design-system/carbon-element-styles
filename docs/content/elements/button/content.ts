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

elementDemoContent.label = 'Button';

elementDemoContent.references = [
  {
    label: '<button>',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button',
  },
  {
    label: 'Button',
    url: 'https://carbondesignsystem.com/components/button/usage/',
  },
];

elementDemoContent.notes = /* md */`
- Any SVG will be treated as a square icon.
- When using both text and an icon, the text must be wrapped in some element, such as a \`<span>\`.
`;

elementDemoContent.css.replace(css);
elementDemoContent.scssDoc = scssDoc;

elementDemoContent.demos.set('default', { html });
elementDemoContent.demos.set('primary', { html, scssConfig: { kind: `'primary'` } });
elementDemoContent.demos.set('secondary', { html, scssConfig: { kind: `'secondary'` } });
elementDemoContent.demos.set('tertiary', { html, scssConfig: { kind: `'tertiary'` } });
elementDemoContent.demos.set('ghost', { html, scssConfig: { kind: `'ghost'` } });
elementDemoContent.demos.set('danger--primary', { html, scssConfig: { kind: `'danger--primary'` } });
elementDemoContent.demos.set('danger--tertiary', { html, scssConfig: { kind: `'danger--tertiary'` } });
elementDemoContent.demos.set('danger--ghost', { html, scssConfig: { kind: `'danger--ghost'` } });

export default elementDemoContent;
