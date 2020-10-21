import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator, View, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';
import OrphanageInterface from '../../models/Orphanage';

import mapMarkerImg from '../../assets/icons/Local.png';

import {
  Container,
  ImagesContainer,
  StyledImage,
  DetailsContainer,
  DetailsContainerTitle,
  DetailsContainerDescription,
  MapContainer,
  ContactButton,
  ContactButtonText,
  InstructionsDescriptions,
  InstructionsTitle,
  RoutesContainer,
  RoutesContainerText,
  ScheduleContainer,
  ScheduleItemBlue,
  SheduleItemOpen,
  SeparatorBar,
  ShcheduleTextOpen,
  ShcheduleTextBlue,
} from './styles';

interface Params {
  id: string;
}

const OrphanageDetail: React.FC = () => {
  const [orphanage, setOrphanage] = useState<OrphanageInterface>({});
  const [latlng, setLatlng] = useState({ lat: 0, lng: 0 });
  const [images, setImages] = useState([{ id: '', url: '' }]);

  const { params } = useRoute();
  const { id } = params as Params;

  const handleNavigateToGoogleMap = useCallback(() => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${Number(
        latlng.lat,
      )},${Number(latlng.lng)}`,
    );
  }, [latlng]);

  const handleLinkToWhatsapp = useCallback(() => {
    Linking.openURL(
      `whatsapp://send?text=Salve mano, de boa?!&phone=+55${orphanage.whatsapp}`,
    );
  }, [orphanage]);

  useEffect(() => {
    api.get<OrphanageInterface>(`/orphanages/${id}`).then((response) => {
      const { data } = response;
      const { latitude, longitude } = data;
      setOrphanage(data);
      setImages(data.images);

      setLatlng({ lat: Number(latitude), lng: Number(longitude) });
    });
  }, [id]);

  if (!orphanage.id) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="#c3c3c3" size={50} />
      </View>
    );
  }

  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {images &&
            images.map((image) => {
              if (!image.url) {
                return false;
              }
              return (
                <StyledImage
                  key={image.id}
                  source={{
                    uri: image.url,
                  }}
                />
              );
            })}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <DetailsContainerTitle>{orphanage.name}</DetailsContainerTitle>
        <DetailsContainerDescription>
          {orphanage.about}
        </DetailsContainerDescription>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: latlng.lat,
              longitude: latlng.lng,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={{
              width: '100%',
              height: 150,
            }}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: latlng.lat,
                longitude: latlng.lng,
              }}
            />
          </MapView>

          <RoutesContainer onPress={handleNavigateToGoogleMap}>
            <RoutesContainerText>Ver rotas no Google Maps</RoutesContainerText>
          </RoutesContainer>
        </MapContainer>

        <SeparatorBar />

        <InstructionsTitle>Instruções para visita</InstructionsTitle>
        <InstructionsDescriptions>
          {orphanage.instructions}
        </InstructionsDescriptions>

        <ScheduleContainer>
          <ScheduleItemBlue>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ShcheduleTextBlue>{`Segunda à sexta ${orphanage.opening_hours}`}</ShcheduleTextBlue>
          </ScheduleItemBlue>
          <SheduleItemOpen open={!!orphanage.open_on_weekends}>
            <Feather
              name="info"
              size={40}
              color={orphanage.open_on_weekends ? '#39cc83' : '#cc3939'}
            />
            <ShcheduleTextOpen open={!!orphanage.open_on_weekends}>
              {orphanage.open_on_weekends
                ? 'Abrimos nos finais de semana'
                : 'Não abrimos nos finais de semana'}
            </ShcheduleTextOpen>
          </SheduleItemOpen>
        </ScheduleContainer>

        <ContactButton
          onPress={handleLinkToWhatsapp}
          hasContact={orphanage.whatsapp !== ''}
          enabled={orphanage.whatsapp !== ''}
        >
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>
            {orphanage.whatsapp !== ''
              ? `Entrar em contado`
              : `Contato indisponível`}
          </ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetail;
