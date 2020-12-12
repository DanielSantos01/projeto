import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './src/services/HandleNavigation';
import AppRoutes from './routes';
import Theme from './theme';

const App: React.FC = () => (
  <>
    <NavigationContainer
      ref={navigationRef}
      theme={
          {
            colors: {
              card: Theme.colors.primary,
              background: 'white',
              text: 'white',
            },
          }
      }
    >
      <AppRoutes />
      <StatusBar barStyle="dark-content" backgroundColor={Theme.colors.primary} />
    </NavigationContainer>
  </>
);

export default App;
