/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type ContentRenderRequest = {
  id: string;
};

export abstract class Content {
  abstract render(request: ContentRenderRequest): Promise<{
    html: HTMLElement;
    css: CSSStyleSheet;
  }>;
}
