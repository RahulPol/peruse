import { cleanup, render } from '@testing-library/react-native';

import App from './App';
import { useResourceLoader } from './src/infrastructure/loader/useResourceLoader';

jest.doMock('./src/components/utility/styled-view.component', () => {
  const MockComponent = () => <div />;
  return MockComponent;
});

jest.mock('./src/infrastructure/navigation', () => ({
  Navigation: () => {
    const MockName = 'navigation mock';
    // @ts-ignore
    return <MockName testID="mock-navigation" />;
  },
}));

jest.mock('./src/infrastructure/loader/useResourceLoader');

afterEach(() => cleanup());

describe('<App>', () => {
  it('should render when fonts are loaded', () => {
    (useResourceLoader as jest.Mock).mockReturnValueOnce({
      appIsReady: true,
      errorInLoading: false,
      onLayoutRootView: jest.fn(),
    });

    const { toJSON } = render(<App />);

    expect(toJSON()).toBeDefined();
  });

  it('should not render when fonts are not loaded', () => {
    (useResourceLoader as jest.Mock).mockReturnValueOnce({
      appIsReady: false,
      errorInLoading: true,
      onLayoutRootView: jest.fn(),
    });
    const { toJSON } = render(<App />);

    expect(toJSON()).toEqual(null);
  });
});
