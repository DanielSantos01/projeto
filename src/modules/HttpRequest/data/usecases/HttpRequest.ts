import IHttpRequest from '../../domain/usecases/IHttpRequest';
import { voidFunction, statusCode } from '../../../shared/data/protocols';
import { CITY_NAME_PLACEHOLDER } from '../../../../constants';
import IHttpHelper from '../../adapters/IHttpHelper';

class HttpRequest implements IHttpRequest {
  private httpHelper: IHttpHelper;
  private baseUrl: string;

  constructor(httpHelper: IHttpHelper, baseUrl: string) {
    this.httpHelper = httpHelper;
    this.baseUrl = baseUrl;
    this.handleUrlWithName = this.handleUrlWithName.bind(this);
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

  private handleUrlWithName(cityName: string): string {
    const currentUrl: string = this.baseUrl.replace(CITY_NAME_PLACEHOLDER, cityName);
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
