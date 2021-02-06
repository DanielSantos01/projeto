import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import Toast from 'react-native-toast-message';

import Loading from './components/Loading';
import AppRoutes from './routes';
import { defaultTheme } from './styles/theme';
import { genericSuccessNonification } from './utils';
import { navigationRef } from './services/HandleNavigation';

const App: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
    if (isLoading) return;
    genericSuccessNonification('Bem vindo de volta!', 'Isso fortalece o "clima" entre nós :D');
  }, 2000);

  if (isLoading) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Loading />
      </ThemeProvider>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
      </ThemeProvider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default App;
