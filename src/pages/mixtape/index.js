import React from 'react';
import { theme } from 'styles/theme';

import { mixtapes } from 'data/mixtape';

import { Col, Row } from 'components/grid';
import { Layout } from 'components/layout';
import { Mixtape } from 'components/mixtape';
import { Newsletter } from 'components/newsletter';
import { Text } from 'components/typography';

const MixtapeListingPage = () => {
  return (
    <Layout bgColor={theme.colors.morado} seo={{ title: 'Mixtape' }}>
      <Row mb={5}>
        <Col offset={{ lg: 3 }}>
          <Text lead mb={4}>
            You can tell a lot about a person based on the music they listen to. As a new
            year&apos;s resolution in 2019, I started creating a 10 song &quot;mixtape&quot; for
            each month. There are no specific themes to the playlists, just a collection of what is
            on heavy rotation for the month or songs linked to a specific memory or moment in time.
          </Text>
          <Text lead>
            I&apos;m always seeking new music so please{' '}
            <a
              href="https://open.spotify.com/playlist/3IdDTJJgynlSCC1cBd192G?si=TSPMNhWvT_eEiEUjoH2EDA"
              target="_blank"
              rel="noreferrer"
            >
              send me suggestions
            </a>
            .
          </Text>
        </Col>
      </Row>

      <Row mb={5}>
        <Col span={{ xs: 12, lg: 3 }} mb={{ xs: 4, lg: 0 }}>
          <Text as="h3">Volumes</Text>
        </Col>
        <Col>
          {mixtapes.map((mixtape, index) => (
            <React.Fragment key={`mixtape_${mixtape.name}`}>
              <Mixtape
                description={mixtape.description}
                name={mixtape.name}
                spotifyId={mixtape.spotifyId}
              />

              {/* show the newsletter CTA after the first mixtape entry */}
              {index === 0 && (
                <Row justifyContent="center" py={4} mb={3}>
                  <Col span={{ lg: 10 }}>
                    <Newsletter />
                  </Col>
                </Row>
              )}
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </Layout>
  );
};

export default MixtapeListingPage;
