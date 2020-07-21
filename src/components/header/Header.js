import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import DesktopHeader from './Desktop';
import MobileNavigation from './Mobile';

const propTypes = {
  bgColor: PropTypes.string,
};

const defaultProps = {
  bgColor: 'transparent',
};

const Header = (props) => {
  const { bgColor } = props;
  const [activeNav, setActiveNav] = useState(false);
  const bodyClass = 'no-scroll';

  const openNavigation = () => {
    setActiveNav(true);
    document.body.classList.add(bodyClass);
  };

  const closeNavigation = () => {
    setActiveNav(false);
    document.body.classList.remove(bodyClass);
  };

  const toggleNavigation = () => {
    activeNav ? closeNavigation() : openNavigation();
  };

  useEffect(() => {
    // when navigating between pages, close menu and remove body class
    Router.events.on('routeChangeComplete', closeNavigation);

    return () => {
      Router.events.off('routeChangeComplete', closeNavigation);
    };
  }, []);

  return (
    <>
      <DesktopHeader activeNav={activeNav} toggle={toggleNavigation} />
      <MobileNavigation activeNav={activeNav} bgColor={bgColor} />
    </>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
