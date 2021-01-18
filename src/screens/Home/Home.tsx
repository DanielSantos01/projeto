/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar } from 'react-native';

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
  GradientContainer,
  ListTitleContainer,
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
  colorPallet,
}) => (
  <Container>
    <StatusBar barStyle="dark-content" backgroundColor={colorPallet?.ballColor} />
    <GradientContainer
      useAngle
      angle={170}
      colors={['#d7e6e9', colorPallet?.containerColor || '#73d8ee']}
      locations={[0.2, 1.2]}
    >
      <TitleContainer style={{ backgroundColor: colorPallet?.ballColor }}>
        <Title style={{ color: colorPallet?.titleColor }}>Weather</Title>
        <Subtitle>Cada estação do seu jeito</Subtitle>
      </TitleContainer>

      <ListTitleContainer>
        <ListTitle>Lugares favoritos</ListTitle>
        <Icon name="star" size={20} />
      </ListTitleContainer>

      <LocaleList
        items={items}
        openCompact={openCompact}
        onExclude={onExclude}
      />

      <SearchButton onPress={onOpenLocaleSearcher} display={!isOpened}>
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
    </GradientContainer>
  </Container>
);

export default Home;
