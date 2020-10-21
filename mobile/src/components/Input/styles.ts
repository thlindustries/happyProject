import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import Tooltip from '../Tooltip';

interface ContainerProps {
  focus: boolean;
  hasError: boolean;
  hasValue: boolean;
}

interface TooltipProps {
  title: string;
  icon: string;
}

export const Container = styled.View<ContainerProps>`
  background: #fff;
  border-radius: 20px;
  margin-bottom: 16px;
  height: 56px;
  padding: 10px;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  border: 2px solid #d3e2e6;
  border-color: #fff;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.focus &&
    css`
      border-color: #15c3d6;
    `}

  ${(props) =>
    props.hasValue &&
    css`
      border-color: #15c3d6;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 100%;
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;

export const Error = styled(Tooltip) <TooltipProps>``;

export const Message = styled.Text``;
