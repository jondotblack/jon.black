import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { theme } from 'styles/theme';

const slideIn = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-150%);
	}

	60% {
		opacity: 1;
		transform: translateY(-30%);
	}

	100% {
		opacity: 1;
		transform: translateY(-50%);
  }
`;

const slideOut = keyframes`
	0% {
		opacity: 1;
		transform: translateY(-50%);
	}

	60% {
		opacity: 0;
		transform: translateY(80%);
	}

	100% {
		opacity: 0;
		transform: translateY(150%);
  }
`;

export const StatusBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  padding-left: 70px;
  padding-right: 70px;
  width: 100vh;
  height: 80px;
  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `};
  justify-content: space-between;
  align-items: center;
  transform: rotate(-90deg) translateY(100%);
  transform-origin: 0px 100%;
  border-bottom: 1px solid rgba(64, 65, 59, 0.3);
  z-index: 9;
  overflow: hidden;

  ${theme.mediaQueries.lg`
    display: none;
  `};

  a {
    display: inline-block;
    padding-right: 18px;
    font-weight: 700;
    background: url('/static/svg/icon_external_link.svg') 100% 40% no-repeat;
    background-size: 13px;
  }
`;

export const UpdateWrapper = styled.div`
  height: 80px;
  font-size: 18px;
  vertical-align: middle;
  overflow: hidden;
`;

export const Update = styled.div`
  display: inline-block;
  position: absolute;
  right: 70px;
  top: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: translateY(-50%);

  ${theme.mediaQueries.md`
    right: auto;
  `};

  &.slide-enter {
    opacity: 1;
    animation: ${slideIn} 0.6s;
  }

  &.slide-enter.slide-enter-active {
    opacity: 1;
  }

  &.slide-exit {
    animation: ${slideOut} 0.6s;
  }

  &.slide-exit.slide-exit-active {
    opacity: 0;
  }
`;
