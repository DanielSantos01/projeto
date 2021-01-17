/* eslint-disable no-unused-vars */
import { voidFunction } from '../../../shared/data/protocols';
import { positionModel, WeatherModel } from '../../data/protocols';

interface IHttpResquest {
  findCityPosition: (
    cityName: string,
    onHasPosition: voidFunction,
  ) => Promise<void>;

  getCityWeather: (position: positionModel) => Promise<WeatherModel>;
}

export default IHttpResquest;
