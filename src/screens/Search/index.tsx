/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import { Marker } from 'react-native-maps';
import { coordinate } from './localGeneric';
import { Container, ViewMap } from './styles';
import { HttpRequest, GeolocationHandler } from '../../services';
import { getUserPermission } from '../../utils/GetUserPermission';

const Search: React.FC<any> = () => {
  const [inputCity, setInputCity] = useState<string>('');
  const [hasLocationPermission, setHasLocationPermission] = useState<boolean>(false);
  const [selectedPosition, setSelectedPosition] = useState<coordinate>(
    { latitude: 0, longitude: 0 },
  );

  const fetchCities = async (cityName: string) => {
    setInputCity(cityName);
    await HttpRequest.requestFromCityName(cityName, handleLocationByName);
  };

  const handleLocationByName = (data) => {
    // TODO (tratamento do status na classe)
    if (data.cod !== 200) return;
    setSelectedPosition(
      {
        latitude: data.coord.lat,
        longitude: data.coord.lon,
      },
    );
  };

  const checkPermission = async () => {
    const response: boolean = await getUserPermission();
    setHasLocationPermission(response);
  };

  useEffect(() => {
    checkPermission();
    if (hasLocationPermission) {
      GeolocationHandler.getCurrentPosition(setSelectedPosition);
    }
  }, [hasLocationPermission]);

  const gerenciar = (position) => {
    setSelectedPosition(
      {
        latitude: position.coordinate.latitude,
        longitude: position.coordinate.longitude,
      },
    );
  };

  return (
    <Container>
      <TextInput
        label="Buscar pelo nome"
        theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
        value={inputCity}
        onChangeText={fetchCities}
      />

      <ViewMap
        style={{ flex: 1 }}
        scrollEnabled
        zoomEnabled
        initialRegion={{
          latitude: selectedPosition.latitude,
          longitude: selectedPosition.longitude,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
        region={{
          latitude: selectedPosition.latitude,
          longitude: selectedPosition.longitude,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
        showsUserLocation
        loadingEnabled
        onPress={(position) => { gerenciar(position.nativeEvent); }}
      >
        <Marker coordinate={selectedPosition} />
      </ViewMap>
    </Container>
  );
};

export default Search;
