/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from "@/components/ElementDemoContent";
import scssDoc from "virtual:scss-docs/color-input";
import { demos } from "./_demos";

const elementDemoContent = document.createElement(
  "cds-es-docs-element-demo-content",
) as CdsEsDocsElementDemoContent;

elementDemoContent.label = "Color input";
elementDemoContent.scssDoc = scssDoc;
elementDemoContent.demos = demos;
elementDemoContent.references = [
  {
    label: '<input type="color">',
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/color",
  },
  {
    label: "Style picker",
    url: "https://labs.carbondesignsystem.com/?path=/story/web-components_components-style-picker-single--color",
  },
];

export default elementDemoContent;
