/* eslint-disable no-unused-vars */
import { MapEvent } from 'react-native-maps';
import { MapDeltaModel } from '../../../screens/Search/localGeneric';

export interface MapProps {
  latitude: number;
  longitude: number;
  manageClick: (clickEvent: MapEvent) => void;
  MapDelta: MapDeltaModel;
  onRegionChange: (props: MapDeltaModel) => void;
}
