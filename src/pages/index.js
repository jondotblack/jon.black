import React from 'react';
import { theme } from 'styles/theme';

import { Col, Row } from 'components/grid';
import { Layout } from 'components/layout';
import { List } from 'components/list';
import { NextLink } from 'components/nextLink';
import { Text } from 'components/typography';

const HomePage = () => {
  return (
    <Layout bgColor={theme.colors.crema}>
      <Row mb={5}>
        <Col offset={{ lg: 3 }}>
          <Text lead mb={4}>
            Hi, I&apos;m Jon - I&apos;m currently VP of Engineering for IncludeHealth. I consult for
            startups, coach entrepreneurs, and own{' '}
            <a href="https://www.blackhill.farm">Black Hill Farm</a>.
          </Text>
          <Text lead>
            For coaching, mentorship, playing your mixtap - you can find me on{' '}
            <a href="https://www.linkedin.com/in/jontblack/">LinkedIn</a> or{' '}
            <a href="mailto:hello@jon.black">email</a>. Don&apos;t have anything specific, but just
            want to talk? I offer free <NextLink href="/office-hours">office hours</NextLink> every
            Tuesday afternoon.
          </Text>
        </Col>
      </Row>

      <Row mb={5}>
        <Col span={{ xs: 12, lg: 3 }} mb={{ xs: 4, lg: 0 }}>
          <Text as="h3">Select clients</Text>
        </Col>
        <Col>
          <List>
            <List.Item>Spotify</List.Item>
            <List.Item>
              <a href="https://somethingnew.co/" target="_blank" rel="noreferrer">
                Something New
              </a>
            </List.Item>
            <List.Item>
              <a href="https://includehealth.com/" target="_blank" rel="noreferrer">
                Include Health
              </a>
            </List.Item>
            <List.Item>Amazon</List.Item>
            <List.Item>Goldman Sachs</List.Item>
            <List.Item>American Express</List.Item>
            <List.Item>
              <a
                href="https://open.spotify.com/album/4dhCjrqhvcGuIAcP2JIVaR?si=q2lJ18-ZQBGa6Q6nQ274Rw"
                target="_blank"
                rel="noreferrer"
              >
                Foxy Shazam
              </a>
            </List.Item>
            <List.Item>Territory Foods</List.Item>
            <List.Item>Warner Music Group</List.Item>
            <List.Item>Capital Records</List.Item>
            <List.Item>
              <a
                href="https://open.spotify.com/album/4zT5J5uAisGQgO9vuUDAcG?si=71kCtKl8QdWVvCoWCt_u-w"
                target="_blank"
                rel="noreferrer"
              >
                Bad Rabbits
              </a>
            </List.Item>
            <List.Item>
              <a href="https://elephant.is/" target="_blank" rel="noreferrer">
                Elephant
              </a>
            </List.Item>
            <List.Item>B-Reel</List.Item>
            <List.Item>
              <a
                href="https://www.umusicpub.com/us/Artists/J/Jayson-Dezuzio.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Jayson DeZuzio
              </a>
            </List.Item>
          </List>
        </Col>
      </Row>
    </Layout>
  );
};

export default HomePage;
