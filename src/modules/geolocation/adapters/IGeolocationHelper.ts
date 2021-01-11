/* eslint-disable no-unused-vars */
import { voidFunction } from '../../shared/data/protocols/VoidFunction';

interface IGeolocationHelper {
  getCurrentPosition: (onHasPosition: voidFunction) => void;
}

export default IGeolocationHelper;
