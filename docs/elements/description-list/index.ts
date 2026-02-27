import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'description-list',
  name: 'Description list',
} as const satisfies Meta;

const html = /* html */`
<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>

  <dt>Term 2</dt>
  <dd>Definition 2 dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</dd>

  <dt>Term 3</dt>
  <dd>Definition 3</dd>
</dl>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
