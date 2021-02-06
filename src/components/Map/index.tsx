import React from 'react';
import { Marker, Region } from 'react-native-maps';

import { MapProps } from './localGeneric';
import { ViewMap } from './styles';

const Map: React.FC<MapProps> = ({
  latitude,
  longitude,
  manageClick,
  MapDelta,
  onRegionChange,
}) => (
  <ViewMap
    scrollEnabled
    zoomEnabled
    showsUserLocation
    zoomTapEnabled
    zoomControlEnabled
    userLocationAnnotationTitle="Você está aqui"
    showsPointsOfInterest
    renderToHardwareTextureAndroid
    onPress={manageClick}
    onRegionChangeComplete={(region: Region) => {
      onRegionChange({
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta,
      });
    }}
    initialRegion={{
      latitude,
      longitude,
      latitudeDelta: MapDelta.latitudeDelta,
      longitudeDelta: MapDelta.longitudeDelta,
    }}
    region={{
      latitude,
      longitude,
      latitudeDelta: MapDelta.latitudeDelta,
      longitudeDelta: MapDelta.longitudeDelta,
    }}
  >
    <Marker coordinate={{ latitude, longitude }} />
  </ViewMap>
);

export default Map;
