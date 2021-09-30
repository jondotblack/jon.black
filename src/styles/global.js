import { css } from '@emotion/react';
import { theme } from 'styles/theme';

export const Styles = css`
  @font-face {
    font-family: 'PP Woodland';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('PP Woodland'), local('PPWoodland-Light'),
      url('https://jonblack-assets.s3.us-east-2.amazonaws.com/fonts/PPWoodland-Light.woff2')
        format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Neue Machina'), local('NeueMachina-Bold'),
      url('https://jonblack-assets.s3.us-east-2.amazonaws.com/fonts/NeueMachina-Bold.woff2')
        format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Neue Machina'), local('NeueMachina-Regular'),
      url('https://jonblack-assets.s3.us-east-2.amazonaws.com/fonts/NeueMachina-Regular.woff2')
        format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  :root {
    --font-family: 'Neue Machina', monospace;
    --font-family-serif: 'PP Woodland', sans-serif;
    --font-size: 1.125rem;
    --font-size-small: 0.875em;
    --font-line-height: 1.5;
    --font-color: ${theme.colors.seed};
    --font-weight: 400;
    --font-weight-bold: 700;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    --lodgify-ui-action-color: #0d0a00;
    --lodgify-ui-action-darker-color: #0a0800;
    --lodgify-ui-action-lighter-color: #9e9d99;
    --lodgify-ui-action-contrast-color: #ffffff;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    font-size: var(--font-size);
    line-height: var(--font-line-height);
    font-weight: var(--font-weight);
    color: var(--font-color);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &.no-scroll {
      position: fixed;
      overflow-y: scroll;
      width: 100%;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: var(--font-family);
    font-weight: normal;
    line-height: 1.2;
  }

  h1,
  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 32px;
  }

  ul li,
  p {
    font-size: 24px;
    line-height: 1.5;
  }

  /* a bug with emotion where if the @media styles are nested they get combined,
  eg. they become h2 h3 { ... } instead of h2, h3 { ... } 
  so they must be grouped together separately */
  ${theme.mediaQueries.lg`
    ul li,
    p {
      font-size: 18px;
      line-height: 1.4;
    }

    h1,
    h2 {
      font-size: 28px;
    }

    h3 {
      font-size: 20px;
      font-weight: 700;
    }
  `}

  a {
    color: var(--font-color);
    text-decoration: none;

    &:hover {
      color: var(--font-color);
      text-decoration: underline;
    }
  }

  /* normalize cross browser styling */
  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  ul li + li {
    margin-top: 0.5rem;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: var(--font-weight-bold);
  }

  small {
    font-size: var(--font-size-small);
  }

  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }

  figure {
    margin: 0 0 1rem;
  }

  img,
  svg {
    vertical-align: middle;
  }

  table {
    caption-side: bottom;
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: 0.5rem;
    text-align: left;
  }

  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  label {
    display: inline-block;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [role='button'] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    margin-bottom: 0.5rem;
    padding: 0;
    width: 100%;
    line-height: inherit;
    white-space: normal;
  }

  legend + * {
    clear: left;
  }

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  iframe {
    border: 0;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden] {
    display: none !important;
  }
`;
