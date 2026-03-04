# @carbon/html

Carbon HTML is an experimental styling system for native HTML elements, relying on semantic, attribute-focused selectors instead of class names. There is no 1:1 parity between Carbon HTML and the core React and Web Component implementations of the Carbon Design System. It's use case is targeted more towards simple web pages and editorial content such as styling markdown documents.

## Getting started

### Installation

```console
npm i @carbon/html
```

### Importing individual elements

To make use of individual elements, import them via `@use` and include their `styles` mixin in your Sass stylesheets:

```scss
@use '@carbon/html/elements/button';

@include button.styles;
```

#### Emitting on custom selectors

Every element has a default selector on which it's styles are emitted. You can configure this selector, but need to make sure the underlying HTML tag and semantics are kept.

The `button` element for example expects to be emitted on a `<button>` tag. By default, it's selector is simply `button`. If you only want to emit these styles on buttons that are explicitly of type button, you can do so via the `with` syntax of Sass or each time you include the mixin.

```scss
@use '@carbon/html/elements/button' with ($config: (
  selector: 'button[type="button"]',
));

@include button.styles;
```

```scss
@use '@carbon/html/elements/button';

@include button.styles((
  selector: 'button[type="button"]',
));
```

#### Configuring elements

Some elements have additional configuration options to adjust their visual appearance. You can configure these options the same way as you can configure the selector: via the `with` syntax of Sass or each time you include the mixin:

```scss
@use '@carbon/html/elements/button' with ($config: (
  kind: 'ghost',
));

@include button.styles;
```

```scss
@use '@carbon/html/elements/button';

@include button.styles((
  kind: 'ghost',
));
```

Combining these options with custom selectors means you can emit multiple variants of the same element depending on their context:

```scss
@use '@carbon/html/elements/button';

@include button.styles;
@include button.styles((
  selector: 'button[type="submit"]',
  kind: 'primary',
));
```

### Using prebuilts

This library offers several prebuilt (opinionated) stylesheets you can use out-of-the-box:

| Name | Path | Usage |
| :- | :- | :- |
| Productive | `/src/prebuilt/productive.scss` | Includes all available elements with their default selectors. Uses a productive style with medium sized elements. Intended for interaction-heavy pages. |
| Expressive | `/src/prebuilt/expressive.scss` | Includes all available elements with their default selectors. Uses an expressive style with large sized elements. Intended for content-heavy pages such as marketing or documentation. |
| Editorial | `/src/prebuilt/editorial.scss` | Only includes non-interactive elements with their default selectors. Uses an expressive style with large elements. Intended for content-only pages such as blogs and styling raw markdown. |

To compile the prebuilts, run the following command in this repository:

```console
npm run build:prebuilts
```

The compiled and minfied CSS will be saved to `/dist/prebuilts` and can be copied to your project.


## License

Licensed under the [Apache 2.0](./LICENSE) license.
