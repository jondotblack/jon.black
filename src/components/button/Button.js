import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Button.styled';

const propTypes = {
  block: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  block: false,
  disabled: false,
  href: null,
  loading: false,
  onClick: null,
};

const Button = (props) => {
  const { block, children, disabled, href, loading, onClick } = props;

  // if `href` prop is passed through, then render as anchor tag
  const asLink = href
    ? {
        href,
        as: 'a',
      }
    : null;

  const clickHandler = (event) => {
    if (disabled || loading) return;

    // eslint-disable-next-line no-unused-expressions
    onClick && onClick(event);
  };

  return (
    <Styled.Button {...asLink} block={block} disabled={disabled} onClick={clickHandler}>
      {loading ? 'Loading' : <>{children}</>}
    </Styled.Button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
