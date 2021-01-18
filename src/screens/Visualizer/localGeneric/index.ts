/* eslint-disable no-unused-vars */
import { WeatherModel } from '../../../modules/HttpRequest/data/protocols';

export interface VisualizerProps {
  latitude: number;
  longitude: number;
  onSave: (localeName: string) => Promise<void>;
  viewOnly?: boolean;
}

export interface MainProps {
  weatherInfo: WeatherInfo;
  isCompactOpened: boolean;
  openCompact: () => void;
  closeCompact: () => void;
  onSaveLocale: (localeName: string) => void;
  viewOnly?: boolean;
  color: string;
}

export type WeatherInfo = WeatherModel;
