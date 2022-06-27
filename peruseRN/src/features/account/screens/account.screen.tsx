import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import { GoogleButton } from '../components/account.style';

export const AccountScreen = () => {
  const theme = useTheme();

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* @ts-ignore - known issue - https://github.com/callstack/react-native-paper/issues/3223 */}
        <Text style={{ fontFamily: theme.fonts.bold.fontFamily }}>
          Hello world
        </Text>
        <GoogleButton icon="google" mode="contained">
          Sign in with Google
        </GoogleButton>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
