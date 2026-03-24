/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type Meta = {
  id: string;
  name: string;
  references: {
    label: string;
    url: string;
  }[];
  config: {
    key: string;
    type: string;
    default: string;
  }[];
  notes?: string[];
};

export type Demo = {
  id: string;
  name: string;
  config?: {
    [option: string]: string;
  };
  html: {
    raw: string;
    presentation?: string;
  };
  setup?: (frame: HTMLElement) => void;
};
