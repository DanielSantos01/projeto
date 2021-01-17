import IHttpRequest from '../../domain/usecases/IHttpRequest';
import { voidFunction, statusCode } from '../../../shared/data/protocols';
import IHttpHelper from '../../adapters/IHttpHelper';
import { positionModel, WeatherModel } from '../protocols';
import {
  CITY_NAME_PLACEHOLDER,
  LONGITUDE_PLACEHOLDER,
  LATITUDE_PLACEHOLDER,
} from '../../../../constants';

class HttpRequest implements IHttpRequest {
  private httpHelper: IHttpHelper;
  private urlByName: string;
  private urlByPosition: string;

  constructor(httpHelper: IHttpHelper, urlByName: string, urlByPosition: string) {
    this.httpHelper = httpHelper;
    this.urlByName = urlByName;
    this.urlByPosition = urlByPosition;
    this.handleUrlWithName = this.handleUrlWithName.bind(this);
    this.handleUrlWithPosition = this.handleUrlWithPosition.bind(this);
  }

  public async findCityPosition(
    cityName: string,
    onHasPosition: voidFunction,
  ): Promise<void> {
    const currentUrl: string = this.handleUrlWithName(cityName);
    const response = await this.httpHelper.runFetch(currentUrl);
    const successCallback = () => {
      onHasPosition({
        latitude: response.coord.lat,
        longitude: response.coord.lon,
      });
    };

    this.handleStatusCode(response.cod, successCallback);
  }

  public async getCityWeather(position: positionModel): Promise<WeatherModel> {
    const currentUrl: string = this.handleUrlWithPosition(position);
    const response = await this.httpHelper.runFetch(currentUrl);
    let weather: WeatherModel;
    const successCallback = () => {
      weather = {
        name: response.name,
        temp: response.main.temp,
        humidity: response.main.humidity,
        desc: response.weather[0].description,
        icon: response.weather[0].icon,
      };
    };
    this.handleStatusCode(response.cod, successCallback);
    return weather;
  }

  private handleUrlWithPosition(position: positionModel) {
    const currentUrl: string = this.urlByPosition
      .replace(LATITUDE_PLACEHOLDER, `${position.latitude}`)
      .replace(LONGITUDE_PLACEHOLDER, `${position.longitude}`);
    return currentUrl;
  }

  private handleUrlWithName(cityName: string): string {
    const currentUrl: string = this.urlByName.replace(CITY_NAME_PLACEHOLDER, cityName);
    return currentUrl;
  }

  private handleStatusCode(code: number, successCallback: voidFunction) {
    // TODO (tratamento de erros)
    switch (code) {
      case statusCode.OK:
        successCallback();
        break;
      default:
        break;
    }
  }
}

export default HttpRequest;
