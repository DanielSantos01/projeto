/* eslint-disable no-param-reassign */
import IStorage from '../../domain/usecases/IStorage';
import { IStorageHelper } from '../../adapters';
import { PlaceModel } from '../protocols';

class StorageHandler implements IStorage {
  private storageHelper: IStorageHelper;

  constructor(storageHelper: IStorageHelper) {
    this.storageHelper = storageHelper;
  }

  public async saveNewPlace(newPlace: PlaceModel): Promise<void> {
    const places: PlaceModel[] = await this.getAllPlaces();
    places.unshift(newPlace);
    await this.savePlaces(places);
  }

  public async renamePlace(oldName: string, newName: string): Promise<void> {
    const places: PlaceModel[] = await this.getAllPlaces();
    places.forEach((place) => {
      if (place.name === oldName) {
        place.name = newName;
      }
    });
    await this.savePlaces(places);
  }

  public async checkIfExists(name: string): Promise<boolean> {
    const places: PlaceModel[] = await this.getAllPlaces();
    for (let currentPlace = 0; currentPlace < places.length; currentPlace++) {
      const place: PlaceModel = places[currentPlace];
      if (place.name === name) {
        return true;
      }
    }
    return false;
  }

  public async removePlace(name: string): Promise<void> {
    const places: PlaceModel[] = await this.getAllPlaces();
    const newPlaces: PlaceModel[] = places.filter((place) => place.name !== name);
    await this.savePlaces(newPlaces);
  }

  public async getAllPlaces(): Promise<PlaceModel[]> {
    const places: PlaceModel[] = await this.storageHelper.getPlaces();
    return places;
  }

  private async savePlaces(places: PlaceModel[]): Promise<void> {
    await this.storageHelper.savePlaces(places);
  }
}

export default StorageHandler;
