import React from 'react';

import { getUserAnswer } from '../../utils';
import { PlaceCardProps } from './localGeneric';
import Main from './placeCard';

const PlaceCard: React.FC<PlaceCardProps> = ({
  place,
  openCompact,
  onExclude,
}) => {
  const openWeatherCompact = () => {
    openCompact({ data: place });
  };

  const openNominationCompact = () => {
    openCompact({ name: place.name });
  };

  const onTryToRemovePlace = () => {
    getUserAnswer(place.name, () => onExclude(place.name));
  };

  return (
    <Main
      name={place.name}
      openWeatherCompact={openWeatherCompact}
      openNominationCompact={openNominationCompact}
      onTryToRemovePlace={onTryToRemovePlace}
    />
  );
};

export default PlaceCard;
