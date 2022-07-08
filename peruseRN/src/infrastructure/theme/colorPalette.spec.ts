import { lightColorPalette } from './colorPalette';

describe('ColorPalette', () => {
  it('should create a color palette with custom colors', () => {
    expect(lightColorPalette).toBeDefined();
    expect(lightColorPalette).toMatchSnapshot();
  });
});
