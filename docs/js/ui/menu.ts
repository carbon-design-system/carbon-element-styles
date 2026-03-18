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
          list.querySelector('a')?.click();
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

  for (const menuItem of (target?.querySelectorAll<HTMLElement>('li:has(> button)') ?? [])) {
    const button = menuItem.querySelector('button');
    const isCurrentMenuItem = elementId === button?.dataset.elementId;

    button?.setAttribute('aria-expanded', isCurrentMenuItem ? 'true' : 'false');

    for (const listItem of (menuItem.querySelectorAll<HTMLElement>('li > a') ?? [])) {
      const isCurrentListItem = demoId === listItem.dataset.demoId;

      if (isCurrentListItem && isCurrentMenuItem) {
        listItem.setAttribute('aria-current', 'page');
      } else {
        listItem.removeAttribute('aria-current');
      }
    }
  }
}
