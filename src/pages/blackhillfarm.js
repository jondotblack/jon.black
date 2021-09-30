import React from 'react';
import { theme } from 'styles/theme';

import { Button } from 'components/button';
import { Row, Col } from 'components/grid';
import { Layout } from 'components/layout';
import { Text } from 'components/typography';

const BlackHillFarmPage = () => {
  return (
    <>
      <Layout bgColor={theme.colors.azul} seo={{ title: 'Black Hill Farm' }}>
        <Row mb={5}>
          <Col offset={{ lg: 3 }}>
            <Text lead mb={4}>
              In October 2021, I closed on a six-acre foreclosed farm in western New Jersey.
              Finally, after spending a year clearing the property and renovating the cottage, it is
              ready for guests and events.
            </Text>

            <Text lead>Currently only accepting reservations from friends and family.</Text>

            <Button href="https://checkout.lodgify.com/blackhillfarm/en/?currency=USD#/345695">
              Make a reservation
            </Button>
            <br />
            <Button href="https://jondotblack.notion.site/Black-Hill-Farm-Handbook-056e237ad9c34b40b57ab0bc5b3152bc">
              Things to do and places of interest
            </Button>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default BlackHillFarmPage;
