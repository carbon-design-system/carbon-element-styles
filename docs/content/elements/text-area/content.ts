/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from "@/components/ElementDemoContent";
import scssDoc from "virtual:scss-docs/text-area";
import { demos } from "./_demos";

const elementDemoContent = document.createElement(
  "cds-es-docs-element-demo-content",
) as CdsEsDocsElementDemoContent;

elementDemoContent.label = "Text area";
elementDemoContent.scssDoc = scssDoc;
elementDemoContent.demos = demos;
elementDemoContent.references = [
  {
    label: "<textarea>",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea",
  },
  {
    label: "Text area",
    url: "https://carbondesignsystem.com/components/text-input/usage/#text-area",
  },
];

export default elementDemoContent;
