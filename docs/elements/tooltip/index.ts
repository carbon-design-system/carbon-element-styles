import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'tooltip',
  name: 'Tooltip',
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
    html,
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
