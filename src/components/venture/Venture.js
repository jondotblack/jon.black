import React from 'react';
import PropTypes from 'prop-types';

import { Col, Row } from 'components/grid';
import { Markdown } from 'components/markdown';
import { Text } from 'components/typography';

const propTypes = {
  description: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
};

const defaultProps = {
  description: '',
  link: null,
  status: null,
};

const Venture = (props) => {
  const { description, link, name, status } = props;

  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      ) : (
        <Text as="h2" mb={0}>
          {name}
        </Text>
      )}
      <Row justifyContent="space-between" pt={2}>
        <Col span={{ _: 12, md: 7 }}>
          <Text>
            <Markdown>{description}</Markdown>
          </Text>
        </Col>
        <Col span={{ _: 12, md: 'auto' }}>
          <Text>{status}</Text>
        </Col>
      </Row>
    </>
  );
};

Venture.propTypes = propTypes;
Venture.defaultProps = defaultProps;

export default Venture;
