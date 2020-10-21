import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
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
  openning_hours: string;
}

const CreateOrphanageDetail: React.FC = () => {
  const { params } = useRoute();

  const [switchValue, setSwitchValue] = useState(true);
  const orphanageNameInputRef = useRef<TextInput>(null);

  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  useEffect(() => {
    console.log(params);
  }, []);

  const handleSubmit = useCallback(async (data: CreateOrphanage) => {
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

      console.log(data);
      // await api.post('/usuarios', data);

      Alert.alert(
        'Cadastro realizado!',
        'Você já pode fazer o seu login na aplicação!',
      );

      // navigation.goBack();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current.setErrors(errors);
        return;
      }

      Alert.alert(
        'Erro no cadastro',
        'Ocorreu um erro ao cadastrar, tente novamente!',
      );
    }

    console.log('submit');
  }, []);

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
        <AddButton onPress={() => { }}>
          <Feather name="plus" size={24} color="#15B6D6" />
        </AddButton>

        <TitleLabel>Visitação</TitleLabel>

        <Label>Instruções</Label>
        <Input
          name="instructions"
          icon="alert-octagon"
          autoCapitalize="words"
          placeholder="Instroções para visitar o orfanato"
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

        <NextButton onPress={() => formRef.current?.submitForm()}>
          <NextButtonText>Cadastrar</NextButtonText>
        </NextButton>
      </Form>
    </Container>
  );
};

export default CreateOrphanageDetail;
