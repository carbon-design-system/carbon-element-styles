import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'body',
  name: 'Body',
  references: [
    {
      label: '<body>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'body',
    },
  ],
} as const satisfies Meta;

const rawHtml = /* html */`
<div class="body">
  Body
</div>
`;

const presentationHtml = /* html */`
<body>
  Body
</body>
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
