import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'deleted-text',
  name: 'Deleted text',
  references: [
    {
      label: '<del>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/del',
    },
    {
      label: 'Text highlighter',
      url: 'https://labs.carbondesignsystem.com/?path=/docs/react_components-texthighlighter--overview',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'del',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<del>Deleted</del>
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
