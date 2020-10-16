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

  width: 100%;
  padding: 16px;
  height: 200px;

  border: 2px solid #d3e2e5;
  color: #5c8599;

  outline: none;

  min-height: 120px;
  max-height: 240px;
  line-height: 28px;

  & + div {
    margin-top: 8px;
  }

  transition: border 0.3s;

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

  textarea {
    background: transparent;
    flex: 1;
    border: 0;

    color: #000;
    &::placeholder {
      color: #666360;
    }

    /* border: solid 1px #000; */
    margin-right: 40px;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  /* margin-left: 16px; */
  /* border: solid 1px #000; */

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
