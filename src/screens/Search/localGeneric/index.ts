/* eslint-disable no-unused-vars */
import { LatLng, Point, MapEvent } from 'react-native-maps';
import { positionModel } from '../../../modules/geolocation/data/protocols';

export interface SearchProps {
  route: RouteProps;
}

type RouteProps = {
  params: ParamsProps;
}

type ParamsProps = {
  setUpdated: (updatedTime: number) => void;
}

export interface MainProps {
  fetchCities: (text: string) => void;
  manageClick: (clickEvent: MapEvent) => void;
  selectedPosition: Coordinate;
  inputCity: string;
  onSave: (placeName: string) => Promise<void>;
  onRegionChange: (props: MapDeltaModel) => void;
  mapDelta: MapDeltaModel;
}

export type Coordinate = positionModel;

export type MapDeltaModel = {
  latitudeDelta: number;
  longitudeDelta: number;
}

export type ClickPosition = {
  coordinate: LatLng;
  position: Point;
}
