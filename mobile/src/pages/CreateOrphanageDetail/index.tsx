import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Axios from 'axios';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  UploadedImagesContainer,
  UploadedImage,
  TitleLabel,
  Label,
  AddButton,
  SwitchContainer,
  StyledSwitch,
  NextButton,
  NextButtonText,
} from './styles';
import Input from '../../components/Input';

interface CreateOrphanage {
  name: string;
  about: string;
  whatsapp: string;
  instructions: string;
  opening_hours: string;
}

interface Position {
  latlng: {
    lat: number;
    lng: number;
  };
}

const CreateOrphanageDetail: React.FC = () => {
  const [switchValue, setSwitchValue] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [images, setImages] = useState<string[]>([]);

  const { params } = useRoute();
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const handleSelectImages = useCallback(async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Eita, precisamos de acesso à sua galeria');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: img } = result;

    setImages([...images, img]);
  }, [images]);

  useEffect(() => {
    const { latlng } = params as Position;
    setPosition({ lat: latlng.lat, lng: latlng.lng });
  }, [params]);

  const handleSubmit = useCallback(
    async (data: CreateOrphanage) => {
      if (!formRef.current) {
        return;
      }

      // console.log(api.defaults.baseURL);

      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome do orfanato é obrigatório'),
          about: Yup.string().required(
            'Digite alguma informação sobre o orfanato',
          ),
          whatsapp: Yup.string()
            .required('Whatsapp obrigatório')
            .max(12, 'Número inválido'),
          instructions: Yup.string().required(
            'Instruções de visitação obrigatórias',
          ),
          opening_hours: Yup.string().required(
            'Horário de funcionamento obrigatório',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const newForm = new FormData();

        newForm.append('name', data.name);
        newForm.append('about', data.about);
        newForm.append('latitude', String(position.lat));
        newForm.append('longitude', String(position.lng));
        newForm.append('instructions', data.instructions);
        newForm.append('whatsapp', data.whatsapp);
        newForm.append('opening_hours', data.opening_hours);
        newForm.append('open_on_weekends', String(switchValue));

        images.forEach((image, index) => {
          newForm.append('img', {
            name: `image_${index}.jpg`,
            type: 'image/jpg',
            uri: image,
          } as any);
        });

        await api.post('/orphanages', newForm);

        Alert.alert('Cadastro realizado!');

        navigation.navigate('OrphanagesMap');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current.setErrors(errors);
          console.log(err);
          return;
        }

        console.log(err);
        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao cadastrar, tente novamente!',
        );
      }
    },
    [position, switchValue, images],
  );

  const handleChangeSwitch = useCallback(() => {
    setSwitchValue(!switchValue);
  }, [switchValue]);

  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <TitleLabel>Dados</TitleLabel>

      <Form onSubmit={handleSubmit} ref={formRef}>
        <Label>Nome</Label>
        <Input
          name="name"
          icon="user-plus"
          autoCapitalize="words"
          placeholder="Nome do orfanato"
          returnKeyType="next"
          multiline
        />
        <Label>Sobre</Label>
        <Input
          name="about"
          icon="info"
          autoCapitalize="words"
          placeholder="Sobre o orfanato"
          returnKeyType="next"
          containerStyle={{ height: 110 }}
          multiline
        />

        <Label>Número de Whatsapp</Label>
        <Input
          name="whatsapp"
          icon="message-circle"
          autoCapitalize="words"
          placeholder="whatsapp"
          returnKeyType="next"
          multiline
        />

        <Label>Fotos</Label>
        <UploadedImagesContainer>
          {images.map((image) => (
            <UploadedImage key={image} source={{ uri: image }} />
          ))}
        </UploadedImagesContainer>
        <AddButton onPress={handleSelectImages}>
          <Feather name="plus" size={24} color="#15B6D6" />
        </AddButton>

        <TitleLabel>Visitação</TitleLabel>

        <Label>Instruções</Label>
        <Input
          name="instructions"
          icon="alert-octagon"
          autoCapitalize="words"
          placeholder="Instruções para visitar o orfanato"
          returnKeyType="next"
          multiline
          containerStyle={{ height: 110 }}
        />

        <Label>Horario de visitas</Label>
        <Input
          name="opening_hours"
          icon="clock"
          autoCapitalize="words"
          placeholder="Horário de funcionamento"
          returnKeyType="next"
          multiline
        />

        <SwitchContainer>
          <Label>Atende final de emana?</Label>
          <StyledSwitch
            thumbColor="#fff"
            onValueChange={handleChangeSwitch}
            value={switchValue}
            trackColor={{ false: '#ccc', true: '#15C3D6' }}
          />
        </SwitchContainer>

        <NextButton
          enabled={!isRegistering}
          onPress={() => formRef.current?.submitForm()}
        >
          {isRegistering ? (
            <ActivityIndicator color="#c3c3c3" size={50} />
          ) : (
            <NextButtonText>Cadastrar</NextButtonText>
          )}
        </NextButton>
      </Form>
    </Container>
  );
};

export default CreateOrphanageDetail;
