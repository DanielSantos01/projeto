import React from 'react';
import { StatusBar } from 'react-native';
import { TextInput } from 'react-native-paper';
import Visualizer from '../Visualizer';
import Map from '../../components/Map';
import Modal from '../../components/Modal';
import { MainProps } from './localGeneric';
import { Container, MapContainer } from './styles';

const Search: React.FC<MainProps> = ({
  fetchCities,
  inputCity,
  selectedPosition,
  manageClick,
  onSave,
  mapInfo,
  onRegionChange,
}) => (
  <Container>
    <StatusBar barStyle="dark-content" backgroundColor="#e2dddd" />
    <TextInput
      label="Buscar pelo nome"
      theme={{ colors: { primary: '#0DB2D6', surface: '#e2dddd' } }}
      value={inputCity}
      onChangeText={fetchCities}
    />

    <MapContainer>
      <Map
        latitude={selectedPosition?.latitude}
        longitude={selectedPosition?.longitude}
        MapInfo={mapInfo}
        onRegionChange={onRegionChange}
        manageClick={manageClick}
      />
    </MapContainer>

    <Modal
      Component={Visualizer}
      props={{ onSave, ...selectedPosition }}
    />
  </Container>
);

export default Search;
