import { DefaultTheme } from 'styled-components';

import { colors } from './colors';

const defaultTheme: DefaultTheme = {
  title: 'default',

  colors: {
    primary: colors.primary,
    attention: colors.attention,
    blueSky: colors.suaveBlue,
    lowGray: colors.lowGray,
    mediumGray: colors.mediumGray,
    lowBlue: colors.lowBlue,
  },
};

export { defaultTheme };
