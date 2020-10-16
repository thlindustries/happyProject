import React, { useCallback, useState, useRef } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

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
import Input from '../../components/Input';
import TextArea from '../../components/Textarea';

import { happyMapIcon } from '../../utils/resources/leafLetResources';

interface CreateOrphanage {
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
}

const CreateOrphanage: React.FC = () => {
  const [latlgn, setLatlgn] = useState({ lat: 0, lgn: 0 });
  const [openOnWeekends, setOpenOnWeekends] = useState(true);

  const { goBack, push } = useHistory();

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleMapClick = useCallback((e: LeafletMouseEvent) => {
    setLatlgn({ lat: e.latlng.lat, lgn: e.latlng.lng });
  }, []);

  const handleSetOpenOnWeekends = useCallback(() => {
    setOpenOnWeekends(!openOnWeekends);
  }, [openOnWeekends]);

  const handleSubmit = useCallback(
    async (data: CreateOrphanage) => {
      try {
        if (formRef.current) {
          formRef.current.setErrors({});
        }

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome do orfanato obrigatório'),
          about: Yup.string().required(
            'Digite alguma informação sobre o orfanato',
          ),
          instructions: Yup.string().required(
            'Digite as intruções para visitar o orfanato',
          ),
          opening_hours: Yup.string().required(
            'Digite o horário de funcionamento do orfanato',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (latlgn.lat === 0) {
          addToast({
            type: 'error',
            title: 'Mapa inválido',
            description: 'Selecione um ponto no mapa!',
          });

          return;
        }

        await api.post('/orphanages', data);

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer o seu logon no GoBarber!',
        });

        push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          if (formRef.current) {
            formRef.current.setErrors(errors);
          }

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao cadastrar, tente novamente!',
        });
      }
    },
    [addToast, push, latlgn.lat],
  );

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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>
            <Map
              center={[-22.9320366, -47.048578]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              {latlgn.lat !== 0 && (
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[latlgn.lat, latlgn.lgn]}
                />
              )}
            </Map>
            <InputBlock>
              <label htmlFor="name">Nome</label>
              <Input id="name" name="name" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <TextArea id="name" name="about" maxLength={300} />
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
              <TextArea id="instructions" name="instructions" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <Input id="opening_hours" name="opening_hours" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <YesButton>
                <button
                  type="button"
                  className={openOnWeekends ? 'active' : ''}
                  onClick={handleSetOpenOnWeekends}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!openOnWeekends ? 'active' : ''}
                  onClick={handleSetOpenOnWeekends}
                >
                  Não
                </button>
              </YesButton>
            </InputBlock>
          </fieldset>

          <ConfirmButton type="submit">Confirmar</ConfirmButton>
        </Form>
      </MainContainer>
    </Container>
  );
};

export default CreateOrphanage;
// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
