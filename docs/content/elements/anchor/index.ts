/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NavigationItem } from '@/model/NavigationItem';

export default new NavigationItem({
  id: 'anchor',
  label: 'Anchor',
  content: () => import('./content'),
  items: [
    new NavigationItem({
      id: 'default',
      label: 'Default',
    }),
    new NavigationItem({
      id: 'with-visited-styles',
      label: 'With visited styles',
    }),
    new NavigationItem({
      id: 'without-visited-styles',
      label: 'Without visited styles',
    }),
  ],
});
