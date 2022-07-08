import { DefaultTheme } from 'styled-components/native';

import { darkColorPalette, lightColorPalette } from './colorPalette';
import { elevations } from './elevations';
import { fontSizes, fontWeights, fonts } from './fonts';
import { lineHeights, space } from './spacing';

export const lightTheme: DefaultTheme = {
  colors: lightColorPalette,
  elevations,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  colors: darkColorPalette,
};
