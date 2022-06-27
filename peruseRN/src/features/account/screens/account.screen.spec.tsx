import { render } from '@testing-library/react-native';

import { AccountScreen } from './account.screen';

jest.mock('react-native-paper', () => ({
  ...jest.requireActual('react-native-paper'),
  useTheme: jest.fn().mockImplementation(() => ({
    fonts: { bold: { fontFamily: 'randomFont' } },
  })),
}));

describe('<AccountScreen>', () => {
  it('should render default elements', () => {
    const { getByText } = render(<AccountScreen />);

    expect(getByText('Hello world')).toBeDefined();
    expect(getByText('Sign in with Google')).toBeDefined();
  });
});
