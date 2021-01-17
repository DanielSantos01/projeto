import React from 'react';

import { MainProps } from './localGeneric';
import {
  Container,
  WeatherIconContainer,
  LocalName,
  WeatherIcon,
  WeatherInfoContainer,
  Info,
  ContentContainer,
  Input,
} from './styles';

const Preview: React.FC<MainProps> = ({ weatherInfo }) => (
  <>
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

      <Input placeholder="Como deseja chamar este lugar ?" />
    </Container>
  </>
);

export default Preview;
