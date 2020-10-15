import React from 'react';

import { ContainerLanding, ContainerPages } from './styles';
import mapMarkerImg from '../../assets/icons/Local.svg';

interface SidebarProps {
  type: 'landing' | 'page' | '';
  children?: React.ReactNode;
}

const SideBar: React.FC<SidebarProps> = ({
  type = '',
  children = 1,
}: SidebarProps) => {
  return (
    <>
      {type === 'landing' && (
        <ContainerLanding>
          <header>
            <img src={mapMarkerImg} alt="Happy" />
            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>
          <footer>
            <strong>Campinas</strong>
            <span>São Paulo</span>
          </footer>
        </ContainerLanding>
      )}
      {type === 'page' && <ContainerPages>{children}</ContainerPages>}
    </>
  );
};

export default SideBar;
