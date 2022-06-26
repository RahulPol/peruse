import { customColorPalette } from './colorPalette';
import { fontConfig } from './fonts';
import { theme } from './index';
import { space } from './spacing';

describe('Theme', () => {
  describe('Theme.colors', () => {
    it('should contain custom color pallet', () => {
      expect(theme).toHaveProperty('colors');
      expect(theme.colors).toEqual(expect.objectContaining(customColorPalette));
    });
  });

  describe('Theme.fonts', () => {
    it('should match font config', () => {
      expect(theme).toHaveProperty('fonts');
      expect(theme.fonts).toMatchObject(fontConfig.android);
    });
  });

  describe('Theme.space', () => {
    it('should match space config', () => {
      expect(theme).toHaveProperty('space');
      expect(theme.space).toMatchObject(space);
    });
  });
});
