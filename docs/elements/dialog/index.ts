/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'dialog',
  name: 'Dialog',
  references: [
    {
      label: '<dialog>',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog',
    },
    {
      label: 'Modal',
      url: 'https://carbondesignsystem.com/components/modal/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'dialog',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<button commandfor="dialog--single" command="show-modal">
  Open single-button dialog
</button>

<dialog id="dialog--single">
  <form method="dialog">
    <header>
      Dialog
    </header>

    <div>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
    </div>

    <footer>
      <button type="submit">Ok</button>
    </footer>
  </form>
</dialog>

<br /><br />

<button commandfor="dialog--two" command="show-modal">
  Open two-button dialog
</button>

<dialog id="dialog--two">
  <form method="dialog">
    <header>
      Dialog
    </header>

    <div>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
    </div>

    <footer>
      <button type="button" commandfor="dialog--two" command="close">Cancel</button>
      <button type="submit">Ok</button>
    </footer>
  </form>
</dialog>

<br /><br />

<button commandfor="dialog--three" command="show-modal">
  Open three-button dialog
</button>

<dialog id="dialog--three">
  <form method="dialog">
    <header>
      Dialog
    </header>

    <div>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
    </div>

    <footer>
      <button type="button" commandfor="dialog--three" command="close">Cancel</button>
      <button type="button">Previous</button>
      <button type="submit">Next</button>
    </footer>
  </form>
</dialog>

<br /><br />

<button commandfor="dialog--passive" command="show-modal">
  Open passive dialog
</button>

<dialog id="dialog--passive">
  <header>
    Dialog
    <button type="button" commandfor="dialog--passive" command="close" aria-label="Close"></button>
  </header>

  <div>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
  </div>
</dialog>
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
