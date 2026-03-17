import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'tooltip',
  name: 'Tooltip',
  reference: {
    label: '"hint" popover',
    source: 'MDN',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using#using_hint_popover_state',
  },
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: '[popover="hint"]',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<button>
  Toggle tooltip

  <div popover="hint">
    Tooltip
  </div>
</button>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html: {
      raw: html,
    },
    setup: (frame) => {
      const button = frame.querySelector('button');
      const tooltip = button?.querySelector<HTMLElement>('[popover="hint"]');

      button?.addEventListener('mouseover', () => {
        tooltip?.showPopover({
          source: button,
        });
      });

      button?.addEventListener('mouseout', () => {
        tooltip?.hidePopover();
      });
    },
  },
];
