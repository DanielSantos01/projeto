import React, { useState } from 'react';

import getShadow from '../utils/getShadow';
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
    <Container
      useAngle
      angle={50}
      colors={['#FAFAFC', 'transparent']}
      locations={[0.0, 1]}
      style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
    >
      <Input
        placeholder="Insira o nome do local"
        onChangeText={setName}
        style={getShadow('#000000')}
      />

      <ButtonsContainer>
        <CancelButton onPress={closeCompact}>
          <ButtonText cancelType>Cancelar</ButtonText>
        </CancelButton>
        <ConfirmButton onPress={onSave}>
          <ButtonText>Salvar</ButtonText>
        </ConfirmButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Nomination;
