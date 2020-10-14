import React from 'react';

import { Container } from './styles';
import mapMarkerImg from '../../assets/icons/Local.svg';

const SideBar: React.FC = () => {
  return (
    <Container>
      <header>
        <img src={mapMarkerImg} alt="Happy" />
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>
      </header>
      <footer>
        <strong>Campinas</strong>
        <span>São Paulo</span>
      </footer>
    </Container>
  );
};

export default SideBar;
