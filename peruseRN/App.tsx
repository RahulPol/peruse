import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';

import StyledView from './src/components/utility/StyledView';
import { AccountScreen } from './src/features/account/screens/account.screen';
import { useResourceLoader } from './src/infrastructure/loader/useResourceLoader';
import { theme } from './src/infrastructure/theme';

export default function App() {
  const { appIsReady, onLayoutRootView } = useResourceLoader();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      {/* @ts-ignore - known issue - https://github.com/callstack/react-native-paper/issues/3223 */}
      <PaperProvider theme={theme}>
        <StyledView onLayout={onLayoutRootView}>
          <AccountScreen />
        </StyledView>

        <StatusBar style="auto" />
      </PaperProvider>
    </>
  );
}
