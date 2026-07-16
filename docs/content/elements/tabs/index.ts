/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NavigationItem } from '@/model/NavigationItem';

export default new NavigationItem({
  id: 'tabs',
  label: 'Tabs',
  content: () => import('./content'),
  items: [
    new NavigationItem({
      id: 'default',
      label: 'Default',
    }),
    new NavigationItem({
      id: 'line',
      label: 'Line',
    }),
    new NavigationItem({
      id: 'contained',
      label: 'Contained',
    }),
    new NavigationItem({
      id: 'content-switcher',
      label: 'Content switcher',
    }),
    new NavigationItem({
      id: 'content-switcher--low-contrast',
      label: 'Content switcher (low contrast)',
    }),
  ],
});
