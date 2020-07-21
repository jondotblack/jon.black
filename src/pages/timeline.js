import React from 'react';
import { theme } from 'styles/theme';

import { Col, Row } from 'components/grid';
import { Layout } from 'components/layout';
import { List } from 'components/list';
import { Text } from 'components/typography';

import { timeline } from 'data/timeline';

const HomePage = () => {
  return (
    <Layout bgColor={theme.colors.crema} seo={{ title: 'Timeline' }}>
      <Row mb={5}>
        <Col span={{ xs: 12, lg: 3 }} mb={{ xs: 4, lg: 0 }}>
          <Text as="h3">Timeline</Text>
        </Col>
        <Col>
          <List>
            {timeline.map((event) => (
              <List.Item key={`event_${event.name}`}>
                <Text as="h2">{event.name}</Text>
                <Text>{event.time}</Text>
                <Text>{event.description}</Text>
              </List.Item>
            ))}
          </List>
        </Col>
      </Row>
    </Layout>
  );
};

export default HomePage;
