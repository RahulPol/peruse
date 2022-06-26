import { fontConfig } from './fonts';

describe('fontConfig', () => {
  it('should have both ios and android font config', () => {
    expect(fontConfig).toHaveProperty('ios');
    expect(fontConfig).toHaveProperty('android');
  });

  it('should have custom property bold on both ios and android', () => {
    expect(fontConfig.ios).toHaveProperty('bold');
    expect(fontConfig.android).toHaveProperty('bold');
  });
});
