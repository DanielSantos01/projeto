import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import { MainProps } from './localGeneric';
import {
  PlaceNameContainer,
  Option,
  CardContainer,
  PlaceName,
} from './styles';

const PlaceCardMain: React.FC<MainProps> = ({
  name,
  openWeatherCompact,
  openNominationCompact,
  onTryToRemovePlace,
}) => (
  <CardContainer onPress={openWeatherCompact}>
    <PlaceNameContainer>
      <FontAwesome name="cloud-sun" color="#f3f56d" size={20} />
      <PlaceName>{name}</PlaceName>
    </PlaceNameContainer>

    <Option onPress={openNominationCompact}>
      <Feather name="edit" color="#0DB2D6" size={20} />
    </Option>

    <Option onPress={onTryToRemovePlace}>
      <Feather name="trash-2" color="red" size={20} />
    </Option>
  </CardContainer>
);

export default PlaceCardMain;
