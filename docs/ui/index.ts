/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import menuIcon from '@carbon/icons/svg/32/menu.svg?raw';
import controlsIcon from '@carbon/icons/svg/32/settings--adjust.svg?raw';
import themeIcon from '@carbon/icons/svg/32/color-palette.svg?raw';
import modeIcon from '@carbon/icons/svg/32/scale.svg?raw';
import sizeIcon from '@carbon/icons/svg/32/fit-to-height.svg?raw';
import densityIcon from '@carbon/icons/svg/32/fit-to-width.svg?raw';

import { version } from '../../package.json';

import { prefix } from '../js/config';
import * as elements from '../elements';
import {
  get as getEnvironment,
  EnvironmentChangeEvent,
} from '../js/environment';

import { DocsPanelToggleButton } from './panel-toggle-button';
import { DocsControl } from './control';
import { DocsMenu } from './menu';
import { DocsDemo } from './demo';
import { DocsTabs } from './tabs';
import { DocsTabPanel } from './tab-panel';
import { DocsElementOverview } from './element-overview';
import { DocsApiTable } from './api-table';
import { DocsSourceCode } from './source-code';

function register() {
  window.customElements.define('docs-panel-toggle-button', DocsPanelToggleButton);
  window.customElements.define('docs-control', DocsControl);
  window.customElements.define('docs-menu', DocsMenu);
  window.customElements.define('docs-demo', DocsDemo);
  window.customElements.define('docs-tabs', DocsTabs);
  window.customElements.define('docs-tab-panel', DocsTabPanel);
  window.customElements.define('docs-element-overview', DocsElementOverview);
  window.customElements.define('docs-api-table', DocsApiTable);
  window.customElements.define('docs-source-code', DocsSourceCode);
}

function setupHeader() {
  const versionNumber = document.getElementById('version');

  if (versionNumber) {
    versionNumber.textContent = `v${version}`;
  }

  const menu = document.getElementById('menu');
  const menuToggleButton = document.getElementById('menu-toggle-button') as DocsPanelToggleButton;

  if (menu && menuToggleButton) {
    menuToggleButton.icon = menuIcon;
    menuToggleButton.target = menu;
  }

  const controls = document.getElementById('controls');
  const controlsToggleButton = document.getElementById('controls-toggle-button') as DocsPanelToggleButton;

  if (controls && controlsToggleButton) {
    controlsToggleButton.icon = controlsIcon;
    controlsToggleButton.target = controls;
  }
}

function setupControls() {
  const themeControl = document.querySelector('docs-control[key="theme"]') as DocsControl;
  if (themeControl) themeControl.icon = themeIcon;

  const modeControl = document.querySelector('docs-control[key="mode"]') as DocsControl;
  if (modeControl) modeControl.icon = modeIcon;

  const sizeControl = document.querySelector('docs-control[key="size"]') as DocsControl;
  if (sizeControl) sizeControl.icon = sizeIcon;

  const densityControl = document.querySelector('docs-control[key="density"]') as DocsControl;
  if (densityControl) densityControl.icon = densityIcon;
}

function setupMenu() {
  const menu = document.getElementById('menu') as DocsMenu;

  if (menu) {
    menu.items = Object.values(elements).map((element) => ({
      meta: element.meta,
      demos: element.demos,
    }));
  }
}

function setupDemo() {
  const demo = document.querySelector('docs-demo');

  if (demo) {
    window.addEventListener(EnvironmentChangeEvent, () => {
      for (const [key, value] of Object.entries(getEnvironment())) {
        demo.setAttribute(`data-${prefix}-${key}`, value);
      }
    });
  }
}

register();
setupHeader();
setupControls();
setupMenu();
setupDemo();

window.dispatchEvent(new Event(EnvironmentChangeEvent));
