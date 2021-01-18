import React, { useState } from 'react';

import {
  ButtonText,
  Input,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  Container,
} from './styles';

const Nomination: React.FC<any> = ({ closeCompact, onSaveLocale }) => {
  const [name, setName] = useState<string>();
  const onSave = () => {
    onSaveLocale(name);
  };

  return (
    <Container>
      <Input placeholder="Insira o nome do local" onChangeText={setName} />
      <ButtonsContainer>
        <CancelButton onPress={closeCompact}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
        <ConfirmButton onPress={onSave}>
          <ButtonText>Salvar</ButtonText>
        </ConfirmButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Nomination;
