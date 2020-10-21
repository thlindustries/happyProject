import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  position: absolute;

  bottom: 24px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  background: #fff;
  border-radius: 20px;
  margin-bottom: 12px;

  padding: 0 0 0 24px;

  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
  elevation: 3;

  width: 330px;
`;

export const Message = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #8fa7b3;
`;

export const StyledButton = styled(RectButton)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  border-radius: 20px;

  background: rgba(21, 195, 214, 0.7);
`;
