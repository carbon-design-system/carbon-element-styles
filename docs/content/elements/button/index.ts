/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NavigationItem } from '@/model/NavigationItem';

export default new NavigationItem({
  id: 'button',
  label: 'Button',
  content: () => import('./content'),
  items: [
    new NavigationItem({
      id: 'default',
      label: 'Default',
    }),
    new NavigationItem({
      id: 'primary',
      label: 'Primary',
    }),
    new NavigationItem({
      id: 'secondary',
      label: 'Secondary',
    }),
    new NavigationItem({
      id: 'tertiary',
      label: 'Tertiary',
    }),
    new NavigationItem({
      id: 'ghost',
      label: 'Ghost',
    }),
    new NavigationItem({
      id: 'danger--primary',
      label: 'Danger primary',
    }),
    new NavigationItem({
      id: 'danger--tertiary',
      label: 'Danger tertiary',
    }),
    new NavigationItem({
      id: 'danger--ghost',
      label: 'Danger ghost',
    }),
  ],
});
