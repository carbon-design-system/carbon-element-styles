import {
  DemoEnvironmentOptions,
  Densities,
  Modes,
  Sizes,
  Themes,
  get as getEnvironment,
  set as setEnvironment,
} from './environment';

export function buildSelect(key: keyof DemoEnvironmentOptions, label: string, options: {
  value: string;
  label: string;
}[]): HTMLLabelElement {
  const labelElement = document.createElement('label');
  labelElement.innerText = label;

  const select = document.createElement('select');
  select.addEventListener('change', ({ target }) => {
    setEnvironment({
      [key]: (target as HTMLSelectElement | undefined)?.value ,
    });
  });

  labelElement.appendChild(select);

  for (const option of options) {
    const optionElement = document.createElement('option');
    optionElement.innerText = option.label;
    optionElement.value = option.value;
    optionElement.selected = getEnvironment()[key] === option.value;

    select.appendChild(optionElement);
  }

  return labelElement;
}

export function render() {
  const controls = document.getElementById('controls');

  if (controls) {
    const themes = buildSelect('theme', 'Theme', [
      {
        value: Themes.White,
        label: 'White',
      },
      {
        value: Themes.Gray10,
        label: 'Gray 10',
      },
      {
        value: Themes.Gray90,
        label: 'Gray 90',
      },
      {
        value: Themes.Gray100,
        label: 'Gray 100',
      },
    ]);

    const modes = buildSelect('mode', 'Mode', [
      {
        value: Modes.Productive,
        label: 'Productive',
      },
      {
        value: Modes.Expressive,
        label: 'Expressive',
      },
    ]);

    const sizes = buildSelect('size', 'Size', [
      {
        value: Sizes.Xs,
        label: 'XS',
      },
      {
        value: Sizes.Sm,
        label: 'SM',
      },
      {
        value: Sizes.Md,
        label: 'MD',
      },
      {
        value: Sizes.Lg,
        label: 'LG',
      },
    ]);

    const densities = buildSelect('density', 'Density', [
      {
        value: Densities.Condensed,
        label: 'Condensed',
      },
      {
        value: Densities.Normal,
        label: 'Normal',
      },
    ]);

    controls.replaceChildren(themes, modes, sizes, densities);
  }
}
