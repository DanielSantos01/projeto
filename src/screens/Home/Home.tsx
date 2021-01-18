/* eslint-disable react/prop-types */
import React from 'react';

import Nomination from '../../components/Nomination';
import Modal from '../../components/Modal';
import Visualizer from '../Visualizer';
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
  Icon,
} from './styles';

const Home: React.FC<MainProps> = ({
  items,
  onOpenLocaleSearcher,
  closeCompact,
  isData,
  isOpened,
  localeData,
  onRename,
  openCompact,
  onExclude,
}) => (
  <Container>
    <TitleContainer>
      <Title>Weather</Title>
      <Subtitle>Cada estação do seu jeito</Subtitle>
    </TitleContainer>

    <ListTitle>Sua lista de lugares</ListTitle>

    <LocaleList
      items={items}
      openCompact={openCompact}
      onExclude={onExclude}
    />

    <SearchButton onPress={onOpenLocaleSearcher}>
      <Icon name="search" />
      <ButtonText>Pesquisar</ButtonText>
    </SearchButton>

    <Modal
      Component={isData ? Visualizer : Nomination}
      isCompact
      closeCompact={closeCompact}
      shouldOpen={isOpened}
      props={{
        onSaveLocale: onRename,
        closeCompact,
        latitude: localeData?.latitude,
        longitude: localeData?.longitude,
        viewOnly: true,
      }}
    />
  </Container>
);

export default Home;
