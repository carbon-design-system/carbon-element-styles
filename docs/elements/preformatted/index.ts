import type { Demo, Meta } from '../../js/_types';

export const meta = {
  id: 'preformatted',
  name: 'Preformatted',
} as const satisfies Meta;

const html = /* html */`
<pre>lorem ipsum(): dolor {
  sit(amet)
  consetetur = sadipscing(elitr)

  sed (diam nonumy eirmod) {
    tempor = invidunt
      .ut((labore) => et.dolore.magna)

    aliquyam = erat.sed
    diam.voluptua()
  } at (vero: eos&lt;et&gt;) {
    accusam(et.justo)
    duo = dolores
  }
}</pre>
`;

export const demos: Demo[] = [
  {
    id: 'default',
    name: 'Default',
    html,
  },
];
