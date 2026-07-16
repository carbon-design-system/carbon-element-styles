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

elementDemoContent.label = 'Tabs';

elementDemoContent.references = [
  {
    label: 'tablist role',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role',
  },
  {
    label: 'Tabs',
    url: 'https://carbondesignsystem.com/components/tabs/usage/',
  },
  {
    label: 'Content switcher',
    url: 'https://carbondesignsystem.com/components/content-switcher/usage/',
  },
];

elementDemoContent.css.replace(css);
elementDemoContent.scssDoc = scssDoc;

const setup = (frame: HTMLElement) => {
  frame.querySelectorAll('[role="tab"]').forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('aria-controls');

      if (targetId) {
        const target = frame.querySelector(`#${targetId}`);

        if (target) {
          frame.querySelectorAll('[role="tab"]').forEach((t) => {
            t.setAttribute('aria-selected', 'false');
          });

          frame.querySelectorAll('[role="tabpanel"]').forEach((t) => {
            t.setAttribute('hidden', '');
          });

          tab.setAttribute('aria-selected', 'true');
          target.removeAttribute('hidden');
        }
      }
    });
  });
};

elementDemoContent.demos.set('default', { html, setup });
elementDemoContent.demos.set('line', { html, setup, scssConfig: { kind: `'line'` } });
elementDemoContent.demos.set('contained', { html, setup, scssConfig: { kind: `'contained'` } });
elementDemoContent.demos.set('content-switcher', { html, setup, scssConfig: { kind: `'content-switcher'` } });
elementDemoContent.demos.set('content-switcher--low-contrast', { html, setup, scssConfig: { kind: `'content-switcher--low-contrast'` } });

export default elementDemoContent;
