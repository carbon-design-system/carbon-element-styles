import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'main',
  name: 'Main',
  references: [
    {
      label: '<main>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'main',
    },
  ],
} as const satisfies Meta;

const rawHtml = /* html */`
<div class="main">
  Main
</div>
`;

const presentationHtml = /* html */`
<main>
  Main
</main>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: rawHtml,
      presentation: presentationHtml,
    },
  },
];
