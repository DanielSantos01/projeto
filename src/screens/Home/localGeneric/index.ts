/* eslint-disable no-unused-vars */
import { localeItemModel } from '../../../modules/shared/data/protocols';
import { PalletModel } from '../../../utils/handleHourPallet/localGeneric';

export type HomeProps = {
  route: RouteProps;
};

type RouteProps = {
  params: any;
};

export type MainProps = {
  items: localeItemModel[];
  onOpenLocaleSearcher: () => void;
  openCompact: (props: OpenCompactProps) => void;
  closeCompact: () => void;
  onRename: (newName: string) => Promise<void>;
  onExclude: (itemName: string) => Promise<void>;
  isOpened: boolean;
  isData: boolean;
  localeData: localeItemModel;
  colorPallet: ColorPalletModel;
};

export type OpenCompactProps = {
  name?: string;
  data?: localeItemModel;
}

export type ColorPalletModel = PalletModel;
