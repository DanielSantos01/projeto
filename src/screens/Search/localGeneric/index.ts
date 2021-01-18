/* eslint-disable no-unused-vars */
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
  manageClick: (click: any) => void;
  selectedPosition: coordinate;
  inputCity: string;
  onSave: (localeName: string) => Promise<void>;
}

export type coordinate = positionModel;
