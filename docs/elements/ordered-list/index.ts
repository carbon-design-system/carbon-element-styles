import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'ordered-list',
  name: 'Ordered list',
  reference: {
    label: '<ol>',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'ol',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<ol>
  <li>List item</li>
  <li>List item</li>
  <li>
    List item
    <ol>
      <li>List item</li>
      <li>List item</li>
      <li>
        List item
        <ol>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
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
