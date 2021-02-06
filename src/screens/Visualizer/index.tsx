import React, { useState, useEffect } from 'react';

import Loading from '../../components/Loading';
import { HttpRequest, StorageHandler } from '../../services';
import { WeatherInfo, VisualizerProps } from './localGeneric';
import Main from './visualizer';
import {
  handleVisualizerColor,
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
  let interval: number;
  const [isCompactOpened, setCompactOpened] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>();
  const [screenColor, setScreenColor] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [info, setInfo] = useState<WeatherInfo>({
    desc: '',
    humidity: '',
    icon: '',
    name: '',
    temp: '',
  });

  const getScreenColor = (description: string) => {
    const currentColor: string = handleVisualizerColor(description);
    setScreenColor(currentColor);
  };

  const getWeather = async () => {
    setLoading(true);
    const response: WeatherInfo = await HttpRequest.getCityWeather({ latitude, longitude });
    setInfo(response);
    getScreenColor(response.desc);
    setLoading(false);
  };

  const openCompact = () => {
    setCompactOpened(true);
  };

  const closeCompact = () => {
    setCompactOpened(false);
  };

  const onSavePlace = async (placeName: string) => {
    const alreadyExists: boolean = await StorageHandler.checkIfExists(placeName);
    if (alreadyExists) {
      nameErrorNofitication();
    } else {
      closeCompact();
      await onSave(placeName);
      successNominationNotification(placeName);
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
      onSavePlace={onSavePlace}
      viewOnly={viewOnly}
      screenColor={screenColor}
      currentTime={currentTime}
    />
  );
};

export default Visualizer;
