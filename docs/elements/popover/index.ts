import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'popover',
  name: 'Popover',
} as const satisfies Meta;

const html = /* html */`
<button popovertarget="popover-demo-01" popovertargetaction="toggle">
  Toggle popover
</button>

<div id="popover-demo-01" popover>
  Popover content

  <br /><br />

  <label>
    Text input
    <input type="text" />
  </label>
</div>

<br /><br />

<div data-tile>
  Within tile

  <br /><br />

  <button popovertarget="popover-demo-02" popovertargetaction="toggle">
    Toggle popover
  </button>

  <div id="popover-demo-02" popover>
    Popover content

    <br /><br />

    <label>
      Text input
      <input type="text" />
    </label>
  </div>
</div>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
  {
    id: 'with-caret',
    name: 'With caret',
    html,
  },
  {
    id: 'without-caret',
    name: 'Without caret',
    html,
  },
];
