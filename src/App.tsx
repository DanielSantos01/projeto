import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { navigationRef } from './services/HandleNavigation';
import AppRoutes from './routes';
import Theme from './styles/theme';

const App: React.FC = () => (
  <NavigationContainer ref={navigationRef}>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" />
    <ThemeProvider theme={Theme.defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
