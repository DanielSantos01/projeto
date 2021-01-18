import { possibleDesc } from './localGeneric';

export const handleColor = (description: string) => {
  switch (description) {
    case possibleDesc.CLEAR_SKY:
      return '#f4f11c';
    case possibleDesc.BROKEN_CLOUDS:
      return '#2f0595';
    case possibleDesc.LIGHT_RAIN:
      return '#9063ff';
    case possibleDesc.OVERCAST_CLOUDS:
      return '#c097fc';
    case possibleDesc.MODERATRE_RAIN:
      return '#4362b3';
    case possibleDesc.SCATTERED_CLOUDS:
      return '#76a4a6';
    default:
      return '#052e7e';
  };
};
