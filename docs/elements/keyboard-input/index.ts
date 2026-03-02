import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'keyboard-input',
  name: 'Keyboard input',
} as const satisfies Meta;

const html = /* html */`
Press <kbd>cmd</kbd> + <kbd>A</kbd> to select all text on this page.
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
