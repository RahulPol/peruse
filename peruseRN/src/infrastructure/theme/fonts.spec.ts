import { fontSizes, fontWeights, fonts } from './fonts';

describe('fontConfig', () => {
  it('should match the snapshot', () => {
    expect(fonts).toMatchSnapshot();
    expect(fontWeights).toMatchSnapshot();
    expect(fontSizes).toMatchSnapshot();
  });
});
