/* eslint-disable no-unused-vars */
import { PlaceModel } from '../../../modules/shared/data/protocols';

export interface PlaceCardProps {
  place: PlaceModel;
  openCompact: (props: OpenCompactProps) => void;
  onExclude: (placeName: string) => Promise<void>;
}

export interface MainProps {
  name: string;
  openWeatherCompact: () => void;
  openNominationCompact: () => void;
  onTryToRemovePlace: () => void;
}

export type OpenCompactProps = {
  name?: string;
  data?: PlaceModel;
}
