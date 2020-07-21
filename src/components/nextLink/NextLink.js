import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

const defaultProps = {
  className: null,
};

const NextLink = (props) => {
  const { children, className, href, ...remainingProps } = props;

  const router = useRouter();
  const urlSegments = router.pathname.split('/');

  const classes = classNames(className, { active: href.indexOf(urlSegments[1]) !== -1 });

  return (
    <Link href={href}>
      <a className={classes} {...remainingProps}>
        {children}
      </a>
    </Link>
  );
};

NextLink.propTypes = propTypes;
NextLink.defaultProps = defaultProps;

export default NextLink;
