import deburr from 'lodash/deburr';

/* eslint-disable no-useless-escape */
export const slugify = (string) =>
  deburr(string)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-') // replace spaces with -
    .replace(/&/g, 'and') // replace & with 'and'
    .replace(/\./g, '-') // replace . with -
    .replace(/([^a-zA-Z0-9\._-]+)/, '');
/* eslint-enable */
