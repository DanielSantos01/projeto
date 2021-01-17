import { WeatherModel } from '../../../modules/HttpRequest/data/protocols';

export interface VisualizerProps {
  latitude: number;
  longitude: number;
}

export interface MainProps {
  weatherInfo: WeatherInfo;
}

export type WeatherInfo = WeatherModel;
