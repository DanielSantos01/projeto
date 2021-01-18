import React, { useState, useEffect } from 'react';

import { handleColor } from '../../utils';
import Loading from '../../components/Loading';
import { HttpRequest, StorageHandler } from '../../services';
import { WeatherInfo, VisualizerProps } from './localGeneric';
import Main from './visualizer';

const Visualizer: React.FC<VisualizerProps> = ({
  latitude,
  longitude,
  onSave,
  viewOnly,
}) => {
  const [isCompactOpened, setCompactOpened] = useState<boolean>(false);
  const [color, setColor] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>();
  const [info, setInfo] = useState<WeatherInfo>({
    name: 'Loading...',
    temp: 'Loading...',
    humidity: 'Loading...',
    desc: 'Loading...',
    icon: 'Loading...',
  });

  const getColor = (description: string) => {
    const currentColor: string = handleColor(description);
    setColor(currentColor);
  };

  const getWeather = async () => {
    setLoading(true);
    const response: WeatherInfo = await HttpRequest.getCityWeather({ latitude, longitude });
    setInfo(response);
    getColor(response.desc);
    setLoading(false);
  };

  const openCompact = () => {
    setCompactOpened(true);
  };

  const closeCompact = () => {
    setCompactOpened(false);
  };

  const onSaveLocale = async (localeName: string) => {
    const alreadyExists: boolean = await StorageHandler.checkIfExists(localeName);
    if (alreadyExists) {
      alert('Escolha outro nome');
    } else {
      closeCompact();
      await onSave(localeName);
    }
  };

  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);

  if (isLoading) return <Loading />;

  return (
    <Main
      weatherInfo={info}
      isCompactOpened={isCompactOpened}
      openCompact={openCompact}
      closeCompact={closeCompact}
      onSaveLocale={onSaveLocale}
      viewOnly={viewOnly}
      color={color}
    />
  );
};

export default Visualizer;
