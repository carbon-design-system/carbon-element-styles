/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Inventory } from '@/model/Inventory';

import { CdsEsDocsContent } from '@/components/Content';
import { CdsEsDocsHeader } from '@/components/Header';
import { CdsEsDocsNavigation } from '@/components/Navigation';

await Inventory.load();

window.customElements.define('cds-es-docs-content', CdsEsDocsContent);
window.customElements.define('cds-es-docs-header', CdsEsDocsHeader);
window.customElements.define('cds-es-docs-navigation', CdsEsDocsNavigation);
