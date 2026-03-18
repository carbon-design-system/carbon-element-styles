import { get as getEnvironment } from '../environment';
import * as elements from '../../elements';
import type { Demo, Meta } from '../_types';

const target = document.getElementById('docs');

export function setup() {
  target?.querySelector('[role="tab"]')?.setAttribute('aria-selected', 'true');
  target?.querySelector('[role="tabpanel"]')?.removeAttribute('hidden');

  for (const tab of (target?.querySelectorAll<HTMLElement>('[role="tab"]') ?? [])) {
    tab.addEventListener('click', () => {
      activateTab(tab);
    });
  }

  update();
}

function activateTab(tab: HTMLElement) {
  const tabId = tab.getAttribute('id');
  const tabpanelId = tab.getAttribute('aria-controls');

  for (const tab of (target?.querySelectorAll<HTMLElement>('[role="tab"]') ?? [])) {
    tab.setAttribute('aria-selected', tab.getAttribute('id') === tabId ? 'true' : 'false');
  }

  for (const tabpanel of (target?.querySelectorAll<HTMLElement>('[role="tabpanel"]') ?? [])) {
    tabpanel.hidden = tabpanel.getAttribute('id') !== tabpanelId;
  }
}

export function update() {
  const element = Object.values(elements)
    .find((e) => e.meta.id === getEnvironment().element);
  const demo = element?.demos
    .find((d) => d.id === getEnvironment().demo);

  if (element && demo) {
    updateOverview(element.meta);
    updateConfiguration(element.meta.config);
    updateHtml(demo);
    updateScss(element.meta, demo);
  }
}

function updateOverview(element: Meta) {
  const panel = document.getElementById('docs__tabpanel--overview');

  const heading = panel?.querySelector('h1');
  const unorderedList = panel?.querySelector('ul');

  if (heading) {
    heading.innerText = element.name;
  }

  if (unorderedList) {
    const listItems: HTMLLIElement[] = [];

    if (element.reference) {
      const listItem = document.createElement('li');

      const anchor = document.createElement('a');
      anchor.innerText = `${element.reference.label} on ${element.reference.source}`;
      anchor.setAttribute('href', element.reference.url);
      anchor.setAttribute('rel', 'noreferrer');

      listItem.appendChild(anchor);
      listItems.push(listItem);
    }

    for (const note of (element.notes ?? [])) {
      const listItem = document.createElement('li');
      listItem.innerText = note;
      listItems.push(listItem);
    }

    unorderedList.replaceChildren(...listItems);
  }
}

function updateConfiguration(config: Meta['config']) {
  const panel = document.getElementById('docs__tabpanel--config');

  panel?.querySelector('tbody')?.replaceChildren(...config.map((c) => {
    const row = document.createElement('tr');

    row.append(...['key', 'type', 'default'].map((key) => {
      const cell = document.createElement('td');
      const code = document.createElement('code');

      code.innerText = c[key as keyof typeof config[0]];

      cell.appendChild(code);
      return cell;
    }));

    return row;
  }));
}

function updateHtml(demo: Demo) {
  const panel = document.getElementById('docs__tabpanel--html');
  const code = panel?.querySelector('code');

  if (code) {
    code.innerText = (demo.html.presentation ?? demo.html.raw).slice(1);
  }
}


function updateScss(element: Meta, demo: Demo) {
  const panel = document.getElementById('docs__tabpanel--scss');
  const code = panel?.querySelector('code');

  if (code) {
    if (!demo.config) {
      code.innerText = `@include ${element.id}.styles;`;
    } else {
      const scssMapEntries = Object.entries(demo.config)
        .map(([key, value]) => `  ${key}: ${value},`)
        .join('\n');

      code.innerText = `@include ${element.id}.styles((\n${scssMapEntries}\n));`;
    }
  }
}
