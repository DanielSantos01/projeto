import React, { useState, useEffect } from 'react';

import { localeItemModel } from '../../modules/shared/data/protocols';
import { coordinate, SearchProps, MapInfoProps } from './localGeneric';
import {
  HttpRequest,
  GeolocationHandler,
  StorageHandler,
} from '../../services';
import { getUserPermission } from '../../utils/GetUserPermission';
import Main from './Search';

const Search: React.FC<SearchProps> = ({ route }) => {
  const { setUpdated } = route.params;
  const [inputCity, setInputCity] = useState<string>('');
  const [mapInfo, setMapInfo] = useState<MapInfoProps>();
  const [hasUserPermission, setUserPermission] = useState<boolean>(false);
  const [selectedPosition, setSelectedPosition] = useState<coordinate>();

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
  };

  const onSave = async (localeName: string) => {
    const localeData: localeItemModel = {
      latitude: selectedPosition.latitude,
      longitude: selectedPosition.longitude,
      name: localeName,
    };
    await StorageHandler.saveNewItem(localeData);
    setUpdated(new Date().getMilliseconds());
  };

  const onRegionChange = (props: MapInfoProps) => {
    setMapInfo(props);
  };

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
      onSave={onSave}
      onRegionChange={onRegionChange}
      mapInfo={mapInfo}
    />
  );
};

export default Search;
