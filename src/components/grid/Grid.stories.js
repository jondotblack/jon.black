import React from 'react';
import faker from 'faker';

import { Box, Col, Container, Flex, Row } from '.';

export default {
  component: Box,
  title: 'Components/Grid',
};

// eslint-disable-next-line react/prop-types
const Placeholder = ({ label }) => (
  <Box p={3} bg="vegenaise">
    {label || faker.lorem.sentence()}
  </Box>
);

export const box = () => <Box>{faker.lorem.sentence()}</Box>;

export const flex = () => (
  <Flex justifyContent="space-between">
    <Box>{faker.lorem.sentence()}</Box>
    <Box>{faker.lorem.sentence()}</Box>
  </Flex>
);

export const grid = () => (
  <Container>
    <Row>
      <Col span={6}>
        <Placeholder />
      </Col>
      <Col span={4}>
        <Placeholder />
      </Col>
      <Col span={2}>
        <Placeholder />
      </Col>
    </Row>

    <Row mt={3}>
      <Col
        span={{
          sm: 9,
          md: 6,
          lg: 4,
        }}
      >
        <Placeholder />
      </Col>
      <Col
        span={{
          sm: 9,
          md: 6,
          lg: 4,
        }}
      >
        <Placeholder />
      </Col>
    </Row>

    <Row mt={3}>
      <Col>
        <Placeholder />
      </Col>
      <Col>
        <Placeholder />
      </Col>
      <Col>
        <Placeholder />
      </Col>
      <Col>
        <Placeholder />
      </Col>
      <Col>
        <Placeholder />
      </Col>
      <Col>
        <Placeholder />
      </Col>
    </Row>
  </Container>
);
