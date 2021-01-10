/* eslint-disable no-unused-vars */
export interface MainProps {
  fetchCities: (text: string) => void;
  manageClick: (click: any) => () => void;
  cityInput: string;
}

export type coordinate = {
  latitude: number;
  longitude: number;
};
