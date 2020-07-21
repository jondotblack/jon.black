import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';

import { Button } from 'components/button';
import { Input } from 'components/input';
import { Row, Col } from 'components/grid';
import { Text } from 'components/typography';

import * as gtag from 'utils/gtag';
import { validateEmail } from 'utils/validations';

import * as Styled from './Newsletter.styled';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    setEmail(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // prevent sending the form if invalid email
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email.');

      return;
    }

    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    // handle errors
    const { error } = await response.json();
    if (error) {
      setMessage(error);

      return;
    }

    // fire google analytics event
    gtag.event({
      action: 'signup',
      category: 'Newsletter',
      label: 'Monthly',
    });

    // reset input and show message
    setEmail('');
    setMessage('You are now subscribed!');
  };

  return (
    <Styled.Newsletter>
      <Row>
        <Col>
          <Text small mb={4}>
            A single message once a month containing the latest mixtape, insights, and observations.
          </Text>
          <Styled.Form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              id="emailInput"
              required
              onChange={handleChange}
              aria-label="email address"
            />
            <Button>Subscribe</Button>
          </Styled.Form>

          {message && (
            <Text data-testid="feedback" small mt={4}>
              {message}
            </Text>
          )}
        </Col>
      </Row>
    </Styled.Newsletter>
  );
};

export default Newsletter;
