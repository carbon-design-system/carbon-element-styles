/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CdsEsDocsElementDemoContent } from "@/components/ElementDemoContent";
import scssDoc from "virtual:scss-docs/button";
import { demos } from "./_demos";

const elementDemoContent = document.createElement(
  "cds-es-docs-element-demo-content",
) as CdsEsDocsElementDemoContent;

elementDemoContent.label = "Button";
elementDemoContent.scssDoc = scssDoc;
elementDemoContent.demos = demos;
elementDemoContent.references = [
  {
    label: "<button>",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button",
  },
  {
    label: "Button",
    url: "https://carbondesignsystem.com/components/button/usage/",
  },
];
elementDemoContent.notes = /* md */ `
- Any SVG will be treated as a square icon.
- When using both text and an icon, the text must be wrapped in some element, such as a \`<span>\`.
- Support for \`aria-pressed="true"\` is exclusive to icon-only ghost buttons.
`;

export default elementDemoContent;
