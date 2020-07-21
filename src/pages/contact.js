import React from 'react';

import { Calendly } from 'components/calendly';
import { Col, Row } from 'components/grid';
import { Layout } from 'components/layout';
import { Text } from 'components/typography';

import { pageData } from 'data/officeHours';

const ContactPage = () => {
  const { lead, title } = pageData;

  return (
    <Layout seo={{ title: 'Contact' }}>
      <Row mb={5}>
        <Col offset={{ lg: 3 }}>
          <Text lead mb={4}>
            For new business inquiries, coaching, mentorship - anything you&apos;d like to discuss,
            you can find me on{' '}
            <a href="https://www.linkedin.com/in/jontblack/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{' '}
            or <a href="mailto:hello@jon.black">hello@jon.black</a>.
          </Text>
        </Col>
      </Row>

      <Calendly lead={lead} title={title} />
    </Layout>
  );
};

export default ContactPage;
