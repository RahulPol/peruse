import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

import { AccountNavigator } from './account.navigator';

jest.mock('../../features/account/screens/account.screen', () => ({
  AccountScreen: () => {
    const MockName = 'account screen mock';
    // @ts-ignore
    return <MockName testID="mock-account-screen" />;
  },
}));

describe('<AccountNavigator>', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(
      <NavigationContainer>
        <AccountNavigator />
      </NavigationContainer>
    );

    expect(toJSON).toMatchSnapshot();
  });
});
