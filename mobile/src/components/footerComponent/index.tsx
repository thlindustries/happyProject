import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, ContentContainer, Message, StyledButton } from './styles';

const footerComponent: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <Message>2 orfanatos encontrados</Message>
        <StyledButton>
          <Feather name="plus" size={20} color="#fff" />
        </StyledButton>
      </ContentContainer>
    </Container>
  );
};

export default footerComponent;
