import React, { useState, useEffect } from 'react';
import { coordinate } from './localGeneric';
import {
  HttpRequest,
  GeolocationHandler,
} from '../../services';
import Preview from '../Visualizer';
import { getUserPermission } from '../../utils/GetUserPermission';
import Main from './Search';

const Search: React.FC<any> = () => {
  const [inputCity, setInputCity] = useState<string>('');
  const [shouldOpenModal, setOpenModal] = useState<boolean>(false);
  const [hasUserPermission, setUserPermission] = useState<boolean>(false);
  const [selectedPosition, setSelectedPosition] = useState<coordinate>(
    { latitude: 0, longitude: 0 },
  );

  const onHasPosition = (position: coordinate) => {
    setSelectedPosition(position);
  };

  const fetchCities = async (cityName: string) => {
    setInputCity(cityName);
    await HttpRequest.findCityPosition(cityName, onHasPosition);
  };

  const checkPermission = async () => {
    const response: boolean = await getUserPermission();
    setUserPermission(response);
  };

  const manageClick = (param) => {
    const location = param.nativeEvent;
    const position: coordinate = {
      latitude: location.coordinate.latitude,
      longitude: location.coordinate.longitude,
    };
    setSelectedPosition(position);
    setOpenModal(true);
  };

  const onOpenVisualizer = () => (
    <Preview
      latitude={selectedPosition.latitude}
      longitude={selectedPosition.longitude}
    />
  );

  useEffect(() => {
    checkPermission();
    if (hasUserPermission) {
      GeolocationHandler.getCurrentPosition(setSelectedPosition);
    }
  }, [hasUserPermission]);

  return (
    <Main
      fetchCities={fetchCities}
      inputCity={inputCity}
      manageClick={manageClick}
      selectedPosition={selectedPosition}
      modalContent={onOpenVisualizer}
      shouldOpenModal={shouldOpenModal}
    />
  );
};

export default Search;
