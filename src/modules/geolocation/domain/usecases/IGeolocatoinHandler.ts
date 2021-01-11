/* eslint-disable no-unused-vars */
import { voidFunction } from '../../../shared/data/protocols';

interface IGeolocationHandler {
  getCurrentPosition: (onHasPosition: voidFunction) => void;
}

export default IGeolocationHandler;
