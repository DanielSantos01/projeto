/* eslint-disable no-unused-vars */
export type HomeProps = {
  route: RouteProps;
};

type RouteProps = {
  params: any;
};

export type MainProps = {
  items: any;
  extraData: number;
  viewLocaleWeather: (item: any) => void;
  editLocaleName: (item: any) => void;
  onTryToExclude: (item: any) => () => void;
  onOpenLocaleSearcher: () => void;
};

export type LocaleItemType = {
  isModified?: boolean;
  lat: number;
  lon: number;
  localeName: string;
  key: string;
}
