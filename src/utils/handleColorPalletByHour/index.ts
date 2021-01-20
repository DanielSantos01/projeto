import { colors } from '../../styles/theme';
import { PalletModel } from './localGeneric';

export const handleColorPalletByHour = (hour: number): PalletModel => {
  if (hour >= 18 || hour < 6) {
    return {
      ballColor: colors.mediumGray,
      titleColor: colors.lowGray,
      containerColor: colors.nightBlue,
    };
  }
  return {
    ballColor: colors.sunrise,
    titleColor: colors.lowGray,
    containerColor: colors.dayBlue,
  };
};
