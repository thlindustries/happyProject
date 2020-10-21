import React, { useCallback, useState, useEffect } from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import OrphanageInterface from '../../models/Orphanage';

import {
  Container,
  MapContainer,
  CalloutContainer,
  CalloutText,
  Message,
} from './styles';
import Footer from '../../components/Footer';

import mapMarker from '../../assets/icons/Local.png';

const Landing: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanageInterface[]>([]);

  const { navigate } = useNavigation();

  const handleOpenOrphanage = useCallback((id: string) => {
    navigate('OrphanageDetail', { id });
  }, []);

  const handleCreateOrphanage = useCallback(() => {
    navigate('CreateOrphanageMap');
  }, []);

  useEffect(() => {
    api.get('/orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <Container>
      <MapContainer>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -22.9324252,
            longitude: -47.0483394,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          style={{ width: '100%', height: '100%' }}
        >
          {orphanages.map((orphanage) => (
            <Marker
              key={orphanage.id}
              calloutAnchor={{ x: 2.5, y: 0.9 }}
              icon={mapMarker}
              coordinate={{
                latitude: parseFloat(orphanage.latitude),
                longitude: parseFloat(orphanage.longitude),
              }}
            >
              <Callout
                tooltip
                onPress={() => handleOpenOrphanage(orphanage.id)}
              >
                <CalloutContainer>
                  <CalloutText>{orphanage.name}</CalloutText>
                </CalloutContainer>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </MapContainer>
      <Footer
        addFunction={handleCreateOrphanage}
        totalCount={orphanages.length}
      />
    </Container>
  );
};

export default Landing;
