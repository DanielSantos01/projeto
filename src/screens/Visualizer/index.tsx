import React, { useState, useEffect } from 'react';

import { HttpRequest } from '../../services';
import { WeatherInfo, VisualizerProps } from './localGeneric';
import Main from './visualizer';

const Register: React.FC<VisualizerProps> = ({ latitude, longitude }) => {
  const [info, setInfo] = useState<WeatherInfo>({
    name: 'Loading...',
    temp: 'Loading...',
    humidity: 'Loading...',
    desc: 'Loading...',
    icon: 'Loading...',
  });
  const getWeather = async () => {
    const response: WeatherInfo = await HttpRequest.getCityWeather({ latitude, longitude });
    setInfo(response);
  };

  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);

  return (
    <Main weatherInfo={info} />
  );
};

export default Register;
