import React, { useState } from 'react';

import { NominationProps } from './localGeneric';
import {
  ButtonText,
  Input,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  Container,
} from './styles';

const Nomination: React.FC<NominationProps> = ({
  closeCompact,
  onSavePlace,
}) => {
  const [name, setName] = useState<string>('');

  const onSave = () => {
    onSavePlace(name);
  };

  return (
    <Container
      useAngle
      angle={50}
      colors={['#FAFAFC', 'transparent']}
      locations={[0.0, 1]}
    >
      <Input
        placeholder="Insira o nome do local"
        onChangeText={setName}
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
