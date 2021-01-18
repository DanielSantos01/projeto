/* eslint-disable no-unused-vars */
import { localeItemModel } from '../../../modules/shared/data/protocols';

export interface LocaleItemProps {
  item: localeItemModel;
  openCompact: (props: OpenCompactProps) => void;
  onExclude: (itemName: string) => Promise<void>;
}

export interface MainProps {
  name: string;
  openDataCompact: () => void;
  openRenameCompact: () => void;
  removeItem: () => Promise<void>;
}

export type OpenCompactProps = {
  name?: string;
  data?: localeItemModel;
}
