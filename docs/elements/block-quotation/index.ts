import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'block-quotation',
  name: 'Block quotation',
} as const satisfies Meta;

const html = /* html */`
<blockquote>
  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
  </p>
</blockquote>
<cite>
  Firstname Lastname
</cite>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
