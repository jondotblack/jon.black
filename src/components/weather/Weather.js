import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Weather.styled';

const propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    main: PropTypes.shape({ temp: PropTypes.number }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({ description: PropTypes.string, icon: PropTypes.string }),
    ),
  }).isRequired,
};

const Weather = (props) => {
  const {
    data: { name, main, weather },
  } = props;
  const { description } = weather[0];

  const icon = `/static/img/${weather[0].icon}.png`;

  return (
    <Styled.Weather>
      {name}
      <span />
      {Math.round(main.temp)}&deg; {description}
      <Styled.Icon src={icon} alt={description} />
    </Styled.Weather>
  );
};

Weather.propTypes = propTypes;

export default Weather;
