import StorageHelper from '../modules/shared/infra/StorageHelper';
import StorageHandler from '../modules/shared/data/usecases/StorageHandler';

export default new StorageHandler(new StorageHelper());
