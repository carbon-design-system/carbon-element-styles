/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NavigationItem } from '@/model/NavigationItem';

export default new NavigationItem({
  id: 'horizontal-rule',
  label: 'Horizontal rule',
  content: () => import('./content'),
  items: [
    new NavigationItem({
      id: 'default',
      label: 'Default',
    }),
    new NavigationItem({
      id: 'subtle',
      label: 'Subtle',
    }),
    new NavigationItem({
      id: 'strong',
      label: 'Strong',
    }),
  ],
});
