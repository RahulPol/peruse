import { NavigationContainer } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import { useAuth } from '../../services/authentication/authentication.context';
import { AccountNavigator } from './account.navigator';

export const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();

  const demoView = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> I am logged in</Text>
      <TouchableOpacity onPress={() => logout()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <NavigationContainer>
      {isAuthenticated ? demoView() : <AccountNavigator />}
    </NavigationContainer>
  );
};
