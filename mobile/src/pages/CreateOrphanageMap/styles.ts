import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const NextButton = styled(RectButton)`
  background: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;

  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 40px;
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  font-size: 16px;
  color: #fff;
`;
