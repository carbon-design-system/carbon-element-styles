/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from "@/components/ElementDemoContent";
import scssDoc from "virtual:scss-docs/code";
import { demos } from "./_demos";

const elementDemoContent = document.createElement(
  "cds-es-docs-element-demo-content",
) as CdsEsDocsElementDemoContent;

elementDemoContent.label = "Code";
elementDemoContent.scssDoc = scssDoc;
elementDemoContent.demos = demos;
elementDemoContent.references = [
  {
    label: "<code>",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/code",
  },
  {
    label: "Inline code snippet",
    url: "https://carbondesignsystem.com/components/code-snippet/usage/#inline",
  },
];

export default elementDemoContent;
