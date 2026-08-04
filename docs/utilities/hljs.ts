/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import hljs from "highlight.js/lib/core";

import xml from "highlight.js/lib/languages/xml";
import scss from "highlight.js/lib/languages/scss";
import shell from "highlight.js/lib/languages/shell";

hljs.registerLanguage("html", xml);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("console", shell);

export default hljs;
