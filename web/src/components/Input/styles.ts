import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  hasValue: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f5f8fa;

  border-radius: 20px;

  display: flex;
  align-items: center;

  /* padding: 16px; */
  padding: 0 16px;
  width: 100%;

  border: 2px solid #d3e2e5;
  color: #5c8599;

  outline: none;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.hasError &&
    css`
      border: 2px solid #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #00c7c7;
      color: #00c7c7;
    `}

  ${(props) =>
    props.hasValue &&
    css`
      border: 2px solid #00c7c7;
      color: #00c7c7;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;

    color: #000;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin-right: 0px;
  }

  span {
    color: #fff;
    background-color: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
