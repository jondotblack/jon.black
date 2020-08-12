import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'components/grid';
import { Text } from 'components/typography';

import * as Styled from './Mixtape.styled';

const propTypes = {
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  spotifyId: PropTypes.string.isRequired,
};

const defaultProps = {
  description: null,
};

const Mixtape = (props) => {
  const { description, name, spotifyId } = props;

  return (
    <Styled.Mixtape>
      <Row mb={5}>
        <Col span={{ xs: 12, lg: 6 }} mb={{ xs: 4, lg: 0 }}>
          <Text as="h3">{name}</Text>
          <Text>{description}</Text>
          <Text>
            <a
              href={`spotify:user:jonatpiermont:playlist:${spotifyId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Spotify
            </a>
          </Text>
        </Col>
        <Col span={{ xs: 12, lg: 6 }}>
          <iframe
            src={`https://open.spotify.com/embed/playlist/${spotifyId}`}
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title={name}
          />
        </Col>
      </Row>
    </Styled.Mixtape>
  );
};

Mixtape.propTypes = propTypes;
Mixtape.defaultProps = defaultProps;

export default Mixtape;
