import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'fieldset',
  name: 'Fieldset',
  reference: {
    label: '<fieldset>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'fieldset',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<fieldset>
  <legend>
    Legend
  </legend>
  Content
</fieldset>
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
