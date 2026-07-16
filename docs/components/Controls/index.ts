/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './index.scss?inline';

import themeIcon from '@carbon/icons/svg/32/color-palette.svg?raw';
import modeIcon from '@carbon/icons/svg/32/scale.svg?raw';
import sizeIcon from '@carbon/icons/svg/32/fit-to-height.svg?raw';
import densityIcon from '@carbon/icons/svg/32/fit-to-width.svg?raw';

import { CdsEsDocsControl } from '@/components/Control';

export class CdsEsDocsControls extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const stylesheet = new CSSStyleSheet();
    stylesheet.replace(styles);
    this.shadowRoot?.adoptedStyleSheets.push(stylesheet);

    this.shadowRoot?.append(
      this.#createControl({
        key: 'theme',
        label: 'Theme',
        icon: themeIcon,
        options: [
          {
            value: 'white',
            label: 'White',
          },
          {
            value: 'g10',
            label: 'Gray 10',
          },
          {
            value: 'g90',
            label: 'Gray 90',
          },
          {
            value: 'g100',
            label: 'Gray 100',
          },
        ],
      }),
      this.#createControl({
        key: 'mode',
        label: 'Mode',
        icon: modeIcon,
        options: [
          {
            value: 'productive',
            label: 'Productive',
          },
          {
            value: 'expressive',
            label: 'Expressive',
          },
        ],
      }),
      this.#createControl({
        key: 'size',
        label: 'Size',
        icon: sizeIcon,
        options: [
          {
            value: 'xs',
            label: 'XS',
          },
          {
            value: 'sm',
            label: 'SM',
          },
          {
            value: 'md',
            label: 'MD',
          },
          {
            value: 'lg',
            label: 'LG',
          },
          {
            value: 'xl',
            label: 'XL',
          },
        ],
      }),
      this.#createControl({
        key: 'density',
        label: 'Density',
        icon: densityIcon,
        options: [
          {
            value: 'condensed',
            label: 'Condensed',
          },
          {
            value: 'normal',
            label: 'Normal',
          },
        ],
      }),
    );
  }

  #createControl({
    key,
    label,
    icon,
    options,
  }: {
    key: string;
    label: string;
    icon: string;
    options: CdsEsDocsControl['options'];
  }) {
    const control = document.createElement('cds-es-docs-control') as CdsEsDocsControl;
    control.key = key;
    control.label = label;
    control.icon = icon;
    control.options = options;

    return control;
  }
}
