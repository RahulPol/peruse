import 'jest-styled-components';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme as theme } from '../../../infrastructure/theme';
import { AccountCore } from './account-core.component';

jest.mock('./account-login.component', () => ({
  AccountLogin: () => {
    const MockName = 'account login mock';
    // @ts-ignore
    return <MockName testID="mock-login" />;
  },
}));
jest.mock('./account-register.component', () => ({
  AccountRegister: () => {
    const MockName = 'account register mock';
    // @ts-ignore
    return <MockName testID="mock-register" />;
  },
}));

describe('<AccountCore>', () => {
  it('should render default element', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AccountCore />
      </ThemeProvider>
    );

    const signInButton = getByText('Sign In');
    const signUpButton = getByText('Sign Up');
    const accountLogin = getByTestId('mock-login');

    expect(signInButton).toBeDefined();
    expect(signUpButton).toBeDefined();
    expect(accountLogin).toBeDefined();
  });

  it('should render account login when signInButton is clicked', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AccountCore />
      </ThemeProvider>
    );

    fireEvent.press(getByText('Sign In'));

    const accountLogin = getByTestId('mock-login');
    expect(accountLogin).toBeDefined();
  });

  it('should render account register when signUpButton is clicked', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AccountCore />
      </ThemeProvider>
    );

    fireEvent.press(getByText('Sign Up'));

    const accountRegister = getByTestId('mock-register');
    expect(accountRegister).toBeDefined();
  });
});
