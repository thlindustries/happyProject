import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Dimensions } from 'react-native';
import MapView, { Marker, MapEvent } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import { Container, NextButton, ButtonText } from './styles';
import mapMarkerImg from '../../assets/icons/Local.png';

const CreateOrphanage: React.FC = () => {
  // const [latlgn, setLatlgn] = useState({
  //   lat: '-22.9324252',
  //   lgn: '-47.0483394',
  // });
  const [latlng, setLatlgn] = useState({
    lat: 0,
    lng: 0,
  });

  const { navigate } = useNavigation();

  const handleNextStep = useCallback(() => {
    navigate('CreateOrphanageDetail', { latlng });
  }, [latlng]);

  const handleSetMapPosition = useCallback((e: MapEvent) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setLatlgn({ lat: latitude, lng: longitude });
  }, []);

  useEffect(() => {
    Alert.alert('Selecione um ponto no mapa para indicar o local do orfanato');
  }, []);

  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: -22.9324252,
          longitude: -47.0483394,
          latitudeDelta: 0.032,
          longitudeDelta: 0.032,
        }}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        onPress={handleSetMapPosition}
      >
        {latlng.lat !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{ latitude: latlng.lat, longitude: latlng.lng }}
          />
        )}
      </MapView>

      {latlng.lat !== 0 && (
        <NextButton onPress={handleNextStep}>
          <ButtonText>Próximo</ButtonText>
        </NextButton>
      )}
    </Container>
  );
};

export default CreateOrphanage;
