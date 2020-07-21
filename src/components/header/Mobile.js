import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'components/grid';
import { NextLink } from 'components/nextLink';
import { Newsletter } from 'components/newsletter';

import * as Styled from './Header.styled';

const propTypes = {
  activeNav: PropTypes.bool.isRequired,
  bgColor: PropTypes.string.isRequired,
};

const MobileNavigation = (props) => {
  const { activeNav, bgColor } = props;

  return (
    <Styled.MobileMenu activeNav={activeNav} bgColor={bgColor}>
      <Container>
        <Row>
          <Col>
            <Styled.MobileNav aria-label="Mobile Navigation">
              <NextLink href="/consulting">Consulting</NextLink>
              <NextLink href="/ventures">Ventures</NextLink>
              <NextLink href="/blog">Blog</NextLink>
              <NextLink href="/mixtape">Mixtape</NextLink>
              <NextLink href="/contact">Contact</NextLink>
            </Styled.MobileNav>

            <Styled.MobileLinks aria-label="social links">
              <a href="http://instagram.com/jondotblack" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/jontblack/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://angel.co/u/jondotblack" target="_blank" rel="noopener noreferrer">
                AngelList
              </a>
              <a
                href="https://workingnotworking.com/1823-jonathan"
                target="_blank"
                rel="noopener noreferrer"
              >
                WorkingNotWorking
              </a>
            </Styled.MobileLinks>

            <Newsletter />
          </Col>
        </Row>
      </Container>
    </Styled.MobileMenu>
  );
};

MobileNavigation.propTypes = propTypes;

export default MobileNavigation;
