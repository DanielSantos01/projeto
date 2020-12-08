import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './routes/app.routes';
import Theme from './theme';

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer
        theme={
          {
            colors: {
              card: Theme.colors.primary,
              background: 'white',
              text: 'white',
            }
          }
      }>
        <AppRoutes />
        <StatusBar barStyle='dark-content' backgroundColor={Theme.colors.primary}/>
      </NavigationContainer>
    </>
  );
};

export default App;
