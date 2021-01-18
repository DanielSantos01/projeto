import React from 'react';
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
}) => (
  <Container>
    <TextInput
      label="Buscar pelo nome"
      theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
      value={inputCity}
      onChangeText={fetchCities}
    />

    <MapContainer>
      <Map
        latitude={selectedPosition.latitude}
        longitude={selectedPosition.longitude}
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
