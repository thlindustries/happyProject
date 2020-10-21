import React, { useEffect, useState, useCallback } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo, FiArrowLeft } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';
import OrphanageModel from '../../models/OrphanageModel';

import mapMarkerImg from '../../assets/icons/Local.svg';

import {
  Container,
  MainContainedr,
  OrphanageDetailsContainer,
  ImagesContainer,
  OrphanageDetailsContent,
  MapContainer,
  OpenDetailsContainer,
  OpenOnWeekEndsContainer,
  ErrorContainer,
} from './styles';
import SideBar from '../../components/SideBar';

import { happyMapIcon } from '../../utils/resources/leafLetResources';

interface urlParams {
  id: string;
}

interface imageInterface {
  id: string;
  url: string;
}

const Orphanage: React.FC = () => {
  const [orphanage, setOrphanage] = useState<OrphanageModel>();
  const [images, setImages] = useState<imageInterface[]>([]);
  const [principalImg, setPrincipalImg] = useState<imageInterface>({
    id: '',
    url: '',
  });

  const { goBack } = useHistory();
  const { id } = useParams() as urlParams;

  const handleSelectImage = useCallback((image: imageInterface) => {
    setPrincipalImg(image);
  }, []);

  const handleOpenWhatsApp = useCallback(() => {
    if (!orphanage) return;

    window.location.href = `https://wa.me/55${orphanage.whatsapp}?text=Eu%20tenho%20interesse%20no%20seu%20carro%20à%20venda`;
  }, [orphanage]);

  useEffect(() => {
    api.get<OrphanageModel>(`/orphanages/${id}`).then((response) => {
      setOrphanage(response.data);
      setImages(response.data.images);
      setPrincipalImg(response.data.images[0]);
    });
  }, [id]);

  return orphanage ? (
    <Container>
      <SideBar type="page">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </SideBar>

      <MainContainedr>
        <OrphanageDetailsContainer>
          <img src={principalImg.url} alt={orphanage.name} />
          <ImagesContainer>
            {images.map((image) => (
              <button
                key={image.id}
                className={image.id === principalImg.id ? 'active' : ''}
                type="button"
                onClick={() => handleSelectImage(image)}
              >
                <img src={image.url} alt={image.id} />
              </button>
            ))}
          </ImagesContainer>
          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  href={`https://www.google.com.br/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetailsContainer>
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              <OpenOnWeekEndsContainer open={orphanage.open_on_weekends}>
                <FiInfo
                  size={32}
                  color={orphanage.open_on_weekends ? '#39cc83' : '#cc3939'}
                />
                {orphanage.open_on_weekends ? (
                  <>
                    Atendemos <br />
                    fim de semana
                  </>
                ) : (
                    <>
                      Não atendemos <br />
                    fim de semana
                  </>
                  )}
              </OpenOnWeekEndsContainer>
            </OpenDetailsContainer>

            <button
              type="button"
              className="contact-button"
              onClick={handleOpenWhatsApp}
            >
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </OrphanageDetailsContent>
        </OrphanageDetailsContainer>
      </MainContainedr>
    </Container>
  ) : (
      <ErrorContainer>
        <p>Erro ao carrega as informações do orfanato</p>
      </ErrorContainer>
    );
};

export default Orphanage;
