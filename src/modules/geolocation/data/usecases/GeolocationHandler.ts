import IGeolocationHelper from '../../adapters/IGeolocationHelper';
import IGeolocationHandler from '../../domain/usecases/IGeolocatoinHandler';
import { voidFunction } from '../../../shared/data/protocols/VoidFunction';

class GeolocationHandler implements IGeolocationHandler {
  private geolocationHelper: IGeolocationHelper;

  constructor(geolocationHelper: IGeolocationHelper) {
    this.geolocationHelper = geolocationHelper;
  }

  public getCurrentPosition(onHasPosition: voidFunction): void {
    this.geolocationHelper.getCurrentPosition(onHasPosition);
  }
}

export default GeolocationHandler;
