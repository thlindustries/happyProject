import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import {
  Container,
  ContentWrapper,
  MainTitle,
  MainDescription,
  Location,
  Button,
} from './styles';
import logoImg from '../../assets/imgs/Logo.svg';

const pages: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />
        <MainTitle>Leve felicidade para o mundo</MainTitle>
        <MainDescription>
          Visite orfanatos e mude o dia de muitas crianças.
        </MainDescription>

        <Location>
          <strong>Campinas</strong>
          <span>São Paulo</span>
        </Location>

        <Button to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Button>
      </ContentWrapper>
    </Container>
  );
};

export default pages;
