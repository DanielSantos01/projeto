import React, { useState, useEffect } from 'react';

import { DataProps, InfoType } from './localGeneric';
import Main from './Data';

const Data: React.FC<DataProps> = ({ route }) => {
  const { latitude, longitude } = route.params;
  const [info, setInfo] = useState<InfoType>({
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
    <Main info={info} latitude={latitude} longitude={longitude} />
  );
};

export default Data;
