/* eslint-disable no-unused-vars */
import { PlaceModel } from '../../../../../modules/shared/data/protocols';
import { OpenCompactProps } from '../../../localGeneric';

export interface PlacesListProps {
  places: PlaceModel[];
  openCompact: (props: OpenCompactProps) => void;
  onExclude: (placeName: string) => Promise<void>;
}
