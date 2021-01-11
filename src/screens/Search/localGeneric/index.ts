/* eslint-disable no-unused-vars */
import { positionModel } from '../../../modules/geolocation/data/protocols';

export interface MainProps {
  fetchCities: (text: string) => void;
  manageClick: (click: any) => void;
  selectedPosition: coordinate;
  inputCity: string;
}

export type coordinate = positionModel;
