/* eslint-disable no-alert */
import AsyncStorage from '@react-native-community/async-storage';

import { genericErrorNotification } from '../../../../utils';
import { IStorageHelper } from '../../adapters';
import { localeItemModel } from '../../data/protocols';

class StorageHelper implements IStorageHelper {
  public async saveItems(items: localeItemModel[]): Promise<void> {
    try {
      await AsyncStorage.setItem('@data', JSON.stringify(items));
    } catch (err) {
      genericErrorNotification(
        'Erro!',
        'Não foi possível salvar seus itens localmente.',
      );
    }
  }
  public async getItems(): Promise<localeItemModel[]> {
    try {
      const previous: string = await AsyncStorage.getItem('@data');
      if (previous) {
        return JSON.parse(previous);
      }
    } catch (err) {
      genericErrorNotification(
        'Erro!',
        'Não foi possível resgatar os itens salvos localmente.',
      );
    }
    return [];
  }
}

export default StorageHelper;
