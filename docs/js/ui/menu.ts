/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  set as setEnvironment,
  get as getEnvironment,
} from '../environment';
import * as elements from '../../elements';

const target = document.querySelector('body > nav > ul');

export function setup() {
  target?.replaceChildren(...(
    Object.values(elements)
      .toSorted((a, b) => a.meta.name.localeCompare(b.meta.name))
      .map((element) => {
        const menuItem = document.createElement('li');

        const button = document.createElement('button');
        button.dataset.elementId = element.meta.id;
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('type', 'button');
        button.innerText = element.meta.name;

        menuItem.appendChild(button);

        const list = document.createElement('ul');
        menuItem.appendChild(list);

        for (const demo of element.demos) {
          const listItem = document.createElement('li');
          list.appendChild(listItem);

          const target = new URL(window.location.toString());
          target.searchParams.set('element', element.meta.id);
          target.searchParams.set('demo', demo.id);

          const anchor = document.createElement('a');
          anchor.dataset.demoId = demo.id;
          anchor.setAttribute('href', target.href);
          anchor.innerText = demo.name;

          anchor.addEventListener('click', (e) => {
            e.preventDefault();
            setEnvironment({
              element: element.meta.id,
              demo: demo.id,
            });
          });

          listItem.appendChild(anchor);
        }

        button.addEventListener('click', () => {
          if (button.getAttribute('aria-expanded') == 'false') {
            list.querySelector('a')?.click();
          } else {
            button.setAttribute('aria-expanded', 'false');
          }
        });

        return menuItem;
      })
  ));

  update();
}

export function update() {
  const {
    element: elementId,
    demo: demoId,
  } = getEnvironment();

  for (const activeItem of (target?.querySelectorAll<HTMLElement>('[aria-current="page"]') ?? []))  {
    activeItem.removeAttribute('aria-current');
  }

  const activeMenuItem = target?.querySelector(`li:has(button[data-element-id="${elementId}"])`);

  if (activeMenuItem) {
    activeMenuItem.querySelector('button')?.setAttribute('aria-expanded', 'true');
    activeMenuItem.querySelector(`a[data-demo-id="${demoId}"]`)?.setAttribute('aria-current', 'page');
  }
}
