import { lightColorPalette } from './colorPalette';
import { fonts } from './fonts';
import { lightTheme as theme } from './index';
import { space } from './spacing';

describe('Theme', () => {
  describe('Theme.colors', () => {
    it('should contain custom color pallet', () => {
      expect(theme).toHaveProperty('colors');
      expect(theme.colors).toEqual(expect.objectContaining(lightColorPalette));
    });
  });

  describe('Theme.fonts', () => {
    it('should match font config', () => {
      expect(theme).toHaveProperty('fonts');
      expect(theme.fonts).toMatchObject(fonts);
    });
  });

  describe('Theme.space', () => {
    it('should match space config', () => {
      expect(theme).toHaveProperty('space');
      expect(theme.space).toMatchObject(space);
    });
  });
});
