import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'heading-level-3',
  name: 'Heading level 3',
  references: [
    {
      label: '<h1>–<h6>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements',
    },
    {
      label: 'Type sets',
      url: 'https://carbondesignsystem.com/elements/typography/type-sets/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'h3',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<h3>Heading level 3</h3>
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
