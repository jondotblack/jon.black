import React from 'react';

import { Col, Row } from 'components/grid';
import { Calendly } from 'components/calendly';
import { Layout } from 'components/layout';
import { Text } from 'components/typography';

import { pageData } from 'data/officeHours';

const OfficeHoursPage = () => {
  const { title, lead } = pageData;

  return (
    <Layout seo={{ title }}>
      <Row mb={5}>
        <Col offset={{ lg: 3 }}>
          <Text lead>{lead}</Text>
        </Col>
      </Row>

      <Calendly lead="" title="" />
    </Layout>
  );
};

export default OfficeHoursPage;
