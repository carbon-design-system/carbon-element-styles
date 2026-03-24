/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type FileType = 'js' | 'html' | 'css';

export const supportedFileTypes: FileType[] = [
  'js',
  'html',
  'css',
];

const banner = [
 'Copyright IBM Corp. 2026',
 '',
 'This source code is licensed under the Apache-2.0 license found in the',
 'LICENSE file in the root directory of this source tree.',
];

const commentSyntaxes: Record<FileType, [string, string, string]> = {
  js: ['/**', ' *', ' */'],
  html: ['<!--', '', '-->'],
  css: ['/**', ' *', ' */'],
};

export function getBanner(type: FileType) {
  const [leading, inline, trailing] = commentSyntaxes[type];

  return [
    leading,
    ...banner.map((line) => `${inline} ${line}`),
    trailing,
    '',
  ].join('\n');
}
