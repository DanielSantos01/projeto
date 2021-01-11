import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import IGeolocationHelper from '../../adapters/IGeolocationHelper';
import { voidFunction } from '../../../shared/data/protocols';
import { positionModel } from '../../data/protocols';

class GeolocationHelper implements IGeolocationHelper {
  public getCurrentPosition(onHasPosition: voidFunction): void {
    Geolocation.getCurrentPosition(this.handlePosition(onHasPosition), this.onFailCallback);
  }

  private handlePosition(onHasPosition: voidFunction) {
    return function onSuccessCallback(position: GeoPosition) {
      const currentPosition: positionModel = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      onHasPosition(currentPosition);
    };
  }

  private onFailCallback(err) {
    // TODO (tratamento do erro)
    console.warn(err);
  }
}

export default GeolocationHelper;
