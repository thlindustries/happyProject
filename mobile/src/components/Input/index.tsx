import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Error, Icon, Message } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
  containerStyle?: object;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name = 'default', icon = 'no-icon', containerStyle = {}, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = '', error, fieldName } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [focus, setFocus] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleInputFocus = useCallback(() => setFocus(true), []);
  const handleInputBlur = useCallback(() => {
    setFocus(false);

    setHasValue(!!inputValueRef.current.value);
  }, []);

  // useImperativeHandle(ref, () => {
  //   return {
  //     focus() {
  //       inputElementRef.current.focus();
  //     },
  //   };
  // });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      hasValue={hasValue}
      focus={focus}
      hasError={!!error}
    >
      <Icon
        name={icon}
        size={20}
        color={focus || hasValue ? '#15c3d6' : '#666360'}
      />
      <TextInput
        ref={inputElementRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
      {error && (
        <Error title={error || 'Algo de errado aconteceu'} icon="alert" />
      )}
    </Container>
  );
};

export default Input;
