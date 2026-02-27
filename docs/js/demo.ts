import * as sass from 'sass';

import { get as getEnvironment } from './environment';

import type { Demo } from './_types';

export async function render() {
  const container = document.getElementById('demo');
  const codeHtml = document.getElementById('code__html')?.querySelector('code');
  const codeScss = document.getElementById('code__scss')?.querySelector('code');

  const elementId = getEnvironment().element;
  const demoId = getEnvironment().demo;

  if (container && codeHtml && codeScss && elementId && demoId) {
    const element = await import(`../elements/${elementId}/index.ts`);
    const styles = await import(`../elements/${elementId}/index.scss?raw`);
    const demo = (element.demos as Demo[]).find((d) => d.id === demoId);

    if (demo && styles) {
      container.innerHTML = demo.html;
      codeHtml.innerText = demo.html;

      const styleLines = styles.default.split('\n') as string[];
      const styleStartLine = styleLines.findIndex((l) => l.startsWith('@include docs.demo') && l.endsWith(`'${demo.id}') {`));
      const styleEndLine = styleLines.slice(styleStartLine + 1).findIndex((l) => l.startsWith('}'));

      const styleIndentation = styleLines[styleStartLine + 1].length - styleLines[styleStartLine + 1].trimStart().length;

      const mixin = styleLines
        .slice(styleStartLine + 1, styleStartLine + styleEndLine + 1)
        .map((l) => l.slice(styleIndentation))
        .join('\n');

      codeScss.innerText = `\n${mixin}`;

      // element.setup?.(container);
    }
  }
}
