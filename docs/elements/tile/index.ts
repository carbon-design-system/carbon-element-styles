/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'tile',
  name: 'Tile',
  references: [
    {
      label: 'Tile',
      url: 'https://carbondesignsystem.com/components/tile/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: '[data-tile]',
    },
  ],
  notes: [
    'Tiles are the only non-native elements and require a custom class name or attribute to be targeted.',
    'Tiles that are anchors will render as clickable tiles.',
  ],
} as const satisfies Meta;

const html = /* html */`
<section data-tile>
  Tile

  <br /><br />

  <label>
    Input
    <input type="text" />
  </label>

  <br />

  <article data-tile>
    Tile

    <br /><br />

    <label>
      Input
      <input type="text" />
    </label>

    <br />

    <section data-tile>
      Tile

      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
    </section>
  </article>
</section>

<br />

<a data-tile href="https://ibm.com" rel="noopener noreferrer" target="_blank">
  Clickable tile

  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
</a>

<br />

<section data-tile>
  Tile
  <br /><br />

  <a data-tile href="https://ibm.com" rel="noopener noreferrer" target="_blank">
    Clickable tile
  </a>

  <br />

  <section data-tile>
    Tile
    <br /><br />

    <a data-tile href="https://ibm.com" rel="noopener noreferrer" target="_blank">
      Clickable tile
    </a>
  </section>
</section>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
  },
];
