/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Content, type ContentRenderRequest } from '@/model/Content';

export class ElementDemoContent extends Content {
  name: string;
  references: {
    label: string;
    url: string;
  }[];
  notes?: string;
  css = new CSSStyleSheet();
  demos: Map<string, {
    html: string;
    setup?: (frame: HTMLElement) => void;
  }>;

  constructor({
    name,
    references,
    notes,
    css,
    demos,
  }: {
    name: ElementDemoContent['name'];
    references: ElementDemoContent['references'];
    notes?: ElementDemoContent['notes'];
    css: string;
    demos: ElementDemoContent['demos'];
  }) {
    super();

    this.name = name;
    this.references = references;
    this.notes = notes;
    this.css.replace(css);
    this.demos = demos;
  }

  async render(request: ContentRenderRequest) {
    const container = document.createElement('div');

    const demo = this.demos.get(request.id);

    if (demo) {
      const frame = document.createElement('div');
      frame.dataset.demo = request.id;
      frame.innerHTML = demo.html;

      container.append(frame);
    }

    return {
      html: container,
      css: this.css,
    };
  }
}
