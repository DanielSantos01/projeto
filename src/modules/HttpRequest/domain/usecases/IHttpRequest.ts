/* eslint-disable no-unused-vars */
import { voidFunction } from '../../../shared/data/protocols/VoidFunction';

interface IHttpResquest {
  requestFromCityName: (
    cityName: string,
    onFindLocale: voidFunction,
  ) => Promise<void>;
}

export default IHttpResquest;
