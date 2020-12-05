import { baseFontSize } from './constants';

/**
 * Internal helper function
 * Convert pixel value to relative unit
 * @param {string} unit
 * @param {number} base
 * @returns {function(number): string}
 */
export function pxToRelUnit(unit, base) {
  return (x) => `${parseFloat(x) / base}${unit}`;
}

// Relative unit functions
export const pxToEm = pxToRelUnit('em', baseFontSize);
export const pxToRem = pxToRelUnit('rem', baseFontSize);
export const mapToEm = (arr) => arr.map(pxToEm);
export const mapToRem = (arr) => arr.map(pxToRem);

/**
 * Maps breakpoints dictionary, and creates utilities for
 * constructing media queries with those keys.
 *
 * This function takes an object structured
 * like so:
 * ```
 * {
 *   sm: 640px,
 *   md: 960px,
 *   lg: 1280px
 * }
 *
 * The mapping function will be applied to each of the values, and the keys
 * will be used to generate the correct media query string.
 *
 * For example, `media.lessThan('sm')` will produce a string like
 * `(max-width: 640px)` that can be used for styled components.
 *
 * @param {object} breakpoints - the breakpoints object
 */
export function mapMedia(breakpoints) {
  const mapQuery = (func, keys, ...args) => {
    const values = args.flat().map(func);
    const queries = keys.map((key, i) => `(${key}: ${values[i]})`);
    return queries.join(' and ');
  };

  const breakpoint = (key) => breakpoints[key];
  const [min, max] = ['min-width', 'max-width'];

  return {
    // Returns breakpoint value
    breakpoint,
    // Returns true if breakpoint is less than key, i.e. lessThan('sm')
    lessThan: (key) => mapQuery(breakpoint, [max], key),
    // Returns true if breakpoint is more than key, i.e. moreThan('sm')
    moreThan: (key) => mapQuery(breakpoint, [min], key),
    // Returns true if breakpoint is between keys, i.e. between('sm', 'lg')
    between: (...keys) => mapQuery(breakpoint, [min, max], ...keys),
  };
}
