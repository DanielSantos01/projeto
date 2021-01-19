import React, { useState, useEffect } from 'react';

import Loading from '../../components/Loading';
import { HttpRequest, StorageHandler } from '../../services';
import { WeatherInfo, VisualizerProps } from './localGeneric';
import Main from './visualizer';
import {
  handleColor,
  getTime,
  nameErrorNofitication,
  successNominationNotification,
} from '../../utils';

const Visualizer: React.FC<VisualizerProps> = ({
  latitude,
  longitude,
  onSave,
  viewOnly,
}) => {
  let interval: any;
  const [isCompactOpened, setCompactOpened] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>();
  const [color, setColor] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [info, setInfo] = useState<WeatherInfo>({
    desc: '',
    humidity: '',
    icon: '',
    name: '',
    temp: '',
  });

  const getColor = (description: string) => {
    const currentColor: string = handleColor(description);
    setColor(currentColor);
  };

  const getWeather = async () => {
    setLoading(true);
    if (latitude && longitude) {
      const response: WeatherInfo = await HttpRequest.getCityWeather({ latitude, longitude });
      setInfo(response);
      getColor(response.desc);
    }
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
      nameErrorNofitication();
    } else {
      closeCompact();
      await onSave(localeName);
      successNominationNotification(localeName);
    }
  };

  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);

  useEffect(() => {
    clearInterval(interval);
    interval = setInterval(() => {
      const actualTime: string = getTime();
      setCurrentTime(actualTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
      currentTime={currentTime}
    />
  );
};

export default Visualizer;
