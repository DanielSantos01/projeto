import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import Loading from './components/Loading';
import { navigationRef } from './services/HandleNavigation';
import AppRoutes from './routes';
import Theme from './styles/theme';

const App: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (isLoading) {
    return (
      <ThemeProvider theme={Theme.defaultTheme}>
        <Loading />
      </ThemeProvider>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeProvider theme={Theme.defaultTheme}>
        <AppRoutes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
