import 'jest-styled-components';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme as theme } from '../../../infrastructure/theme';
import { useAuth } from '../../../services/authentication/authentication.context';
import { AccountRegister } from './account-register.component';

jest.mock('../../../services/authentication/authentication.context');
const mockRegister = jest.fn();

const flushMicrotasksQueue = () =>
  new Promise((resolve) => setImmediate(resolve));

describe('<AccountRegister>', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    (useAuth as jest.Mock).mockReturnValue({
      register: mockRegister,
      isLoading: false,
      error: '',
    });
  });

  it('should render default elements', async () => {
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <AccountRegister />
      </ThemeProvider>
    );

    await flushMicrotasksQueue();

    expect(getByPlaceholderText('Email')).toBeDefined();
    expect(getByPlaceholderText('Password')).toBeDefined();
    expect(getByPlaceholderText('Confirm Password')).toBeDefined();
    expect(getByText('Sign Up')).toBeDefined();
  });

  it('should validate required fields when signUpButton is clicked', async () => {
    const { getByText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <AccountRegister />
      </ThemeProvider>
    );

    await act(() => fireEvent.press(getByText('Sign Up')));

    expect(queryByText('Email is required')).toBeDefined();
    expect(queryByText('Password is required')).toBeDefined();
    expect(queryByText('Confirmed Password is required')).toBeDefined();
  });

  it('should validate email field when signInButton clicked', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <AccountRegister />
      </ThemeProvider>
    );

    fireEvent.changeText(getByPlaceholderText('Email'), 'invalid-email');

    await act(() => fireEvent.press(getByText('Sign Up')));

    expect(queryByText('Invalid email')).toBeDefined();
  });

  it('should validate password field when signInButton clicked', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <AccountRegister />
      </ThemeProvider>
    );

    fireEvent.changeText(getByPlaceholderText('Password'), 'wrong');
    await act(() => fireEvent.press(getByText('Sign Up')));

    expect(queryByText('Password must be at least 6 characters')).toBeDefined();
  });

  it('should validate confirm password field when signInButton clicked', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <AccountRegister />
      </ThemeProvider>
    );

    fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'wrong');
    await act(() => fireEvent.press(getByText('Sign Up')));

    expect(
      queryByText('Confirmed Password must be at least 6 characters')
    ).toBeDefined();
  });

  it('should handle valid submission', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider theme={theme}>
        <AccountRegister />
      </ThemeProvider>
    );

    fireEvent.changeText(getByPlaceholderText('Email'), 'valid@valid.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'valid@123');
    fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'valid@123');

    fireEvent.press(getByText('Sign Up'));

    await waitFor(() => expect(mockRegister).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(mockRegister).toHaveBeenCalledWith(
        'valid@valid.com',
        'valid@123',
        'valid@123'
      )
    );
  });

  it('should raise error when register fails', async () => {
    (useAuth as jest.Mock).mockReturnValue({
      register: mockRegister,
      isLoading: false,
      error: 'mock error',
    });
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider theme={theme}>
        <AccountRegister />
      </ThemeProvider>
    );

    fireEvent.changeText(getByPlaceholderText('Email'), 'valid@valid.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'wrong_password');
    fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'valid@123');

    fireEvent.press(getByText('Sign Up'));

    await waitFor(() => expect(mockRegister).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getByText('mock error')).toBeDefined());
  });
});
