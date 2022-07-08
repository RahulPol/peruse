import 'jest-styled-components';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme as theme } from '../../../infrastructure/theme';
import { useAuth } from '../../../services/authentication/authentication.context';
import { AccountLogin } from './account-login.component';

jest.mock('../../../services/authentication/authentication.context');
const mockLogin = jest.fn();

// the following resolution wont work if you enable jest useFakeTimers
const flushMicrotasksQueue = () =>
  new Promise((resolve) => setImmediate(resolve));

describe('<AccountLogin>', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    (useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
      isLoading: false,
      error: '',
    });
  });

  it('should render default elements', async () => {
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <AccountLogin />
      </ThemeProvider>
    );

    await flushMicrotasksQueue();

    expect(getByPlaceholderText('Email')).toBeDefined();
    expect(getByPlaceholderText('Password')).toBeDefined();
    expect(getByText('Sign In')).toBeDefined();
    expect(getByText('OR')).toBeDefined();
    expect(getByText('Sign in with Google')).toBeDefined();
  });

  it('should validate required fields when signInButton clicked', async () => {
    const { getByText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <AccountLogin />
      </ThemeProvider>
    );

    await act(() => fireEvent.press(getByText('Sign In')));

    expect(queryByText('Email is required')).toBeDefined();
    expect(queryByText('Password is required')).toBeDefined();
  });

  it('should validate email field when signInButton clicked', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <AccountLogin />
      </ThemeProvider>
    );

    fireEvent.changeText(getByPlaceholderText('Email'), 'invalid-email');

    await act(() => fireEvent.press(getByText('Sign In')));

    expect(queryByText('Invalid email')).toBeDefined();
  });

  it('should validate password field when signInButton clicked', async () => {
    const { getByPlaceholderText, getByText, queryByText /*, debug */ } =
      render(
        <ThemeProvider theme={theme}>
          <AccountLogin />
        </ThemeProvider>
      );

    fireEvent.changeText(getByPlaceholderText('Password'), 'wrong');
    await act(() => fireEvent.press(getByText('Sign In')));

    expect(queryByText('Password must be at least 6 characters')).toBeDefined();
    // debug();
  });

  it('should handle valid submission', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider theme={theme}>
        <AccountLogin />
      </ThemeProvider>
    );

    fireEvent.changeText(getByPlaceholderText('Email'), 'valid@valid.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'valid@123');

    fireEvent.press(getByText('Sign In'));

    await waitFor(() => expect(mockLogin).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(mockLogin).toHaveBeenCalledWith('valid@valid.com', 'valid@123')
    );
  });

  it('should raise error when login fails', async () => {
    (useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
      isLoading: false,
      error: 'mock error',
    });
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider theme={theme}>
        <AccountLogin />
      </ThemeProvider>
    );

    fireEvent.changeText(getByPlaceholderText('Email'), 'valid@valid.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'wrong_password');

    fireEvent.press(getByText('Sign In'));

    await waitFor(() => expect(mockLogin).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getByText('mock error')).toBeDefined());
  });
});
