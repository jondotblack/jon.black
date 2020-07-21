import React from 'react';

import { Container, Row, Col } from 'components/grid';
import { Text } from '.';

export default { title: 'Components | Typography' };

export const lead = () => (
  <Container>
    <Row>
      <Col span={{ sm: 12, md: 8 }}>
        <Text lead>
          I&apos;m baby locavore ethical pug, leggings gochujang bitters scenester cornhole bushwick
          man bun XOXO celiac. Biodiesel cardigan banh mi ramps put a bird on it vaporware vape,
          actually bushwick before they sold out four loko.
        </Text>
      </Col>
    </Row>
  </Container>
);

export const paragraph = () => (
  <Container>
    <Row>
      <Col span={{ sm: 12, md: 8 }}>
        <Text>
          Disrupt tote bag poutine cloud bread flexitarian coloring book. Seitan squid letterpress
          drinking vinegar echo park selvage microdosing kombucha organic banjo paleo chicharrones
          bitters. Chicharrones air plant tofu chia glossier single-origin coffee migas raw denim
          hot chicken unicorn mixtape green juice narwhal.
        </Text>
        <Text>
          Synth pok pok live-edge man braid subway tile mustache sartorial palo santo vexillologist
          banh mi meggings snackwave williamsburg 8-bit. Farm-to-table sustainable readymade yuccie,
          pop-up tumeric lomo. Leggings mlkshk green juice you probably haven&apos;t heard of them
          knausgaard snackwave hot chicken fashion axe portland hexagon artisan shabby chic tumblr
          stumptown.
        </Text>
        <Text>
          Franzen gochujang butcher pour-over fam skateboard synth tacos craft beer edison bulb
          drinking vinegar 8-bit. Vice DIY readymade street art, chillwave pitchfork YOLO jianbing
          subway tile. Hexagon gluten-free +1 meh, sartorial snackwave knausgaard retro typewriter
          tattooed crucifix microdosing shabby chic cold-pressed.
        </Text>
      </Col>
    </Row>
  </Container>
);

export const headings = () => (
  <Container>
    <Text as="h1" mb={4}>
      Tattooed biodiesel yr & chambray narwhal skateboard
    </Text>
    <Text as="h2" mb={4}>
      Tattooed biodiesel yr chambray narwhal skateboard
    </Text>
    <Text as="h3" mb={4}>
      Tattooed biodiesel yr chambray narwhal skateboard
    </Text>
  </Container>
);
