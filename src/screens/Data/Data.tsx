import React from 'react';
import { Marker } from 'react-native-maps';

import { MainProps } from './localGeneric';
import {
  Container,
  WeatherIconContainer,
  DirectionerContainer,
  DirectionerText,
  LocalName,
  WeatherIcon,
  Map,
  WeatherInfoContainer,
  Info,
} from './styles';

const Data: React.FC<MainProps> = ({ longitude, latitude, info }) => (
  <Container>

    <WeatherIconContainer>
      <LocalName>{info.name}</LocalName>

      <WeatherIcon
        source={{ uri: `https://openweathermap.org/img/w/${info.icon}.png` }}
      />
    </WeatherIconContainer>

    <WeatherInfoContainer>
      <Info>
        <Info style={{ fontWeight: 'bold' }}>Temperature:</Info>
        {' '}
        {info.temp}
        {' '}
        ºC
      </Info>

    </WeatherInfoContainer>

    <WeatherInfoContainer>
      <Info>
        <Info style={{ fontWeight: 'bold' }}>Humidity:</Info>
        {' '}
        {info.humidity}
        {' '}
        g/Kg
      </Info>
    </WeatherInfoContainer>

    <WeatherInfoContainer>
      <Info>
        <Info style={{ fontWeight: 'bold' }}>Description:</Info>
        {' '}
        {info.desc}
      </Info>
    </WeatherInfoContainer>

    <DirectionerContainer>
      <DirectionerText>You are looking at here</DirectionerText>
    </DirectionerContainer>

    <Map
      scrollEnabled={false}
      zoomEnabled={false}
      region={{
        latitude,
        longitude,
        latitudeDelta: 0.6,
        longitudeDelta: 0.6,
      }}
      loadingEnabled
    >
      <Marker coordinate={{
        latitude,
        longitude,
      }}
      />
    </Map>
  </Container>

);

export default Data;
