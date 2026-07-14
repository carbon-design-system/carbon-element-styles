/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export class NavigationItem {
  id: string;
  key?: string;
  label: string;
  items?: NavigationItem[];
  content?: () => Promise<{ default: unknown }>;

  constructor({
    id,
    label,
    items,
    content,
  }: {
    id: NavigationItem['id'];
    label: NavigationItem['label'];
    items?: NavigationItem['items'];
    content?: NavigationItem['content'];
  }) {
    this.id = id;
    this.label = label;
    this.items = items;
    this.content = content;

    for (const child of this.items ?? []) {
      child.key = id;
      child.content ??= content;
    }
  }
}
