import GeolocatinHandler from '../modules/geolocation/data/usecases/GeolocationHandler';
import GeolocationHelper from '../modules/geolocation/infra/GeolocationHelper/GeolocationHelper';

export default new GeolocatinHandler(new GeolocationHelper());
