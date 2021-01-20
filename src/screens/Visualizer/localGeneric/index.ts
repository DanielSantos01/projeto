/* eslint-disable no-unused-vars */
import { WeatherModel } from '../../../modules/HttpRequest/data/protocols';

export interface VisualizerProps {
  latitude: number;
  longitude: number;
  onSave: (placeName: string) => Promise<void>;
  viewOnly?: boolean;
}

export interface MainProps {
  weatherInfo: WeatherInfo;
  isCompactOpened: boolean;
  openCompact: () => void;
  closeCompact: () => void;
  onSavePlace: (placeName: string) => void;
  viewOnly?: boolean;
  screenColor: string;
  currentTime: string;
}

export type WeatherInfo = WeatherModel;
