import { customColorPalette } from './colorPalette';

describe('ColorPalette', () => {
  it('should create a color palette with custom colors', () => {
    expect(customColorPalette).toBeDefined();
    expect(customColorPalette).toMatchObject({
      primary: '#FF6721',
      onPrimary: '#ffffff',
      secondary: '#9e9e9e',
      tertiary: '#565656',
    });
  });
});
