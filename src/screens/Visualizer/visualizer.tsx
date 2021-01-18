import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { MainProps } from './localGeneric';
import Modal from '../../components/Modal';
import Nomination from '../../components/Nomination';
import {
  Container,
  WeatherIconContainer,
  LocalName,
  WeatherIcon,
  WeatherInfoContainer,
  Info,
  ContentContainer,
  ButtonText,
  SaveButton,
} from './styles';

const Visualizer: React.FC<MainProps> = ({
  weatherInfo,
  isCompactOpened,
  openCompact,
  closeCompact,
  onSaveLocale,
  viewOnly,
  color,
}) => (
  <LinearGradient
    useAngle
    angle={350}
    colors={['transparent', color || 'transparent']}
    locations={[0.0, 1]}
    style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
  >
    <Container>
      <ContentContainer>
        <WeatherIconContainer>
          <LocalName>{weatherInfo.name}</LocalName>

          <WeatherIcon
            source={{ uri: `https://openweathermap.org/img/w/${weatherInfo.icon}.png` }}
          />
        </WeatherIconContainer>

        <WeatherInfoContainer>
          <Info>
            <Info style={{ fontWeight: 'bold' }}>Temperature:</Info>
            {' '}
            {weatherInfo.temp}
            {' '}
            ºC
          </Info>

        </WeatherInfoContainer>

        <WeatherInfoContainer>
          <Info>
            <Info style={{ fontWeight: 'bold' }}>Humidity:</Info>
            {' '}
            {weatherInfo.humidity}
            {' '}
            g/Kg
          </Info>
        </WeatherInfoContainer>

        <WeatherInfoContainer>
          <Info>
            <Info style={{ fontWeight: 'bold' }}>Description:</Info>
            {' '}
            {weatherInfo.desc}
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
  </LinearGradient>
);

export default Visualizer;
