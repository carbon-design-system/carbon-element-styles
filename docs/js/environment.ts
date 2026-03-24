/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { prefix } from './config';
import * as elementExports from '../elements';

export const RequestRenderEvent = `${prefix}:request-render`;

export const Elements = Object.values(elementExports).map((e) => e.meta.id);

export const Modes = {
  Productive: 'productive',
  Expressive: 'expressive',
} as const;

export const Sizes = {
  Xs: 'xs',
  Sm: 'sm',
  Md: 'md',
  Lg: 'lg',
  Xl: 'xl',
} as const;

export const Densities = {
  Condensed: 'condensed',
  Normal: 'normal',
} as const;

export const Themes = {
  White: 'white',
  Gray10: 'g10',
  Gray90: 'g90',
  Gray100: 'g100',
} as const;

export type DemoEnvironmentOptions = {
  element: typeof Elements[0];
  demo: string;
  mode: typeof Modes[keyof typeof Modes];
  size: typeof Sizes[keyof typeof Sizes];
  density: typeof Densities[keyof typeof Densities];
  theme: typeof Themes[keyof typeof Themes];
};

export function set(environment: Partial<DemoEnvironmentOptions>) {
  const url = new URL(window.location.toString());

  for (const key in environment) {
    const value = environment[key as keyof DemoEnvironmentOptions] as string;
    url.searchParams.set(key, value);
  }

  window.history.pushState(null, '', url.href);

  window.dispatchEvent(new Event(RequestRenderEvent));
}

function isValidElement(id: string | null): id is DemoEnvironmentOptions['element'] {
  return (id !== null && Elements.includes(id as DemoEnvironmentOptions['element']));
}

function isValidMode(id: string | null): id is DemoEnvironmentOptions['mode'] {
  return (id !== null && Object.values(Modes).includes(id as DemoEnvironmentOptions['mode']));
}

function isValidSize(id: string | null): id is DemoEnvironmentOptions['size'] {
  return (id !== null && Object.values(Sizes).includes(id as DemoEnvironmentOptions['size']));
}

function isValidDensity(id: string | null): id is DemoEnvironmentOptions['density'] {
  return (id !== null && Object.values(Densities).includes(id as DemoEnvironmentOptions['density']));
}

function isValidTheme(id: string | null): id is DemoEnvironmentOptions['theme'] {
  return (id !== null && Object.values(Themes).includes(id as DemoEnvironmentOptions['theme']));
}

export function get(): DemoEnvironmentOptions {
  const url = new URL(window.location.toString());

  const element = url.searchParams.get('element');
  const demo = url.searchParams.get('demo');
  const mode = url.searchParams.get('mode');
  const size = url.searchParams.get('size');
  const density = url.searchParams.get('density');
  const theme = url.searchParams.get('theme');

  return {
    element: isValidElement(element) ? element : elementExports.abbreviation.meta.id,
    demo: demo ?? 'default',
    mode: isValidMode(mode) ? mode : Modes.Productive,
    size: isValidSize(size) ? size : Sizes.Md,
    density: isValidDensity(density) ? density : Densities.Normal,
    theme: isValidTheme(theme) ? theme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? Themes.Gray100 : Themes.White),
  };
}
