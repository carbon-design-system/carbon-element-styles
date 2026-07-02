/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export class NavigationItem {
  id: string;
  label: string;
  items?: NavigationItem[];
  source?: string;

  constructor({
    id,
    label,
    items,
  }: {
    id: NavigationItem['id'];
    label: NavigationItem['label'];
    items?: NavigationItem['items'];
  }) {
    this.id = id;
    this.label = label;
    this.items = items;
  }
}
