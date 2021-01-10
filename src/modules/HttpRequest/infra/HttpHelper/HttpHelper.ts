import IHttpHelper, { fetchSuccessType } from '../../adapters/IHttpHelper';

class HttpHelper implements IHttpHelper {
  async runFetch(url: string, onFetchSuccess: fetchSuccessType): Promise<void> {
    const response = await fetch(url);
    const parsedResponse = await response.json();
    onFetchSuccess(parsedResponse);
  }
}

export default HttpHelper;
