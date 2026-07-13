/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { marked } from 'marked';

import styles from './Markdown.scss?inline';

import { Content, type ContentRenderRequest } from '@/model/Content';

export class MarkdownContent extends Content {
  #css = new CSSStyleSheet();
  raw: string;

  constructor({
    raw,
  }: {
    raw: MarkdownContent['raw'];
  }) {
    super();

    this.#css.replace(styles);
    this.raw = raw;
  }

  async render(request: ContentRenderRequest) {
    const html = await marked.parse(this.raw);

    const article = document.createElement('article');
    article.innerHTML = html;

    return {
      html: article,
      css: this.#css,
    };
  }
}
