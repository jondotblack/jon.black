import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'components/grid';
import { Newsletter } from 'components/newsletter';

import * as Styled from './Footer.styled';

const propTypes = {
  offsetFooter: PropTypes.bool.isRequired,
};

const Footer = (props) => {
  const { offsetFooter } = props;

  return (
    <Styled.Footer>
      <Container>
        <Row justifyContent={offsetFooter ? 'flex-end' : 'flex-start'}>
          <Col span={{ xs: 12, lg: 9 }}>
            <Row>
              <Col span={{ xs: 12, md: 6 }} mb={{ xs: 5, lg: 0 }}>
                <Styled.FooterNav aria-label="social links">
                  <a
                    href="http://instagram.com/jondotblack"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/jontblack/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <br />
                  <a
                    href="https://angel.co/u/jondotblack"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AngelList
                  </a>
                  <br />
                  <a
                    href="https://workingnotworking.com/1823-jonathan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WorkingNotWorking
                  </a>
                </Styled.FooterNav>
              </Col>
              <Col>
                <Newsletter />
                <Styled.OpenSource
                  href="https://gitlab.com/jondotblack/jon.black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  This site is open source <b>on GitLab</b>
                </Styled.OpenSource>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Styled.Footer>
  );
};

Footer.propTypes = propTypes;

export default Footer;
