import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'details',
  name: 'Details',
  references: [
    {
      label: '<details>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details',
    },
    {
      label: 'Accordion',
      url: 'https://carbondesignsystem.com/components/accordion/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'details',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<details>
  <summary>Lorem ipsum</summary>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
</details>
<details>
  <summary>Lorem ipsum</summary>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
</details>
<details>
  <summary>Lorem ipsum</summary>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
</details>
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
