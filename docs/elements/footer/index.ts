import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'footer',
  name: 'Page footer',
  references: [
    {
      label: '<footer>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/footer',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'main + footer',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<footer>
  Page footer
</footer>
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
