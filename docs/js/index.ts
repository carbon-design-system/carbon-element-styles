/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RequestRenderEvent } from './environment';

import * as header from './ui/header';
import * as menu from './ui/menu';
import * as menuToggleButton from './ui/menu-toggle-button';
import * as demo from './ui/demo';
import * as controls from './ui/controls';
import * as controlsToggleButton from './ui/controls-toggle-button';
import * as docs from './ui/docs';

function setup() {
  header.setup();
  menu.setup();
  menuToggleButton.setup();
  demo.setup();
  controls.setup();
  controlsToggleButton.setup();
  docs.setup();
}

function update() {
  header.update();
  menu.update();
  menuToggleButton.update();
  demo.update();
  controls.update();
  controlsToggleButton.update();
  docs.update();
}

window.addEventListener(RequestRenderEvent, update);
window.addEventListener('popstate', update);

setup();
