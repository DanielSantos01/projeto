/* eslint-disable no-unused-vars */
import { localeItemModel } from '../../../modules/shared/data/protocols';

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
};

export type OpenCompactProps = {
  name?: string;
  data?: localeItemModel;
}

export type LocaleItemType = {
  isModified?: boolean;
  lat: number;
  lon: number;
  localeName: string;
  key: string;
}
