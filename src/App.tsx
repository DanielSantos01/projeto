import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import Toast from 'react-native-toast-message';

import { genericSuccessNonification } from './utils';
import Loading from './components/Loading';
import { navigationRef } from './services/HandleNavigation';
import AppRoutes from './routes';
import Theme from './styles/theme';

const App: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
    genericSuccessNonification('Bem vindo de volta!', 'Isso fortalece o clima entre nós :D');
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
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default App;
