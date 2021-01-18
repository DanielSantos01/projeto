import { colors } from '../../styles/theme/colors';
import { PalletModel } from './localGeneric';

export const handleHourPallet = (hour: number): PalletModel => {
  if (hour >= 18 || hour < 6) {
    return {
      ballColor: colors.mediumGray,
      titleColor: colors.lowGray,
      containerColor: colors.nightBlue,
    };
  }
  return {
    ballColor: 'yellow',
    titleColor: colors.lowGray,
    containerColor: '#73d8ee',
  };
};
