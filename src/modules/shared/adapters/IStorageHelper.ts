/* eslint-disable no-unused-vars */
import { localeItemModel } from '../data/protocols';

interface IStorageHelper {
  saveItems: (items: localeItemModel[]) => Promise<void>;
  getItems: () => Promise<localeItemModel[]>;
}

export default IStorageHelper;
