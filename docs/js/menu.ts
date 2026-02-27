import * as Elements from '../elements';
import {
  get as getEnvironment,
  set as setEnvironment,
} from './environment';

import type { Demo, Meta } from './_types';

type ElementDetails = {
  meta: Meta;
  demos: Demo[];
};

function buildMenuItem(element: ElementDetails): HTMLElement {
  const menuItem = document.createElement('li');

  const button = document.createElement('button');
  button.setAttribute('aria-expanded', 'true');
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
    anchor.setAttribute('href', target.href);
    anchor.innerText = demo.name;

    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      setEnvironment({
        element: element.meta.id as keyof typeof Elements,
        demo: demo.id,
      });
    });

    if (getEnvironment().element === element.meta.id && getEnvironment().demo === demo.id) {
      anchor.setAttribute('aria-current', 'page');
    }

    listItem.appendChild(anchor);
  }

  return menuItem;
}

export function render() {
  const menu = document.querySelector('header + nav > ul');

  if (menu) {
    const menuItems = (Object.entries(Elements) as [keyof typeof Elements, ElementDetails][])
      .toSorted(([_, a], [__, b]) => a.meta.name.localeCompare(b.meta.name))
      .map(([id, element]) => buildMenuItem(element));

    menu.replaceChildren(...menuItems);
  }
}