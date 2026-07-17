/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from '@/components/ElementDemoContent';

export { default as css } from './demo.scss?inline';
export { default as html } from './demo.html';
export { default as scssDoc } from 'virtual:scss-docs/toggle';

const elementDemoContent = document.createElement('cds-es-docs-element-demo-content') as CdsEsDocsElementDemoContent;

elementDemoContent.label = 'Toggle';

elementDemoContent.references = [
  {
    label: 'switch role',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role',
  },
  {
    label: 'Toggle',
    url: 'https://carbondesignsystem.com/components/toggle/usage/',
  },
];

elementDemoContent.demos.set('default', {
  setup: (frame) => {
    frame.querySelectorAll('button[role="switch"]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const state = toggle.getAttribute('aria-checked') === 'true';
        toggle.setAttribute('aria-checked', (!state).toString());
        toggle.children[Number(state)].setAttribute('aria-hidden', 'true');
        toggle.children[Number(!state)].setAttribute('aria-hidden', 'false');
      });
    });
  },
});

export default elementDemoContent;
