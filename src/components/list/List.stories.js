import React from 'react';

import { Col, Container, Row } from 'components/grid';
import { List } from '.';

export default { title: 'Components | List' };

export const base = () => (
  <Container py={5}>
    <Row>
      <Col>
        <List>
          <List.Item>
            <a href="https://www.territoryfoods.com" target="_blank" rel="noreferrer">
              Territory Foods
            </a>
          </List.Item>
          <List.Item>Spotify</List.Item>
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
          <List.Item>
            <a href="https://somethingnew.co/" target="_blank" rel="noreferrer">
              Something New
            </a>
          </List.Item>
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
  </Container>
);
