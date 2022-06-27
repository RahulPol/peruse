import { cleanup, render } from '@testing-library/react-native';

import App from './App';

jest.doMock('./src/components/utility/StyledView', () => {
  const MockComponent = () => <div />;
  return MockComponent;
});

jest.doMock('./src/features/account/screens/account.screen', () => ({
  AccountScreen: <div />,
}));

jest.mock('./src/infrastructure/loader/useResourceLoader', () => {
  return {
    useResourceLoader: jest
      .fn()
      .mockReturnValueOnce({
        appIsReady: true,
        errorInLoading: false,
        onLayoutRootView: jest.fn(),
      })
      .mockReturnValueOnce({
        appIsReady: false,
        errorInLoading: true,
        onLayoutRootView: jest.fn(),
      }),
  };
});

afterEach(() => cleanup());

describe('<App>', () => {
  it('should render when fonts are loaded', () => {
    const { toJSON } = render(<App />);

    expect(toJSON()).toBeDefined();
  });

  it('should not render when fonts are not loaded', () => {
    const { toJSON } = render(<App />);

    expect(toJSON()).toEqual(null);
  });
});
