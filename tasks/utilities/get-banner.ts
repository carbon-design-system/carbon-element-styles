/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type FileType = "js" | "html" | "css";

export const supportedFileTypes: FileType[] = ["js", "html", "css"];

const banner = [
  "Copyright IBM Corp.",
  "",
  "This source code is licensed under the Apache-2.0 license found in the",
  "LICENSE file in the root directory of this source tree.",
];

const commentSyntaxes: Record<FileType, [leading: string, inline: string, trailing: string]> = {
  js: ["/**", " *", " */"],
  html: ["<!--", "", "-->"],
  css: ["/**", " *", " */"],
};

export function getBanner(options: { fileType: FileType; year?: number | null }) {
  const [leading, inline, trailing] = commentSyntaxes[options.fileType];

  const currentYear = new Date().getFullYear();
  let copyrightYear = String(currentYear);

  if (options.year === null) {
    copyrightYear = "";
  } else if (options.year !== undefined && options.year !== currentYear) {
    copyrightYear = `${options.year}, ${currentYear}`;
  }

  const lines = [`${banner[0]} ${copyrightYear}`, ...banner.slice(1)];

  return [leading, ...lines.map((line) => `${inline} ${line}`.trimEnd()), trailing, ""].join("\n");
}
