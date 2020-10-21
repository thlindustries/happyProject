import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { Container, SyledBordelessButton, Title } from './styles';

interface HeaderProps {
  title: string;
  hasX?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title = '', hasX = true }) => {
  const { goBack, navigate } = useNavigation();

  return (
    <Container>
      <SyledBordelessButton onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </SyledBordelessButton>
      <Title>{title}</Title>
      {hasX && (
        <SyledBordelessButton onPress={() => navigate('OrphanagesMap')}>
          <Feather name="x" size={24} color="#ff969d" />
        </SyledBordelessButton>
      )}
      {!hasX && <View />}
    </Container>
  );
};

export default Header;
