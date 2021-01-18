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
    initialRegion={latitude ? {
      latitude,
      longitude,
      latitudeDelta: 5,
      longitudeDelta: 5,
    } : null}
    region={latitude && MapInfo ? {
      latitude,
      longitude,
      latitudeDelta: MapInfo.latitudeDelta,
      longitudeDelta: MapInfo.longitudeDelta,
    } : null}
    showsUserLocation
    onRegionChangeComplete={onRegionChange}
    onPress={(position) => (manageClick ? manageClick(position) : null)}
  >
    {latitude ? <Marker coordinate={{ latitude, longitude }} /> : <></>}
  </ViewMap>
);

export default Map;
