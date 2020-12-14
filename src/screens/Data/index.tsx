import React, { useState, useEffect } from 'react';
import { Marker } from 'react-native-maps';

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

const Data: React.FC = ({ route: { params: { latitude, longitude } } }) => {
  const [info, setInfo] = useState({
    name: 'Loading...',
    temp: 'Loading...',
    humidity: 'Loading...',
    desc: 'Loading...',
    icon: 'Loading...',
  });

  const weather = async () => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d812ba41f36e1b6fdb2e8a4b8224ec45&units=metric`)
      .then((item) => item.json())
      .then((results) => setInfo({
        name: results.name,
        temp: results.main.temp,
        humidity: results.main.humidity,
        desc: results.weather[0].description,
        icon: results.weather[0].icon,
      }))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    weather();
  }, []);

  return (
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
};

export default Data;
