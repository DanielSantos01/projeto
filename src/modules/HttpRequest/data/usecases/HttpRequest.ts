import IHttpRequest from '../../domain/usecases/IHttpRequest';
import { voidFunction } from '../../../shared/data/protocols/VoidFunction';
import IHttpHelper from '../../adapters/IHttpHelper';

class HttpRequest implements IHttpRequest {
  private httpHelper: IHttpHelper;
  private baseUrl: string;

  constructor(httpHelper: IHttpHelper, baseUrl: string) {
    this.httpHelper = httpHelper;
    this.baseUrl = baseUrl;
  }

  public async requestFromCityName(
    cityName: string,
    onFindLocale: voidFunction,
  ): Promise<void> {
    const currentUrl: string = this.handleUrl(cityName);
    await this.httpHelper.runFetch(currentUrl, onFindLocale);
  }

  private handleUrl(cityName: string): string {
    return this.baseUrl.replace('CITY_PLACEHOLDER', cityName);
  }
}

export default HttpRequest;
