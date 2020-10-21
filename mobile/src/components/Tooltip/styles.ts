import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface TooltipProps {
  show?: boolean;
}

export const Container = styled.View<TooltipProps>`
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px 20px;
  overflow: hidden;

  background: rgba(197, 48, 48, 0.7);
  border-radius: 10px;
  border: 1px solid #c53030;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  height: 30px;
  margin-bottom: 80px;
`;

export const TooltipText = styled.Text`
  color: #fff;
`;

export const Icon = styled(Feather)`
  color: #c53030;
`;

export const IconButton = styled(TouchableOpacity)`
  position: absolute;
  right: 16px;
`;

export const ContainerButton = styled(TouchableOpacity)`
  position: relative;
  right: 0;
  width: 80%;
  height: 100%;

  background: transparent;
`;
