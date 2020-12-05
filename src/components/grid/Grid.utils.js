import { theme } from 'styles/theme';
import isObject from 'lodash/isObject';
import isArray from 'lodash/fp/isArray';

// format percentage
const toPercent = (number) => `${number * 100}%`;

// support styled system array of values or object aliases
export const transformProp = (func) => (prop) => {
  if (isArray(prop)) {
    return prop.map(func);
  }

  if (isObject(prop)) {
    // eslint-disable-next-line no-shadow
    return Object.entries(prop).reduce((acc, [key, prop]) => {
      acc[key] = func(prop);
      return acc;
    }, {});
  }

  return func(prop);
};

// derive percentage from span count and total columns
const formatFlex = (columns) => (value) => {
  return toPercent(parseFloat(value) / columns);
};

export const calcFlex = (prop) => {
  const { columns } = theme.grid;

  return transformProp(formatFlex(columns))(prop);
};

// calculate the value for each breakpoint [key]
export const composeFlexProps = (keys) => (props) => {
  return keys.reduce((acc, key) => {
    if (props[key]) {
      acc[key] = calcFlex(props[key]);
    }
    return acc;
  }, {});
};

// transform the props to correct styling
const generateProps = (props) => {
  const getMaxWidth = transformProp((value) => `${value}`);
  const getFlexBasis = transformProp((value) => `1 0 ${value}`);
  const flexProps = composeFlexProps(['span', 'push', 'pull', 'offset']);

  const { span, push, pull, offset } = flexProps(props);
  const flex = span ? getFlexBasis(span) : '1';
  const maxWidth = span ? getMaxWidth(span) : '100%';

  return {
    flex,
    left: push,
    marginLeft: offset,
    maxWidth,
    right: pull,
  };
};

export { generateProps, toPercent };
