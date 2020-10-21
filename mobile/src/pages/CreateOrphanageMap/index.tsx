import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import { Container, NextButton, ButtonText } from './styles';
import mapMarkerImg from '../../assets/icons/Local.png';

const CreateOrphanage: React.FC = () => {
  const [latlgn, setLatlgn] = useState({
    lat: '-22.9324252',
    lgn: '-47.0483394',
  });

  const { navigate } = useNavigation();

  const handleNextStep = useCallback(() => {
    navigate('CreateOrphanageDetail', { latlgn });
  }, []);

  useEffect(() => {
    Alert.alert('Selecione um ponto no mapa para indicar o local do orfanato');
  }, []);

  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      >
        <Marker
          icon={mapMarkerImg}
          coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }}
        />
      </MapView>

      <NextButton onPress={handleNextStep}>
        <ButtonText>Próximo</ButtonText>
      </NextButton>
    </Container>
  );
};

export default CreateOrphanage;
