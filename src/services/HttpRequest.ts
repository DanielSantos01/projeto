import HttpRequest from '../modules/HttpRequest/data/usecases/HttpRequest';
import HttpHelper from '../modules/HttpRequest/infra/HttpHelper/HttpHelper';
import { urlByName, urlByPosition } from '../constants';

export default new HttpRequest(new HttpHelper(), urlByName, urlByPosition);
