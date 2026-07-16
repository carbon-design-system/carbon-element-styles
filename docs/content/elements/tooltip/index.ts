/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NavigationItem } from '@/model/NavigationItem';

const alignments = [
  'start start', 'start center', 'start end',
  'center start', 'center end',
  'end start', 'end center', 'end end',
];

export default new NavigationItem({
  id: 'tooltip',
  label: 'Tooltip',
  content: () => import('./content'),
  items: [
    new NavigationItem({
      id: 'default',
      label: 'Default',
    }),
    ...alignments.map((alignment) => new NavigationItem({
      id: `alignment-${alignment.replace(' ', '-')}`,
      label: `Alignment: ${alignment}`,
    })),
  ],
});
