import React, { useEffect, useState } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Markdown } from 'components/markdown';

import * as Styled from './StatusBar.styled';

const propTypes = {
  bgColor: PropTypes.string,
  updates: arrayOf(PropTypes.string),
};

const defaultProps = {
  bgColor: null,
  updates: [''],
};

const StatusBar = (props) => {
  const { bgColor, updates } = props;
  const [activeUpdate, setActiveUpdate] = useState(`<WeatherContainer />`);

  useEffect(() => {
    if (updates) {
      let index = 0;
      const count = updates.length;

      const interval = setInterval(() => {
        setActiveUpdate(updates[index]);

        index = index >= count - 1 ? 0 : index + 1;
      }, 8000);

      return () => clearInterval(interval);
    }
    return false;
  }, []);

  return (
    <Styled.StatusBar bgColor={bgColor}>
      <Styled.UpdateWrapper>
        <TransitionGroup component={null}>
          <CSSTransition appear in timeout={600} classNames="slide" key={activeUpdate}>
            <Styled.Update>
              <Markdown>{activeUpdate}</Markdown>
            </Styled.Update>
          </CSSTransition>
        </TransitionGroup>
      </Styled.UpdateWrapper>
    </Styled.StatusBar>
  );
};

StatusBar.propTypes = propTypes;
StatusBar.defaultProps = defaultProps;

export default StatusBar;
