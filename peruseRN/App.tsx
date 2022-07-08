import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import StyledView from './src/components/utility/styled-view.component';
import { useResourceLoader } from './src/infrastructure/loader/useResourceLoader';
import { Navigation } from './src/infrastructure/navigation';
import { lightTheme as theme } from './src/infrastructure/theme';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

export default function App() {
  const { appIsReady, onLayoutRootView } = useResourceLoader();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <StyledView onLayout={onLayoutRootView}>
            <Navigation />
          </StyledView>
        </AuthenticationContextProvider>

        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
