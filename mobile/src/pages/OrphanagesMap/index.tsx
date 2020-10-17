import React, { useCallback } from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  MapContainer,
  CalloutContainer,
  CalloutText,
  Message,
} from './styles';
import Footer from '../../components/footerComponent';

import mapMarker from '../../assets/icons/Local.png';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const handleOpenOrphanage = useCallback(() => {
    navigate('OrphanageDetail');
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
          <Marker
            calloutAnchor={{ x: 2.5, y: 0.9 }}
            icon={mapMarker}
            coordinate={{ latitude: -22.9324252, longitude: -47.0483394 }}
          >
            <Callout tooltip onPress={() => handleOpenOrphanage()}>
              <CalloutContainer>
                <CalloutText>Orfanato teste</CalloutText>
              </CalloutContainer>
            </Callout>
          </Marker>
        </MapView>
      </MapContainer>
      <Footer />
    </Container>
  );
};

export default Landing;
