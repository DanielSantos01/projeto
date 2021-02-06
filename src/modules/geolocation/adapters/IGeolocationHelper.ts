/* eslint-disable no-unused-vars */
import { voidFunction } from '../../shared/data/protocols';

interface IGeolocationHelper {
  getCurrentPosition: (onHasPosition: voidFunction) => void;
}

export default IGeolocationHelper;
