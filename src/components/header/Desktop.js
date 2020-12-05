import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/button';
import { Container, Flex, Box } from 'components/grid';
import { NextLink } from 'components/nextLink';

import * as Styled from './Header.styled';

const propTypes = {
  activeNav: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const DesktopNavigation = (props) => {
  const { activeNav, toggle } = props;

  return (
    <Styled.Header>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Styled.Logo as={NextLink} href="/">
              Jon Black
            </Styled.Logo>
          </Box>

          <Box>
            <Styled.HamburgerNav>
              <Button
                onClick={toggle}
                aria-expanded={activeNav}
                aria-label="Mobile Navigation Button"
              >
                {activeNav ? 'Close' : 'Menu'}
              </Button>
            </Styled.HamburgerNav>

            <Styled.HeaderNav aria-label="Primary Navigation">
              <NextLink href="/consulting">Consulting</NextLink>
              <NextLink href="/ventures">Ventures</NextLink>
              <NextLink href="/blog">Blog</NextLink>
              <NextLink href="/mixtape">Mixtape</NextLink>
              <NextLink href="/contact">Contact</NextLink>
            </Styled.HeaderNav>
          </Box>
        </Flex>
      </Container>
    </Styled.Header>
  );
};

DesktopNavigation.propTypes = propTypes;

export default DesktopNavigation;
