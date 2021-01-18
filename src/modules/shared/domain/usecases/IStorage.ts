/* eslint-disable no-unused-vars */
import { localeItemModel } from '../../data/protocols';

interface IStorage {
  saveNewItem: (items: localeItemModel) => Promise<void>;
  renameItem: (oldName: string, newName: string) => Promise<void>;
  getItems: () => Promise<localeItemModel[]>;
  removeItem: (name: string) => Promise<void>;
  checkIfExists: (name: string) => Promise<boolean>;
}

export default IStorage;
