import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 180px 0;
`;

export const StyledGradient = styled(LinearGradient)`
  flex: 1;
`;

export const LogoContainer = styled.View`
  elevation: 3;
`;

export const Logo = styled.Image``;

export const LocalContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const State = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  font-size: 32px;
  color: #fff;
`;

export const City = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 20px;
  color: #fff;
`;
