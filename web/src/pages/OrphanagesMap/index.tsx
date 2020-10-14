import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Container, CreateOrphanageButton } from './styles';

import SideBar from '../../components/SideBar';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Map
        center={[-22.9320366, -47.048578]}
        zoom={18}
        style={{ width: '100%', height: '100%', zIndex: 5 }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        {/* Existem varias versões de estilo para o mapBox da uma olhada dps */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>
      <CreateOrphanageButton to="">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanageButton>
    </Container>
  );
};

export default Dashboard;
