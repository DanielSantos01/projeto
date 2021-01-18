/* eslint-disable no-param-reassign */
import IStorage from '../../domain/usecases/IStorage';
import { IStorageHelper } from '../../adapters';
import { localeItemModel } from '../protocols';

class StorageHandler implements IStorage {
  private storageHelper: IStorageHelper;

  constructor(storageHelper: IStorageHelper) {
    this.storageHelper = storageHelper;
  }

  public async saveNewItem(newItem: localeItemModel): Promise<void> {
    const items: localeItemModel[] = await this.getItems();
    items.unshift(newItem);
    await this.saveItems(items);
  }

  public async renameItem(oldName: string, newName: string): Promise<void> {
    const items: localeItemModel[] = await this.getItems();
    items.forEach((item) => {
      if (item.name === oldName) {
        item.name = newName;
      }
    });
    await this.saveItems(items);
  }

  public async checkIfExists(name: string): Promise<boolean> {
    const localItems: localeItemModel[] = await this.getItems();
    for (let i = 0; i < localItems.length; i++) {
      const currentItem: localeItemModel = localItems[i];
      if (currentItem.name === name) {
        return true;
      }
    }
    return false;
  }

  public async removeItem(name: string): Promise<void> {
    const items: localeItemModel[] = await this.getItems();
    const newItems: localeItemModel[] = items.filter((item) => item.name !== name);
    await this.saveItems(newItems);
  }

  public async getItems(): Promise<localeItemModel[]> {
    const localItems: localeItemModel[] = await this.storageHelper.getItems();
    return localItems;
  }

  private async saveItems(items: localeItemModel[]): Promise<void> {
    await this.storageHelper.saveItems(items);
  }
}

export default StorageHandler;
