// import { readFileSync } from 'fs';
// import marked from 'marked';
// import { sanitizeHtml } from './sanitizer';
// import { ParsedRequest } from './types'
// const twemoji = require('twemoji');
// const twOptions = { folder: 'svg', ext: '.svg' };
// const emojify = (text: string) => twemoji.parse(text, twOptions);

// const rglr = readFileSync(`${__dirname}/../_fonts/Inter-Regular.woff2`).toString('base64');
// const bold = readFileSync(`${__dirname}/../_fonts/Inter-Bold.woff2`).toString('base64');
// const mono = readFileSync(`${__dirname}/../_fonts/Vera-Mono.woff2`).toString('base64');

function getCss() {
  // let background = 'white';
  // let foreground = 'black';
  // let radial = 'lightgray';

  // if (theme === 'dark') {
  //     background = 'black';
  //     foreground = 'white';
  //     radial = 'dimgray';
  // }
  return `
  




*,
*::before,
*::after {
	box-sizing: border-box;
}



:root {
	-moz-tab-size: 4;
	-o-tab-size: 4;
	 tab-size: 4;
}



html {
	line-height: 1.15;
	-webkit-text-size-adjust: 100%;
}





body {
	margin: 0;
}



body {
	font-family:
	system-ui,
	-apple-system,
	'Segoe UI',
	Roboto,
	Helvetica,
	Arial,
	sans-serif,
	'Apple Color Emoji',
	'Segoe UI Emoji';
}





hr {
	height: 0;
	color: inherit;
}





abbr[title] {
	-webkit-text-decoration: underline dotted;
	 text-decoration: underline dotted;
}



b,
strong {
	font-weight: bolder;
}



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
	monospace;
	font-size: 1em;
}



small {
	font-size: 80%;
}



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





table {
	text-indent: 0;
	border-color: inherit;
}





button,
input,
optgroup,
select,
textarea {
	font-family: inherit;
	font-size: 100%;
	line-height: 1.15;
	margin: 0;
}



button,
select {
	text-transform: none;
}



button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}



::-moz-focus-inner {
	border-style: none;
	padding: 0;
}



:-moz-focusring {
	outline: 1px dotted ButtonText;
}



:-moz-ui-invalid {
	box-shadow: none;
}



legend {
	padding: 0;
}



progress {
	vertical-align: baseline;
}



::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}



[type='search'] {
	-webkit-appearance: textfield;
	outline-offset: -2px;
}



::-webkit-search-decoration {
	-webkit-appearance: none;
}



::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit;
}





summary {
	display: list-item;
}



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





html {
 font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
 line-height: 1.5;
}




body {
 font-family: inherit;
 line-height: inherit;
}



*,
::before,
::after {
 box-sizing: border-box;
 border-width: 0;
 border-style: solid;
 border-color: #e5e7eb;
}



hr {
 border-top-width: 1px;
}



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



a {
 color: inherit;
 text-decoration: inherit;
}



button,
input,
optgroup,
select,
textarea {
 padding: 0;
 line-height: inherit;
 color: inherit;
}



pre,
code,
kbd,
samp {
 font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}



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



img,
video {
 max-width: 100%;
 height: auto;
}

* {
	--tw-shadow: 0 0 #0000;
	--tw-ring-inset: var(--tw-empty, );
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
  `
}

export function getHtml() {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        ${getCss()}
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
`
}

// function getImage(src: string, width ='auto', height = '225') {
//     return `<img
//         class="logo"
//         alt="Generated Image"
//         src="${sanitizeHtml(src)}"
//         width="${sanitizeHtml(width)}"
//         height="${sanitizeHtml(height)}"
//     />`
// }

// function getPlusSign(i: number) {
//     return i === 0 ? '' : '<div class="plus">+</div>';
// }
