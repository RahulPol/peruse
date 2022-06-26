import { render, screen } from '@testing-library/react-native';
import 'jest-styled-components';

import { AccountScreen } from './account.screen';

jest.mock('react-native-paper', () => ({
  useTheme: jest.fn().mockImplementation(() => ({
    fonts: { bold: { fontFamily: 'randomFont' } },
  })),
}));

describe('<AccountScreen>', () => {
  it('should render default elements', () => {
    const { getByText } = render(<AccountScreen />);

    expect(getByText('Hello world')).toBeDefined();
  });
});
