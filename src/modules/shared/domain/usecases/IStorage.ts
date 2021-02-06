/* eslint-disable no-unused-vars */
import { PlaceModel } from '../../data/protocols';

interface IStorage {
  saveNewPlace: (places: PlaceModel) => Promise<void>;
  renamePlace: (oldName: string, newName: string) => Promise<void>;
  getAllPlaces: () => Promise<PlaceModel[]>;
  removePlace: (placeName: string) => Promise<void>;
  checkIfExists: (placeName: string) => Promise<boolean>;
}

export default IStorage;
