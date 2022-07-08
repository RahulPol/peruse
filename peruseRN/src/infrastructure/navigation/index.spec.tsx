import { fireEvent, render } from '@testing-library/react-native';

import { useAuth } from '../../services/authentication/authentication.context';
import { Navigation } from './index';

const mockLogout = jest.fn();

jest.mock('../../services/authentication/authentication.context');

jest.mock('./account.navigator', () => ({
  AccountNavigator: () => {
    const MockName = 'account navigator mock';
    // @ts-ignore
    return <MockName testID="mock-navigator-core" />;
  },
}));

describe('<Navigation>', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      logout: mockLogout,
    });
  });
  it('should render demo view when user is authenticated', () => {
    const { getByText } = render(<Navigation />);

    expect(getByText('I am logged in')).toBeDefined();
  });

  it('should render account navigator when user is not authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      logout: mockLogout,
    });
    const { getByTestId } = render(<Navigation />);

    expect(getByTestId('mock-navigator-core')).toBeDefined();
  });

  it('should logout user when user clicks sign out', () => {
    const { getByText } = render(<Navigation />);

    fireEvent.press(getByText('Sign Out'));

    expect(mockLogout).toBeCalled();
  });
});
