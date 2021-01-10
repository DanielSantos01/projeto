import HttpRequest from '../modules/HttpRequest/data/usecases/HttpRequest';
import HttpHelper from '../modules/HttpRequest/infra/HttpHelper/HttpHelper';
import { apiUrl } from '../constants';

export default new HttpRequest(new HttpHelper(), apiUrl);
