import { Color } from '../typings/colors';

export const lightColorPalette: Color = {
  brand: {
    primary: '#DB4818',
    muted: '#565656',
  },
  ui: {
    primary: '#FF6721',
    secondary: '#CCCCCC',
    tertiary: '#565656',
    disabled: '#999999',
    error: '#D0421B',
    success: '#138000',
  },
  bg: {
    primary: '#FFFFFF',
    secondary: '#F1F1F1',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#9E9E9E',
    disabled: '#999999',
    error: '#D0421B',
    success: '#138000',
  },
};

export const darkColorPalette: Color = {
  ...lightColorPalette,
};
