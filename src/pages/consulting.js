import React from 'react';
import { theme } from 'styles/theme';

import { Row, Col } from 'components/grid';
import { Calendly } from 'components/calendly';
import { Layout } from 'components/layout';
import { Text } from 'components/typography';

const ConsultingPage = () => {
  return (
    <Layout bgColor={theme.colors.azul} seo={{ title: 'Consulting' }}>
      <Row mb={5}>
        <Col offset={{ lg: 3 }}>
          <Text lead mb={4}>
            Building a new business or product is nerve wracking. There&apos;s a ton to consider,
            many unknowns, and some no-turning-backs. Plus a lot of eyes (or worse, no eyes).
            I&apos;ve been there.
          </Text>
          <Text lead>
            I&apos;ve been there as an entrepreneur, I&apos;ve been there as a developer, I&apos;ve
            been there as a team leader. And the good news is, I can help. From foundational
            strategy and prototyping, to ecommerce and growth, I can bring insight in at any stage
            to help you reach your goals.
          </Text>
        </Col>
      </Row>

      <Row mb={5}>
        <Col span={{ xs: 12, lg: 3 }} mb={{ xs: 4, lg: 0 }}>
          <Text as="h3">Strategy</Text>
        </Col>
        <Col>
          <Text>
            Given my diverse background I&apos;m able to offer unique insights to how technology
            should be used to maximize your business. Everything from web/native application, to
            deciding which tools to leverage for day to day operations, to recruiting, hiring and
            developing the best talent.
          </Text>
        </Col>
      </Row>

      <Row mb={5}>
        <Col span={{ xs: 12, lg: 3 }} mb={{ xs: 4, lg: 0 }}>
          <Text as="h3">Coaching</Text>
        </Col>
        <Col>
          <Text>
            I&apos;ve made a number of mistakes, but learned a ton from them. I get excited about
            sharing my stories, both my successes and failures. For those who want a source of
            consistent honest feedback, to talk through complex problems, to vent frustrations to -
            I offer coaching services on a recurring basis.
          </Text>
        </Col>
      </Row>

      <Calendly />
    </Layout>
  );
};

export default ConsultingPage;
