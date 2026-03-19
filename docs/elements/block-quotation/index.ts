import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'block-quotation',
  name: 'Block quotation',
  references: [
    {
      label: '<blockquote>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote',
    },
    {
      label: '<cite>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/cite',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'blockquote',
    },
  ],
  notes: [
    'To denote a source, use a suceeding <cite> element.',
  ],
} as const satisfies Meta;

const html = /* html */`
<blockquote>
  <p>
    Without aesthetic, design is either the humdrum repetition of familiar clichés or a wild scramble for novelty. Without aesthetic, the computer is but a mindless speed machine, producing effects without substance, form without relevant content, or content without meaningful form.
  </p>
</blockquote>
<cite>
  Paul Rand
</cite>
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
