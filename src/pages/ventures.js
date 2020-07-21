import React from 'react';
import { theme } from 'styles/theme';

import { Col, Row } from 'components/grid';
import { Layout } from 'components/layout';
import { List } from 'components/list';
import { Text } from 'components/typography';
import { Venture } from 'components/venture';

import { ventures } from 'data/ventures';

const activeVentures = ventures.filter((venture) => venture.active);
const graveyardVentures = ventures.filter((venture) => !venture.active);

const VenturesPage = () => {
  return (
    <Layout bgColor={theme.colors.verde} seo={{ title: 'Ventures' }}>
      <Row mb={5}>
        <Col offset={{ lg: 3 }}>
          <Text lead mb={4}>
            I am an entrepreneur at heart. I know the rush of taking an idea and turning it into a
            revenue-generating business. I know the grind of bootstrapping to keep it going. I know
            what it feels like to fail. But above all, I know that all that experience just carries
            over to the next venture.
          </Text>
          <Text lead mb={4}>
            I&apos;m interested in other mission-driven businesses that share my values. Technical
            or product design roles are ideal. I&apos;m also an angel investor for those seeking
            funding of under &lt; $10k.
          </Text>
          <Text lead>
            Areas of interest are food &amp; beverage, fashion, health &amp; wellness, music &amp;
            entertainment.
          </Text>
        </Col>
      </Row>

      <Row>
        <Col span={{ xs: 12, lg: 3 }} mb={{ xs: 4, lg: 0 }}>
          <Text as="h3">Ongoing</Text>
        </Col>
        <Col>
          <List>
            {activeVentures.map((venture) => (
              <List.Item key={`venture_${venture.name}`}>
                <Venture {...venture} />
              </List.Item>
            ))}
          </List>
        </Col>
      </Row>

      <Row mt={{ xs: 5, lg: 0 }} mb={5}>
        <Col span={{ xs: 12, lg: 3 }} mb={{ xs: 4, lg: 0 }}>
          <Text as="h3">Graveyard</Text>
        </Col>
        <Col>
          <List>
            {graveyardVentures.map((venture) => (
              <List.Item key={`venture_${venture.name}`}>
                <Venture {...venture} />
              </List.Item>
            ))}
          </List>
        </Col>
      </Row>
    </Layout>
  );
};

export default VenturesPage;
