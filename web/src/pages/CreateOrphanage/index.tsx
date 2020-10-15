import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft, FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../assets/icons/Local.svg';

import {
  Container,
  MainContainer,
  InputBlock,
  AddImg,
  YesButton,
  ConfirmButton,
} from './styles';
import SideBar from '../../components/SideBar';

import { happyMapIcon } from '../../utils/resources/leafLetResources';

const CreateOrphanage: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <SideBar type="page">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </SideBar>

      <MainContainer>
        <form>
          <fieldset>
            <legend>Dados</legend>
            <Map
              center={[-22.9320366, -47.048578]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker
                interactive={false}
                icon={happyMapIcon}
                position={[-22.9320366, -47.048578]}
              />
            </Map>
            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <AddImg>
                <FiPlus size={24} color="#15b6d6" />
              </AddImg>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <YesButton>
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </YesButton>
            </InputBlock>
          </fieldset>

          <ConfirmButton type="submit">Confirmar</ConfirmButton>
        </form>
      </MainContainer>
    </Container>
  );
};

export default CreateOrphanage;
// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
