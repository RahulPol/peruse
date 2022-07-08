import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme as theme } from '../../../infrastructure/theme';
import { AccountScreen } from './account.screen';

// jest.mock('react-native-paper', () => ({
//   ...jest.requireActual('react-native-paper'),
//   useTheme: jest.fn().mockImplementation(() => ({
//     fonts: { bold: { fontFamily: 'randomFont' } },
//   })),
// }));

jest.mock('../components/account-core.component', () => ({
  AccountCore: () => {
    const MockName = 'account core mock';
    // @ts-ignore
    return <MockName testID="mock-account-core" />;
  },
}));

describe('<AccountScreen>', () => {
  it('should render default elements', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AccountScreen />
      </ThemeProvider>
    );

    expect(getByText('Peruse')).toBeDefined();
  });
});
