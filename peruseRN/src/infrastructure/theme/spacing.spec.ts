import { Spacing } from '../typings/spacing.js';
import { space } from './spacing';

describe('spacing', () => {
  it('should have type Spacing with valid spacing', () => {
    const validSpacing: Spacing = {
      none: '0px',
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '32px',
      xl: '64px',
    };
    expect(space).toMatchObject<Spacing>(validSpacing);
  });
});
