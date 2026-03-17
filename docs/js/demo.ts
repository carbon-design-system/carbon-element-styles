import type { Demo, Meta } from './_types';

import * as elements from '../elements';
import { get as getEnvironment } from './environment';

export function render() {
  const element = Object.values(elements).find((e) => e.meta.id === getEnvironment().element);
  const demo = element?.demos.find((d) => d.id === getEnvironment().demo);

  if (element && demo) {
    renderDemo(demo);
    renderDocs(element.meta, demo);
    renderCode(demo);
  }
}

function renderDemo(demo: Demo) {
  const frame = document.getElementById('demo');

  if (frame) {
    frame.innerHTML = demo.html.raw;
    demo.setup?.(frame);
  }
}

function renderDocs(element: Meta, demo: Demo) {
  const frame = document.getElementById('docs__overview');

  const heading = frame?.querySelector('h1');
  const list = frame?.querySelector('ul');
  const code = frame?.querySelector('code');
  const table = frame?.querySelector('tbody');

  if (heading) {
    heading.innerText = element.name;
  }

  if (list) {
    const listItems = [];

    if (element.reference) {
      const reference = document.createElement('li');
      const referenceLink = document.createElement('a');
      referenceLink.innerText = `${element.reference.label} on ${element.reference.source}`;
      referenceLink.setAttribute('href', element.reference.url);
      referenceLink.setAttribute('target', '_blank');
      referenceLink.setAttribute('rel', 'noreferrer');
      reference.appendChild(referenceLink);
      listItems.push(reference);
    }

    element.notes?.forEach((note) => {
      const li = document.createElement('li');
      li.innerText = note;
      listItems.push(li);
    });

    list.replaceChildren(...listItems);
  }

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

  if (table) {
    table.replaceChildren(...element.config.map((c) => {
      const row = document.createElement('tr');

      row.append(...[c.key, c.type, c.default].map((value) => {
        const cell = document.createElement('td');

        const code = document.createElement('code');
        code.innerText = value;
        cell.appendChild(code);

        return cell;
      }));

      return row;
    }));
  }
}

function renderCode(demo: Demo) {
  const frame = document.getElementById('docs__code')?.querySelector('code');

  if (frame) {
    frame.innerText = (demo.html.presentation ?? demo.html.raw).slice(1);
  }
}
