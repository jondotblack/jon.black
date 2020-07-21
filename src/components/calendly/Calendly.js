import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'components/grid';
import { Text } from 'components/typography';

import { InlineWidget } from 'react-calendly';

import { pageData } from 'data/officeHours';

import * as Styled from './Calendly.styled';

const propTypes = {
  lead: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

const defaultProps = {
  lead: pageData.lead,
  title: pageData.title,
  url: 'https://calendly.com/jondotblack/30min',
};

const Calendly = (props) => {
  const { lead, title, url } = props;

  return (
    <Styled.Calendly>
      <Col span={{ xs: 12, lg: 3 }} mb={{ xs: 3, lg: 0 }}>
        <Text as="h3">{title}</Text>
      </Col>
      <Col>
        <Text>{lead}</Text>
        <InlineWidget
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '40413b',
          }}
          styles={{
            height: '1000px',
          }}
          title="Book Office Hours through Calendly"
          url={url}
        />
      </Col>
    </Styled.Calendly>
  );
};

Calendly.propTypes = propTypes;
Calendly.defaultProps = defaultProps;

export default Calendly;
