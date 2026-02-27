import { prefix } from './config';
import {
  get as getEnvironment,
  RequestRenderEvent,
} from './environment';

import { render as renderMenu } from './menu';
import { render as renderDemo } from './demo';
import { render as renderControls } from './controls';

function render() {
  const container = document.getElementById('demo');

  if (container) {
    for (const [key, value] of Object.entries(getEnvironment())) {
      container.setAttribute(`data-${prefix}-${key}`, value);
    }

    renderMenu();
    renderDemo();
    renderControls();
  }
}

window.addEventListener(RequestRenderEvent, render);
window.addEventListener('popstate', render);

render();
