/* eslint-disable no-unused-vars */
import { MapInfoProps } from '../../../screens/Search/localGeneric';

export interface MapProps {
  latitude: number;
  longitude: number;
  manageClick?: (click: any) => void;
  MapInfo: MapInfoProps;
  onRegionChange: (props: MapInfoProps) => void;
}
