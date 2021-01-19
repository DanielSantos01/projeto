import React from 'react';
import { Marker } from 'react-native-maps';

import { MapProps } from './localGeneric';
import { ViewMap } from './styles';

const Map: React.FC<MapProps> = ({
  latitude,
  longitude,
  manageClick,
  MapInfo,
  onRegionChange,
}) => (
  <ViewMap
    style={{ flex: 1 }}
    scrollEnabled
    zoomEnabled
    initialRegion={{
      latitude,
      longitude,
      latitudeDelta: 5,
      longitudeDelta: 5,
    }}
    region={{
      latitude,
      longitude,
      latitudeDelta: MapInfo?.latitudeDelta || 10,
      longitudeDelta: MapInfo?.longitudeDelta || 10,
    }}
    showsUserLocation
    onRegionChangeComplete={onRegionChange}
    onPress={(position) => (manageClick ? manageClick(position) : null)}
  >
    <Marker coordinate={{ latitude, longitude }} />
  </ViewMap>
);

export default Map;
