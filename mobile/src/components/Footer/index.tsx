import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, ContentContainer, Message, StyledButton } from './styles';

interface FooterProps {
  addFunction(): void;
  totalCount: number;
}

const footerComponent: React.FC<FooterProps> = ({
  addFunction,
  totalCount,
}) => {
  return (
    <Container>
      <ContentContainer>
        <Message>
          {/* {`${totalCount} orfanatos encontrados`} */}
          {totalCount > 1
            ? `${totalCount} orfanatos encontrado`
            : `${totalCount} orfanato encontrado`}
        </Message>
        <StyledButton onPress={addFunction}>
          <Feather name="plus" size={20} color="#fff" />
        </StyledButton>
      </ContentContainer>
    </Container>
  );
};

export default footerComponent;
