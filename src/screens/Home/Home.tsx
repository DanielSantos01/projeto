/* eslint-disable react/prop-types */
import React from 'react';

import { LocaleList } from './components';
import { MainProps } from './localGeneric';
import {
  TitleContainer,
  Subtitle,
  Title,
  ListTitle,
  SearchButton,
  ButtonText,
  Container,
} from './styles';

const Home: React.FC<MainProps> = ({
  items,
  onTryToExclude,
  onOpenLocaleSearcher,
  editLocaleName,
  viewLocaleWeather,
  extraData,
}) => (
  <Container>
    <TitleContainer>
      <Title>Weather</Title>
      <Subtitle>Cada estação do seu jeito</Subtitle>
    </TitleContainer>

    <>
      <ListTitle>Sua lista de lugares</ListTitle>
    </>

    <LocaleList
      items={items}
      extraData={extraData}
      editLocaleName={editLocaleName}
      onTryToExclude={onTryToExclude}
      viewLocaleWeather={viewLocaleWeather}
    />

    <SearchButton onPress={onOpenLocaleSearcher}>
      <ButtonText>Procurar</ButtonText>
    </SearchButton>
  </Container>
);

export default Home;
