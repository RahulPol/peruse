import config from './app.config';

describe('app.config', () => {
  it('should match config snapshot', () => {
    expect(config).toMatchSnapshot();
  });
});
