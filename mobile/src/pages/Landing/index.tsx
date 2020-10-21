import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  StyledGradient,
  LogoContainer,
  Logo,
  LocalContainer,
  State,
  City,
} from './styles';
import splashLogo from '../../assets/img/Logotipo.png';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate('OrphanagesMap');
    }, 3000);
  }, []);

  return (
    <StyledGradient colors={['#29b6d1', '#00c7c7']}>
      <Container>
        <LogoContainer>
          <Logo source={splashLogo} />
        </LogoContainer>
        <ActivityIndicator color="#fff" size={50} />
        <LocalContainer>
          <State>São Paulo</State>
          <City>Campinas</City>
        </LocalContainer>
      </Container>
    </StyledGradient>
  );
};

export default Landing;
