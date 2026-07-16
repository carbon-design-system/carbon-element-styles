/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NavigationItem } from '@/model/NavigationItem';

export default new NavigationItem({
  id: 'date-time-input',
  label: 'Date and time input',
  content: () => import('./content'),
  items: [
    new NavigationItem({
      id: 'default',
      label: 'Default',
    }),
    new NavigationItem({
      id: 'block',
      label: 'Block',
    }),
    new NavigationItem({
      id: 'inline',
      label: 'Inline',
    }),
  ],
});
