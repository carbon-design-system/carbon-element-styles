/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CdsEsDocsElementDemoContent } from '@/components/ElementDemoContent';

import css from './demo.scss?inline';
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
elementDemoContent.css.replace(css);
elementDemoContent.demos.set('default', { html });
elementDemoContent.demos.set('primary', { html });
elementDemoContent.demos.set('secondary', { html });
elementDemoContent.demos.set('tertiary', { html });
elementDemoContent.demos.set('ghost', { html });
elementDemoContent.demos.set('danger--primary', { html });
elementDemoContent.demos.set('danger--tertiary', { html });
elementDemoContent.demos.set('danger--ghost', { html });

export default elementDemoContent;
