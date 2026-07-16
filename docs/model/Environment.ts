/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'g100'
  : 'white';

type EnvironmentState = {
  path?: string;
  theme?: string;
  mode?: string;
  size?: string;
  density?: string;
};

export class Environment {
  static readonly #eventTarget = new EventTarget();

  static addEventListener(...args: Parameters<EventTarget['addEventListener']>) {
    Environment.#eventTarget.addEventListener(...args);
  }
  static removeEventListener(...args: Parameters<EventTarget['removeEventListener']>) {
    Environment.#eventTarget.removeEventListener(...args);
  }

  static set path(value: EnvironmentState['path']) { Environment.#setState({ path: value }); };
  static get path() { return Environment.state.path; };

  static set theme(value: EnvironmentState['theme']) { Environment.#setState({ theme: value }); };
  static get theme() { return Environment.state.theme; };

  static set mode(value: EnvironmentState['mode']) { Environment.#setState({ mode: value }); };
  static get mode() { return Environment.state.mode; };

  static set size(value: EnvironmentState['size']) { Environment.#setState({ size: value }); };
  static get size() { return Environment.state.size; };

  static set density(value: EnvironmentState['density']) { Environment.#setState({ density: value }); };
  static get density() { return Environment.state.density; };

  static get state(): EnvironmentState {
    const currentState: EnvironmentState = {
      path: '/',
      theme: initialTheme,
      mode: 'productive',
      size: 'md',
      density: 'normal',
    };

    for (const [key, value] of this.getUrl().searchParams) {
      if (Object.hasOwn(currentState, key)) {
        currentState[key as keyof typeof currentState] = value;
      }
    }

    if (currentState.path === '/') {
      currentState.path = 'documentation/introduction';
    }

    return currentState;
  }

  static getUrl(state?: Partial<EnvironmentState>): URL {
    const url = new URL(window.location.toString());

    if (!state) {
      return url;
    }

    for (const key in state) {
      const value = String(state[key as keyof typeof state]);
      url.searchParams.set(key, value);
    }

    return url;
  }

  static #setState(state: Partial<EnvironmentState>) {
    const url = this.getUrl(state);

    window.history.pushState(null, '', url.href);

    this.#eventTarget.dispatchEvent(new Event('change'));

    this.apply();
  }

  static apply() {
    for (const [key, value] of Object.entries(this.state)) {
      document.documentElement.dataset[key] = value;
    }
  }
}
