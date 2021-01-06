import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { navigationRef } from './services/HandleNavigation';
import AppRoutes from './routes';
import Theme from './styles/theme';

const App: React.FC = () => (
  <NavigationContainer ref={navigationRef}>
    <ThemeProvider theme={Theme.defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
    <StatusBar barStyle="dark-content" backgroundColor={Theme.colors.primary} />
  </NavigationContainer>
);

export default App;
