/* eslint-disable no-unused-vars */
import { PlaceModel } from '../data/protocols';

interface IStorageHelper {
  savePlaces: (places: PlaceModel[]) => Promise<void>;
  getPlaces: () => Promise<PlaceModel[]>;
}

export default IStorageHelper;
