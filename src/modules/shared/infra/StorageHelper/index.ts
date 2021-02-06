/* eslint-disable no-alert */
import AsyncStorage from '@react-native-community/async-storage';

import { genericErrorNotification } from '../../../../utils';
import { IStorageHelper } from '../../adapters';
import { PlaceModel } from '../../data/protocols';

class StorageHelper implements IStorageHelper {
  public async savePlaces(places: PlaceModel[]): Promise<void> {
    try {
      await AsyncStorage.setItem('@data', JSON.stringify(places));
    } catch (err) {
      genericErrorNotification(
        'Erro!',
        'Não foi possível salvar seus itens localmente.',
      );
    }
  }
  public async getPlaces(): Promise<PlaceModel[]> {
    try {
      const savedPlaces: string = await AsyncStorage.getItem('@data');
      if (savedPlaces) {
        return JSON.parse(savedPlaces);
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
