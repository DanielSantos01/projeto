import React, { useState, useEffect } from 'react';
import { MapEvent } from 'react-native-maps';

import { PlaceModel } from '../../modules/shared/data/protocols';
import {
  Coordinate,
  SearchProps,
  MapDeltaModel,
  ClickPosition,
} from './localGeneric';
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
  const [hasUserPermission, setUserPermission] = useState<boolean>(false);
  const [mapDelta, setMapDelta] = useState<MapDeltaModel>({
    latitudeDelta: 5,
    longitudeDelta: 5,
  });
  const [selectedPosition, setSelectedPosition] = useState<Coordinate>({
    latitude: 0,
    longitude: 0,
  });

  const onHasCoordinate = (position: Coordinate) => {
    setSelectedPosition(position);
  };

  const fetchCities = async (cityName: string) => {
    setInputCity(cityName);
    await HttpRequest.findCityCoordinate(cityName, onHasCoordinate);
  };

  const checkPermission = async () => {
    const response: boolean = await getUserPermission();
    setUserPermission(response);
  };

  const manageClick = (clickEvent: MapEvent) => {
    const location: ClickPosition = clickEvent.nativeEvent;
    const coordinate: Coordinate = {
      latitude: location.coordinate.latitude,
      longitude: location.coordinate.longitude,
    };
    setSelectedPosition(coordinate);
  };

  const onSave = async (placeName: string) => {
    const placeData: PlaceModel = {
      latitude: selectedPosition.latitude,
      longitude: selectedPosition.longitude,
      name: placeName,
    };
    await StorageHandler.saveNewPlace(placeData);
    setUpdated(new Date().getMilliseconds());
  };

  const onRegionChange = (props: MapDeltaModel) => {
    setMapDelta(props);
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
      mapDelta={mapDelta}
    />
  );
};

export default Search;
