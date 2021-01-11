import React from 'react';
import { TextInput } from 'react-native-paper';
import { Marker } from 'react-native-maps';
import { MainProps } from './localGeneric';
import { Container, ViewMap } from './styles';

const Search: React.FC<MainProps> = ({
  fetchCities,
  inputCity,
  selectedPosition,
  manageClick,
}) => (
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
      onPress={manageClick}
    >
      <Marker coordinate={selectedPosition} />
    </ViewMap>
  </Container>
);

export default Search;
