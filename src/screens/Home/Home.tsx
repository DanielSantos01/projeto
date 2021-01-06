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
} from './styles';

const Home: React.FC<MainProps> = ({
  items,
  onTryToExclude,
  onOpenLocaleSearcher,
  editLocaleName,
  viewLocaleWeather,
  extraData,
}) => (
  <>
    <TitleContainer>
      <Title>Weather</Title>
      <Subtitle>each season your way</Subtitle>
    </TitleContainer>

    <>
      <ListTitle>Your list of places</ListTitle>
    </>

    <LocaleList
      items={items}
      extraData={extraData}
      editLocaleName={editLocaleName}
      onTryToExclude={onTryToExclude}
      viewLocaleWeather={viewLocaleWeather}
    />

    <SearchButton onPress={onOpenLocaleSearcher}>
      <ButtonText>Search</ButtonText>
    </SearchButton>
  </>
);

export default Home;
