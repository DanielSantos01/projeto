/* eslint-disable no-unused-vars */
import { localeItemModel } from '../../../../../modules/shared/data/protocols';
import { OpenCompactProps } from '../../../localGeneric';

export interface LocaleListProps {
  items: localeItemModel[];
  openCompact: (props: OpenCompactProps) => void;
  onExclude: (itemName: string) => Promise<void>;
}
