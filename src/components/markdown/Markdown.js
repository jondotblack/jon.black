import React from 'react';
import PropTypes from 'prop-types';
import RenderMarkdown from 'markdown-to-jsx';

import { NextLink } from 'components/nextLink';
import { Text } from 'components/typography';
import { WeatherContainer } from 'components/weather';

import * as Styled from './Markdown.styled';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Markdown = (props) => {
  const { children } = props;

  return (
    <Styled.Markdown>
      <RenderMarkdown
        options={{
          overrides: {
            Lead: {
              component: Text,
              props: {
                lead: true,
              },
            },
            NextLink: {
              component: NextLink,
            },
            WeatherContainer: {
              component: WeatherContainer,
            },
          },
        }}
      >
        {children}
      </RenderMarkdown>
    </Styled.Markdown>
  );
};

Markdown.propTypes = propTypes;

export default Markdown;
