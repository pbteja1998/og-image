
import { readFileSync } from 'fs';
import marked from 'marked';
import { sanitizeHtml } from './sanitizer';
import { ParsedRequest } from './types';
const twemoji = require('twemoji');
const twOptions = { folder: 'svg', ext: '.svg' };
const emojify = (text: string) => twemoji.parse(text, twOptions);

const rglr = readFileSync(`${__dirname}/../_fonts/Inter-Regular.woff2`).toString('base64');
const bold = readFileSync(`${__dirname}/../_fonts/Inter-Bold.woff2`).toString('base64');
const mono = readFileSync(`${__dirname}/../_fonts/Vera-Mono.woff2`).toString('base64');

function getCss(theme: string, fontSize: string) {
    let background = 'white';
    let foreground = 'black';
    let radial = 'lightgray';

    if (theme === 'dark') {
        background = 'black';
        foreground = 'white';
        radial = 'dimgray';
    }
    return `
    /*! tailwindcss v2.0.4 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

    /*
    Document
    ========
    */
    
    /**
    Use a better box model (opinionated).
    */
    
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    
    /**
    Use a more readable tab size (opinionated).
    */
    
    :root {
        -moz-tab-size: 4;
        -o-tab-size: 4;
           tab-size: 4;
    }
    
    /**
    1. Correct the line height in all browsers.
    2. Prevent adjustments of font size after orientation changes in iOS.
    */
    
    html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
    }
    
    /*
    Sections
    ========
    */
    
    /**
    Remove the margin in all browsers.
    */
    
    body {
        margin: 0;
    }
    
    /**
    Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
    */
    
    body {
        font-family:
            system-ui,
            -apple-system, /* Firefox supports this but not yet `system-ui` */
            'Segoe UI',
            Roboto,
            Helvetica,
            Arial,
            sans-serif,
            'Apple Color Emoji',
            'Segoe UI Emoji';
    }
    
    /*
    Grouping content
    ================
    */
    
    /**
    1. Add the correct height in Firefox.
    2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
    */
    
    hr {
        height: 0; /* 1 */
        color: inherit; /* 2 */
    }
    
    /*
    Text-level semantics
    ====================
    */
    
    /**
    Add the correct text decoration in Chrome, Edge, and Safari.
    */
    
    abbr[title] {
        -webkit-text-decoration: underline dotted;
                text-decoration: underline dotted;
    }
    
    /**
    Add the correct font weight in Edge and Safari.
    */
    
    b,
    strong {
        font-weight: bolder;
    }
    
    /**
    1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
    2. Correct the odd 'em' font sizing in all browsers.
    */
    
    code,
    kbd,
    samp,
    pre {
        font-family:
            ui-monospace,
            SFMono-Regular,
            Consolas,
            'Liberation Mono',
            Menlo,
            monospace; /* 1 */
        font-size: 1em; /* 2 */
    }
    
    /**
    Add the correct font size in all browsers.
    */
    
    small {
        font-size: 80%;
    }
    
    /**
    Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
    */
    
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    
    sub {
        bottom: -0.25em;
    }
    
    sup {
        top: -0.5em;
    }
    
    /*
    Tabular data
    ============
    */
    
    /**
    1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
    2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
    */
    
    table {
        text-indent: 0; /* 1 */
        border-color: inherit; /* 2 */
    }
    
    /*
    Forms
    =====
    */
    
    /**
    1. Change the font styles in all browsers.
    2. Remove the margin in Firefox and Safari.
    */
    
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }
    
    /**
    Remove the inheritance of text transform in Edge and Firefox.
    1. Remove the inheritance of text transform in Firefox.
    */
    
    button,
    select { /* 1 */
        text-transform: none;
    }
    
    /**
    Correct the inability to style clickable types in iOS and Safari.
    */
    
    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
    }
    
    /**
    Remove the inner border and padding in Firefox.
    */
    
    ::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }
    
    /**
    Restore the focus styles unset by the previous rule.
    */
    
    :-moz-focusring {
        outline: 1px dotted ButtonText;
    }
    
    /**
    Remove the additional ':invalid' styles in Firefox.
    See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
    */
    
    :-moz-ui-invalid {
        box-shadow: none;
    }
    
    /**
    Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
    */
    
    legend {
        padding: 0;
    }
    
    /**
    Add the correct vertical alignment in Chrome and Firefox.
    */
    
    progress {
        vertical-align: baseline;
    }
    
    /**
    Correct the cursor style of increment and decrement buttons in Safari.
    */
    
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
    }
    
    /**
    1. Correct the odd appearance in Chrome and Safari.
    2. Correct the outline style in Safari.
    */
    
    [type='search'] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
    }
    
    /**
    Remove the inner padding in Chrome and Safari on macOS.
    */
    
    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    
    /**
    1. Correct the inability to style clickable types in iOS and Safari.
    2. Change font properties to 'inherit' in Safari.
    */
    
    ::-webkit-file-upload-button {
        -webkit-appearance: button; /* 1 */
        font: inherit; /* 2 */
    }
    
    /*
    Interactive
    ===========
    */
    
    /*
    Add the correct display in Chrome and Safari.
    */
    
    summary {
        display: list-item;
    }/**
     * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
     * A thin layer on top of normalize.css that provides a starting point more
     * suitable for web applications.
     */
    
    /**
     * Removes the default spacing and border for appropriate elements.
     */
    
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }
    
    button {
      background-color: transparent;
      background-image: none;
    }
    
    /**
     * Work around a Firefox/IE bug where the transparent `button` background
     * results in a loss of the default `button` focus styles.
     */
    
    button:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }
    
    fieldset {
      margin: 0;
      padding: 0;
    }
    
    ol,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    /**
     * Tailwind custom reset styles
     */
    
    /**
     * 1. Use the user's configured `sans` font-family (with Tailwind's default
     *    sans-serif font stack as a fallback) as a sane default.
     * 2. Use Tailwind's default "normal" line-height so the user isn't forced
     *    to override it to ensure consistency even when using the default theme.
     */
    
    html {
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
      line-height: 1.5; /* 2 */
    }
    
    
    /**
     * Inherit font-family and line-height from `html` so users can set them as
     * a class directly on the `html` element.
     */
    
    body {
      font-family: inherit;
      line-height: inherit;
    }
    
    /**
     * 1. Prevent padding and border from affecting element width.
     *
     *    We used to set this in the html element and inherit from
     *    the parent element for everything else. This caused issues
     *    in shadow-dom-enhanced elements like <details> where the content
     *    is wrapped by a div with box-sizing set to `content-box`.
     *
     *    https://github.com/mozdevs/cssremedy/issues/4
     *
     *
     * 2. Allow adding a border to an element by just adding a border-width.
     *
     *    By default, the way the browser specifies that an element should have no
     *    border is by setting it's border-style to `none` in the user-agent
     *    stylesheet.
     *
     *    In order to easily add borders to elements by just setting the `border-width`
     *    property, we change the default border-style for all elements to `solid`, and
     *    use border-width to hide them instead. This way our `border` utilities only
     *    need to set the `border-width` property instead of the entire `border`
     *    shorthand, making our border utilities much more straightforward to compose.
     *
     *    https://github.com/tailwindcss/tailwindcss/pull/116
     */
    
    *,
    ::before,
    ::after {
      box-sizing: border-box; /* 1 */
      border-width: 0; /* 2 */
      border-style: solid; /* 2 */
      border-color: #e5e7eb; /* 2 */
    }
    
    /*
     * Ensure horizontal rules are visible by default
     */
    
    hr {
      border-top-width: 1px;
    }
    
    /**
     * Undo the `border-style: none` reset that Normalize applies to images so that
     * our `border-{width}` utilities have the expected effect.
     *
     * The Normalize reset is unnecessary for us since we default the border-width
     * to 0 on all elements.
     *
     * https://github.com/tailwindcss/tailwindcss/issues/362
     */
    
    img {
      border-style: solid;
    }
    
    textarea {
      resize: vertical;
    }
    
    input::-moz-placeholder, textarea::-moz-placeholder {
      opacity: 1;
      color: #9ca3af;
    }
    
    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
      opacity: 1;
      color: #9ca3af;
    }
    
    input::placeholder,
    textarea::placeholder {
      opacity: 1;
      color: #9ca3af;
    }
    
    button,
    [role="button"] {
      cursor: pointer;
    }
    
    table {
      border-collapse: collapse;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }
    
    /**
     * Reset links to optimize for opt-in styling instead of
     * opt-out.
     */
    
    a {
      color: inherit;
      text-decoration: inherit;
    }
    
    /**
     * Reset form element properties that are easy to forget to
     * style explicitly so you don't inadvertently introduce
     * styles that deviate from your design system. These styles
     * supplement a partial reset that is already applied by
     * normalize.css.
     */
    
    button,
    input,
    optgroup,
    select,
    textarea {
      padding: 0;
      line-height: inherit;
      color: inherit;
    }
    
    /**
     * Use the configured 'mono' font family for elements that
     * are expected to be rendered with a monospace font, falling
     * back to the system monospace stack if there is no configured
     * 'mono' font family.
     */
    
    pre,
    code,
    kbd,
    samp {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
    
    /**
     * Make replaced elements `display: block` by default as that's
     * the behavior you want almost all of the time. Inspired by
     * CSS Remedy, with `svg` added as well.
     *
     * https://github.com/mozdevs/cssremedy/issues/14
     */
    
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      vertical-align: middle;
    }
    
    /**
     * Constrain images and videos to the parent width and preserve
     * their instrinsic aspect ratio.
     *
     * https://github.com/mozdevs/cssremedy/issues/14
     */
    
    img,
    video {
      max-width: 100%;
      height: auto;
    }
    
    * {
        --tw-shadow: 0 0 #0000;
        --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
    }
    .relative {
        position: relative;
    }
    .order-2 {
        order: 2;
    }
    .order-1 {
        order: 1;
    }
    .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }
    .-mx-8 {
        margin-left: -2rem;
        margin-right: -2rem;
    }
    .mt-6 {
        margin-top: 1.5rem;
    }
    .mt-8 {
        margin-top: 2rem;
    }
    .-mt-8 {
        margin-top: -2rem;
    }
    .flex {
        display: flex;
    }
    .h-12 {
        height: 3rem;
    }
    .w-12 {
        width: 3rem;
    }
    .max-w-7xl {
        max-width: 80rem;
    }
    .max-w-2xl {
        max-width: 42rem;
    }
    .flex-col {
        flex-direction: column;
    }
    .flex-wrap {
        flex-wrap: wrap;
    }
    .items-center {
        align-items: center;
    }
    .justify-center {
        justify-content: center;
    }
    .overflow-hidden {
        overflow: hidden;
    }
    .rounded-md {
        border-radius: 0.375rem;
    }
    .bg-indigo-500 {
        --tw-bg-opacity: 1;
        background-color: rgba(99, 102, 241, var(--tw-bg-opacity));
    }
    .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .py-8 {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .pt-8 {
        padding-top: 2rem;
    }
    .text-3xl {
        font-size: 1.875rem;
        line-height: 2.25rem;
    }
    .text-base {
        font-size: 1rem;
        line-height: 1.5rem;
    }
    .text-2xl {
        font-size: 1.5rem;
        line-height: 2rem;
    }
    .font-extrabold {
        font-weight: 800;
    }
    .font-medium {
        font-weight: 500;
    }
    .text-white {
        --tw-text-opacity: 1;
        color: rgba(255, 255, 255, var(--tw-text-opacity));
    }
    .text-gray-900 {
        --tw-text-opacity: 1;
        color: rgba(17, 24, 39, var(--tw-text-opacity));
    }
    .text-gray-500 {
        --tw-text-opacity: 1;
        color: rgba(107, 114, 128, var(--tw-text-opacity));
    }
    .text-indigo-600 {
        --tw-text-opacity: 1;
        color: rgba(79, 70, 229, var(--tw-text-opacity));
    }
    @media (min-width: 640px) {
    
        .sm\:py-12 {
            padding-top: 3rem;
            padding-bottom: 3rem;
        }
    
        .sm\:px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
    
        .sm\:text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }
    
        .sm\:text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }
    }
    @media (min-width: 1024px) {
    
        .lg\:mr-0 {
            margin-right: 0px;
        }
    
        .lg\:ml-auto {
            margin-left: auto;
        }
    
        .lg\:w-full {
            width: 100%;
        }
    
        .lg\:max-w-none {
            max-width: none;
        }
    
        .lg\:py-16 {
            padding-top: 4rem;
            padding-bottom: 4rem;
        }
    
        .lg\:pl-10 {
            padding-left: 2.5rem;
        }
    }
    `;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { text, theme, md, fontSize, images, widths, heights } = parsedReq;
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        ${getCss(theme, fontSize)}
    </style>
  </head>
  <body>
    <div class="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
      <div
        class="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-full lg:pl-10"
      >
        <div>
          <div
            class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
          >
            <img
              src="https://unavatar.backend.ideamarket.io:8080/twitter/elonmusk"
            />
          </div>
        </div>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          @elonmusk
        </h2>
        <div class="mt-8 overflow-hidden">
          <dl class="-mx-8 -mt-8 flex flex-wrap">
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">Price</dt>
              <dd
                class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl"
              >
                $3.88
              </dd>
            </div>
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">
                Deposits
              </dt>
              <dd
                class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl"
              >
                $75.32K
              </dd>
            </div>
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">
                Supply
              </dt>
              <dd
                class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl"
              >
                38.80K
              </dd>
            </div>
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">
                Holders
              </dt>
              <dd
                class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl"
              >
                47
              </dd>
            </div>
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">
                24H Volume
              </dt>
              <dd
                class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl"
              >
                $0.00
              </dd>
            </div>
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">
                24H Change
              </dt>
              <dd
                class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl"
              >
                0.00%
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </body>
</html>
`;
}

function getImage(src: string, width ='auto', height = '225') {
    return `<img
        class="logo"
        alt="Generated Image"
        src="${sanitizeHtml(src)}"
        width="${sanitizeHtml(width)}"
        height="${sanitizeHtml(height)}"
    />`
}

function getPlusSign(i: number) {
    return i === 0 ? '' : '<div class="plus">+</div>';
}
