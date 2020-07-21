import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Newsletter = styled.div``;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(64, 65, 59, 0.3);
  overflow: hidden;

  button {
    font-weight: 700;
  }

  ${theme.mediaQueries.sm`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 0;

    input {
      width: 100%;
      border-bottom: 1px solid rgba(64, 65, 59, 0.3);
    }

    button {
      margin-top: 10px;
      padding-left: 0;
    }
  `};
`;
