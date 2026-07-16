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

elementDemoContent.label = 'Tile';

elementDemoContent.references = [
  {
    label: 'Tile',
    url: 'https://carbondesignsystem.com/components/tile/usage/',
  },
];

elementDemoContent.notes = /* md */`
- Tiles are the only non-native elements and require a custom class name or attribute to be targeted.
- Tiles that are anchors will render as clickable tiles.
`;

elementDemoContent.css.replace(css);
elementDemoContent.scssDoc = scssDoc;

elementDemoContent.demos.set('default', { html });

export default elementDemoContent;
