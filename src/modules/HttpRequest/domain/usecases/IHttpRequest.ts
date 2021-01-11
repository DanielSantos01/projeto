/* eslint-disable no-unused-vars */
import { voidFunction } from '../../../shared/data/protocols';

interface IHttpResquest {
  findCityPosition: (
    cityName: string,
    onHasPosition: voidFunction,
  ) => Promise<void>;
}

export default IHttpResquest;
