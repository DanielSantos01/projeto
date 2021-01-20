import React from 'react';

import { MainProps } from './localGeneric';
import Modal from '../../components/Modal';
import Nomination from '../../components/Nomination';
import {
  Container,
  WeatherIconContainer,
  PlaceName,
  WeatherIcon,
  WeatherInfoContainer,
  Info,
  ContentContainer,
  ButtonText,
  SaveButton,
  Icon,
  IconContainer,
  PlaceNameContainer,
  Temperature,
} from './styles';

const Visualizer: React.FC<MainProps> = ({
  weatherInfo,
  isCompactOpened,
  openCompact,
  closeCompact,
  onSavePlace,
  viewOnly,
  screenColor,
  currentTime,
}) => (
  <Container
    useAngle
    angle={320}
    colors={[screenColor || 'transparent', 'transparent']}
    locations={[0, 0.9]}
    style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
  >
    <ContentContainer>

      <PlaceNameContainer>
        <IconContainer>
          <Icon name="map-pin" />
        </IconContainer>
        <PlaceName>{`${weatherInfo.name}, ${currentTime || '...'}`}</PlaceName>
      </PlaceNameContainer>

      <WeatherIconContainer>
        <WeatherIcon
          source={{ uri: `https://openweathermap.org/img/w/${weatherInfo.icon}.png` }}
        />
      </WeatherIconContainer>

      <Temperature>{` ${weatherInfo.temp} ºC`}</Temperature>

      <WeatherInfoContainer>
        <Icon name="check" size={15} color="#67e448" />
        <Info>
          <Info isBold>Humidade:</Info>
          {` ${weatherInfo.humidity} `}
          g/Kg
        </Info>
      </WeatherInfoContainer>

      <WeatherInfoContainer>
        <Icon name="check" size={15} color="#67e448" />
        <Info>
          <Info isBold>Descrição:</Info>
          {` ${weatherInfo.desc}`}
        </Info>
      </WeatherInfoContainer>
    </ContentContainer>

    {!viewOnly ? (
      <SaveButton onPress={openCompact}>
        <ButtonText>Salvar</ButtonText>
      </SaveButton>
    ) : null}

    <Modal
      Component={Nomination}
      shouldOpen={isCompactOpened}
      closeCompact={closeCompact}
      props={{ closeCompact, onSavePlace }}
      isCompact
    />
  </Container>
);

export default Visualizer;
