/* eslint-disable no-unused-vars */
import Geolocation, { GeoPosition, GeoError } from 'react-native-geolocation-service';

import IGeolocationHelper from '../../adapters/IGeolocationHelper';
import { voidFunction } from '../../../shared/data/protocols';
import { genericErrorNotification } from '../../../../utils';
import { positionModel } from '../../data/protocols';

class GeolocationHelper implements IGeolocationHelper {
  public getCurrentPosition(onHasPosition: voidFunction): void {
    Geolocation.getCurrentPosition(this.handlePosition(onHasPosition), this.onFailCallback);
  }

  private handlePosition(onHasPosition: voidFunction): voidFunction {
    return function onSuccessCallback(position: GeoPosition) {
      const currentPosition: positionModel = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      onHasPosition(currentPosition);
    };
  }

  private onFailCallback(err: GeoError): void {
    genericErrorNotification(
      'Erro!',
      'Não foi possível obter a sua localização',
    );
  }
}

export default GeolocationHelper;
