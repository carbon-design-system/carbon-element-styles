/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from "@/components/ElementDemoContent";
import scssDoc from "virtual:scss-docs/tooltip";
import { demos } from "./_demos";

const elementDemoContent = document.createElement(
  "cds-es-docs-element-demo-content",
) as CdsEsDocsElementDemoContent;

elementDemoContent.label = "Tooltip";
elementDemoContent.scssDoc = scssDoc;
elementDemoContent.demos = demos;
elementDemoContent.references = [
  {
    label: '"hint" popover',
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using#using_hint_popover_state",
  },
  {
    label: "Tooltip",
    url: "https://carbondesignsystem.com/components/tooltip/usage/",
  },
];

export default elementDemoContent;
