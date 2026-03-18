import { RequestRenderEvent } from './environment';

import * as menu from './ui/menu';
import * as demo from './ui/demo';
import * as controls from './ui/controls';
import * as docs from './ui/docs';

function setup() {
  menu.setup();
  demo.setup();
  controls.setup();
  docs.setup();
}

function update() {
  menu.update();
  demo.update();
  controls.update();
  docs.update();
}

window.addEventListener(RequestRenderEvent, update);
window.addEventListener('popstate', update);

setup();
