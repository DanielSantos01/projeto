import React from 'react';
import { TextInput } from 'react-native-paper';
import { Marker } from 'react-native-maps';
import { MainProps } from './localGeneric';
import { Container, ViewMap } from './styles';

const Search: React.FC<MainProps> = ({ fetchCities, manageClick, cityInput }) => (
  <Container>

    <TextInput
      label="search by city name"
      theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
      value={cityInput}
      onChangeText={fetchCities}
    />

    <ViewMap
      scrollEnabled
      zoomEnabled
      initialRegion={{
        latitude: userPosition.latitude,
        longitude: userPosition.longitude,
        latitudeDelta: 5,
        longitudeDelta: 5,
      }}
      region={{
        latitude: markedPlace.latitude,
        longitude: markedPlace.longitude,
        latitudeDelta: 10,
        longitudeDelta: 10,
      }}
      showsUserLocation
      loadingEnabled
      onPress={manageClick(position)}
    >
      <Marker coordinate={markedPlace} />
    </ViewMap>
  </Container>
);

export default Search;
