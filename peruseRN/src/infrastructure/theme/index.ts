import {
  MD3LightTheme as DefaultTheme,
  configureFonts,
} from 'react-native-paper';

import { Spacing } from '../typings/spacing';
import { customColorPalette } from './colorPalette';
import { fontConfig } from './fonts';
import { space } from './spacing';

declare global {
  namespace ReactNativePaper {
    interface Theme {
      space: Spacing;
    }
    interface ThemeFonts {
      bold: ThemeFont;
    }
  }
}

// For now using the default theme colors
// TODO: Use different colors for theme.
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...customColorPalette,
  },
  fonts: configureFonts(fontConfig),
  space,
};
