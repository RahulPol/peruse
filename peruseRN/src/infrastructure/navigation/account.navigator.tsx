import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AccountScreen } from '../../features/account/screens/account.screen';

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
};

// NOTE
// There are two types of stack navigators.
// The first is the native stack navigator, https://reactnavigation.org/docs/native-stack-navigator
// and the second the stack navigator, https://reactnavigation.org/docs/stack-navigator
// The difference is that the stack navigator is more configurable than the native stack navigator.
