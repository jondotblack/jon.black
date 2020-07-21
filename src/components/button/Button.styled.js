import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-size: 18px;
  line-height: 1.5;
  color: #40413b;
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
  }
`;
