/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Demo, Meta } from '../../js/_types';

import fileIcon from '@carbon/icons/svg/32/document.svg?raw';
import folderIcon from '@carbon/icons/svg/32/folder.svg?raw';
import barChartIcon from '@carbon/icons/svg/32/chart--bar.svg?raw';
import donutChartIcon from '@carbon/icons/svg/32/chart--donut.svg?raw';
import radarChartIcon from '@carbon/icons/svg/32/chart--radar.svg?raw';

export const meta = {
  id: 'tree-view',
  name: 'Tree view',
  references: [
    {
      label: 'tree role',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role',
    },
    {
      label: 'Tree view',
      url: 'https://carbondesignsystem.com/components/tree-view/usage/',
    },
  ],
  config: [
    {
      key: 'selector',
      type: 'selector',
      default: 'ul[role="tree"]',
    },
  ],
} as const satisfies Meta;

const html = /* html */`
<ul role="tree">
  <li role="treeitem" aria-selected="false" tabindex="0" aria-level="1">
    <span>Optimization</span>
  </li>
  <li role="treeitem" aria-selected="true" aria-current="true" tabindex="0" aria-level="1">
    <span>Hamiltonian simulation</span>
  </li>
  <li role="treeitem" aria-selected="false" tabindex="0" aria-level="1">
    <span>Machine learning</span>
  </li>
</ul>

<br />

<ul role="tree" aria-multiselectable="true">
  <li role="treeitem" aria-selected="true" tabindex="0" aria-level="1">
    <span>Artificial intelligence</span>
  </li>
  <li role="treeitem" aria-selected="false" tabindex="0" aria-level="1">
    <span>Blockchain</span>
  </li>
  <li role="treeitem" aria-selected="false" aria-expanded="false" tabindex="0" aria-level="1">
    <span>Cloud computing</span>
    <ul role="group">
      <li role="treeitem" aria-selected="false" tabindex="0" aria-level="2">
        <span>Containers</span>
      </li>
      <li role="treeitem" aria-selected="false" tabindex="0" aria-level="2">
        <span>Databases</span>
      </li>
    </ul>
  </li>
  <li role="treeitem" aria-selected="false" aria-expanded="true" tabindex="0" aria-level="1">
    <span>Models</span>
    <ul role="group">
      <li role="treeitem" aria-selected="true" aria-expanded="true" aria-current="true" tabindex="0" aria-level="2">
        <span>Audit</span>
      </li>
      <li role="treeitem" aria-selected="true" tabindex="0" aria-level="2">
        <span>Monthly data</span>
      </li>
      <li role="treeitem" aria-selected="false" aria-disabled="true" aria-expanded="true" aria-level="2">
        <span>Data warehouse</span>
        <ul role="group">
          <li role="treeitem" aria-selected="false" aria-disabled="true" aria-level="3">
            <span>Report samples</span>
          </li>
          <li role="treeitem" aria-selected="false" aria-disabled="true" aria-level="3">
            <span>Sales performance</span>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<br />

<ul role="tree">
  <li role="treeitem" aria-selected="true" aria-current="true" tabindex="0" aria-level="1">
    <span>
      ${barChartIcon}
      Bar chart
    </span>
  </li>
  <li role="treeitem" aria-selected="false" tabindex="0" aria-level="1">
    <span>
      ${donutChartIcon}
      Donut chart
    </span>
  </li>
  <li role="treeitem" aria-selected="false" tabindex="0" aria-level="1">
    <span>
      ${radarChartIcon}
      Radar chart
    </span>
  </li>
</ul>

<br />

<ul role="tree">
  <li role="treeitem" aria-selected="false" aria-expanded="false" tabindex="0" aria-level="1">
    <span>
      ${folderIcon}
      build
    </span>
  </li>
  <li role="treeitem" aria-selected="false" aria-expanded="false" tabindex="0" aria-level="1">
    <span>
      ${folderIcon}
      docs
    </span>
  </li>
  <li role="treeitem" aria-selected="false" aria-expanded="true" tabindex="0" aria-level="1">
    <span>
      ${folderIcon}
      src
    </span>
    <ul role="group">
      <li role="treeitem" aria-selected="false" aria-expanded="false" tabindex="0" aria-level="2">
        <span>
          ${folderIcon}
          elements
        </span>
      </li>
      <li role="treeitem" aria-selected="false" aria-expanded="false" tabindex="0" aria-level="2">
        <span>
          ${folderIcon}
          layout
        </span>
      </li>
      <li role="treeitem" aria-selected="false" aria-expanded="false" tabindex="0" aria-level="2">
        <span>
          ${folderIcon}
          prebuilt
        </span>
      </li>
      <li role="treeitem" aria-selected="false" aria-expanded="false" tabindex="0" aria-level="2">
        <span>
          ${folderIcon}
          utilities
        </span>
      </li>
      <li role="treeitem" aria-selected="false" tabindex="0" aria-level="2">
        <span>
          ${fileIcon}
          _config.scss
        </span>
      </li>
      <li role="treeitem" aria-selected="false" tabindex="0" aria-level="2">
        <span>
          ${fileIcon}
          index.scss
        </span>
      </li>
    </ul>
  </li>
  <li role="treeitem" aria-selected="false" aria-expanded="false" tabindex="0" aria-level="1">
    <span>
      ${fileIcon}
      .gitignore
    </span>
  </li>
  <li role="treeitem" aria-selected="false" tabindex="0" aria-level="1">
    <span>
      ${fileIcon}
      .nvmrc
    </span>
  </li>
  <li role="treeitem" aria-selected="false" tabindex="0" aria-level="1">
    <span>
      ${fileIcon}
      LICENSE
    </span>
  </li>
  <li role="treeitem" aria-selected="false" tabindex="0" aria-level="1">
    <span>
      ${fileIcon}
      package.json
    </span>
  </li>
  <li role="treeitem" aria-selected="true" aria-current="true" tabindex="0" aria-level="1">
    <span>
      ${fileIcon}
      README.md
    </span>
  </li>
</ul>
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
