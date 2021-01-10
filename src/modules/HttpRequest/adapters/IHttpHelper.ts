/* eslint-disable no-unused-vars */
import { voidFunction } from '../../shared/data/protocols/VoidFunction';

interface IHttpHelper {
  runFetch: (
    url: string,
    onFetchSuccess: voidFunction
  ) => Promise<void>;
}

export type fetchSuccessType = voidFunction;
export default IHttpHelper;
