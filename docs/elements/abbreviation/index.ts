import type { Meta, Demo } from '../../js/_types';

export const meta = {
  id: 'abbreviation',
  name: 'Abbreviation',
  references: [
    {
      label: '<abbr>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr',
    },
    {
      label: 'Definition tooltip',
      url: 'https://carbondesignsystem.com/components/tooltip/style/#definition-tooltip-structure',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'abbr[title]',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<abbr title="Abbreviation">abbr</abbr>
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
