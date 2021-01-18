import IHttpHelper from '../../adapters/IHttpHelper';

class HttpHelper implements IHttpHelper {
  async runFetch(url: string): Promise<any> {
    const response = await fetch(url);
    const parsedResponse = await response.json();
    return parsedResponse;
  }
}

export default HttpHelper;
