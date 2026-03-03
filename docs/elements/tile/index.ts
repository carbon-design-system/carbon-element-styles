import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'tile',
  name: 'Tile',
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
    html,
  },
];
