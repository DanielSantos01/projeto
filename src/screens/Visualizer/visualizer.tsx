import React from 'react';

import { MainProps } from './localGeneric';
import Modal from '../../components/Modal';
import Nomination from '../../components/Nomination';
import {
  Container,
  WeatherIconContainer,
  LocaleName,
  WeatherIcon,
  WeatherInfoContainer,
  Info,
  ContentContainer,
  ButtonText,
  SaveButton,
  Icon,
  IconContainer,
  LocaleContainer,
  Temperature,
} from './styles';

const Visualizer: React.FC<MainProps> = ({
  weatherInfo,
  isCompactOpened,
  openCompact,
  closeCompact,
  onSaveLocale,
  viewOnly,
  color,
  currentTime,
}) => (
  <Container
    useAngle
    angle={320}
    colors={[color || 'transparent', 'transparent']}
    locations={[0, 0.9]}
    style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
  >
    <ContentContainer>

      <LocaleContainer>
        <IconContainer>
          <Icon name="map-pin" />
        </IconContainer>
        <LocaleName>{`${weatherInfo.name}, ${currentTime || '...'}`}</LocaleName>
      </LocaleContainer>

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
      props={{ closeCompact, onSaveLocale }}
      isCompact
    />
  </Container>
);

export default Visualizer;
