/* eslint-disable no-unused-vars */
import { voidFunction } from '../../shared/data/protocols';

interface IHttpHelper {
  runFetch: (url: string) => Promise<any>;
}

export type fetchSuccessType = voidFunction;
export default IHttpHelper;
