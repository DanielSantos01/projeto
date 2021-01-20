/* eslint-disable no-unused-vars */
import { PlaceModel } from '../../../modules/shared/data/protocols';
import { PalletModel } from '../../../utils/handleColorPalletByHour/localGeneric';

export type HomeProps = {
  route: RouteProps;
};

type RouteProps = {
  params: any;
};

export type MainProps = {
  savedPlaces: PlaceModel[];
  onOpenPlacesSearcher: () => void;
  openCompact: (props: OpenCompactProps) => void;
  closeCompact: () => void;
  onRename: (newPlaceName: string) => Promise<void>;
  onExclude: (placeName: string) => Promise<void>;
  colorPallet: ColorPalletModel;
  compactModalInfo: CompactModalInfoModel;
};

export type CompactModalInfoModel = {
  isWeatherType: boolean;
  isRenameType: boolean;
  previousName: string;
  requiredPlaceInfo: PlaceModel;
  isOpened: boolean;
}

export type OpenCompactProps = {
  name?: string;
  data?: PlaceModel;
}

export type ColorPalletModel = PalletModel;
