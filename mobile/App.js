import React from 'react';
import {
  useFonts,
  BalooChettan2_400Regular,
  BalooChettan2_600SemiBold,
  BalooChettan2_700Bold,
} from '@expo-google-fonts/baloo-chettan-2';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import Main from './src';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    BalooChettan2_400Regular,
    BalooChettan2_600SemiBold,
    BalooChettan2_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
