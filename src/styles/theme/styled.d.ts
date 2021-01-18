import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      attention: string;
      blueSky: string;
      lowGray: string;
      mediumGray: string;
      lowBlue: string;
    };
  }
}
