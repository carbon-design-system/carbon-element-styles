import { readFile, writeFile } from 'node:fs/promises';

const iconIds = [
  'arrow--right',
  'checkbox--checked--filled',
  'checkbox--indeterminate--filled',
  'checkbox',
  'checkmark',
  'chevron--down',
  'close',
];

let scss = `@mixin -icon($size: 1rem) {
  @if ($size != null) {
    block-size: $size;
    inline-size: $size;
  }

  background-color: currentColor;
}`;

async function buildIcon(id: string) {
  const path = await import.meta.resolve?.(`@carbon/icons/svg/32/${id}.svg`);

  if (path) {
    const svg = await readFile(new URL(path));

    const dataUrl = 'data:image/svg+xml,' + svg
      .toString()
      .replaceAll('"', '\'');

    scss += `
@mixin ${id}($args...) {
  @include -icon($args...);
  mask-image: url("${dataUrl}");
}
`;

    console.info(`· Loaded ${id}`);
  }
}

async function writeScss() {
  const path = await import.meta.resolve?.(`../src/utilities/_icons.scss`);

  if (path) {
    await writeFile(new URL(path), scss);

    console.info(`✔ Wrote _icons.scss`);
  }
}

for (const id of iconIds) {
  await buildIcon(id);
}

writeScss();
