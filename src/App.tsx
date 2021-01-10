import React from 'react';
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
  </NavigationContainer>
);

export default App;
