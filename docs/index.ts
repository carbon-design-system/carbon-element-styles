/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Environment } from '@/model/Environment';
import { Inventory } from '@/model/Inventory';

import { CdsEsDocsContent } from '@/components/Content';
import { CdsEsDocsElementDemoContent } from '@/components/ElementDemoContent';
import { CdsEsDocsMarkdownContent } from '@/components/MarkdownContent';

import { CdsEsDocsApiTable } from '@/components/ApiTable';
import { CdsEsDocsControl } from '@/components/Control';
import { CdsEsDocsControls } from '@/components/Controls';
import { CdsEsDocsElementOverview } from '@/components/ElementOverview';
import { CdsEsDocsHeader } from '@/components/Header';
import { CdsEsDocsNavigation } from '@/components/Navigation';
import { CdsEsDocsPanelToggleButton } from '@/components/PanelToggleButton';
import { CdsEsDocsSourceCode } from '@/components/SourceCode';
import { CdsEsDocsTabPanel } from '@/components/TabPanel';
import { CdsEsDocsTabs } from '@/components/Tabs';

await Inventory.load();
Environment.apply();

window.customElements.define('cds-es-docs-content', CdsEsDocsContent);
window.customElements.define('cds-es-docs-element-demo-content', CdsEsDocsElementDemoContent);
window.customElements.define('cds-es-docs-markdown-content', CdsEsDocsMarkdownContent);

window.customElements.define('cds-es-docs-api-table', CdsEsDocsApiTable);
window.customElements.define('cds-es-docs-control', CdsEsDocsControl);
window.customElements.define('cds-es-docs-controls', CdsEsDocsControls);
window.customElements.define('cds-es-docs-element-overview', CdsEsDocsElementOverview);
window.customElements.define('cds-es-docs-panel-toggle-button', CdsEsDocsPanelToggleButton);
window.customElements.define('cds-es-docs-header', CdsEsDocsHeader);
window.customElements.define('cds-es-docs-navigation', CdsEsDocsNavigation);
window.customElements.define('cds-es-docs-source-code', CdsEsDocsSourceCode);
window.customElements.define('cds-es-docs-tab-panel', CdsEsDocsTabPanel);
window.customElements.define('cds-es-docs-tabs', CdsEsDocsTabs);
