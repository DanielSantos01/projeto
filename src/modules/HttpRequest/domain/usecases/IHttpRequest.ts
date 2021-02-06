/* eslint-disable no-unused-vars */
import { voidFunction } from '../../../shared/data/protocols';
import { positionModel, WeatherModel } from '../../data/protocols';

interface IHttpResquest {
  findCityCoordinate: (
    cityName: string,
    onHasCoordinate: voidFunction,
  ) => Promise<void>;

  getCityWeather: (coordinate: positionModel) => Promise<WeatherModel>;
}

export default IHttpResquest;
