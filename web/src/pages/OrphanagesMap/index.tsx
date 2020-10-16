import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import OrphanageModel from '../../models/OrphanageModel';

import { Container, CreateOrphanageButton } from './styles';
import mapMarkerImg from '../../assets/icons/Local.svg';

import SideBar from '../../components/SideBar';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, -2],
});

const Dashboard: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanageModel[]>([]);

  useEffect(() => {
    api.get<OrphanageModel[]>('/orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <Container>
      <SideBar type="landing" />
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
        {orphanages &&
          orphanages.map((orphanage) => (
            <Marker
              interactive
              icon={happyMapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                <p>{orphanage.name}</p>
                <Link to={`/orphanage/${orphanage.id}`}>
                  <span>
                    <FiArrowRight size={20} color="#fff" />
                  </span>
                </Link>
              </Popup>
            </Marker>
          ))}
      </Map>
      <CreateOrphanageButton to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanageButton>
    </Container>
  );
};

export default Dashboard;
