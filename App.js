//importaçẽos necessárias para o funcionamento do app
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from './telas/Search';
import Home from './telas/Home';
import Data from './telas/Data';
import Register from './telas/Register';

//cria a pilha de navegação, permitindo navegar entre as telas do app
const Stack = createStackNavigator();

//componente representativo do app
const App = () => {
  return (
    <>
      <NavigationContainer theme={{colors: {
          card: 'rgba(0, 120, 255, .83)',
          background: 'white',
          text: 'white',}
        }}>
        
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Search' component={Search} />
          <Stack.Screen name='Data' component={Data} />
          <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
        <StatusBar barStyle='dark-content' backgroundColor='rgba(0, 120, 255, .87)'/>

      </NavigationContainer>
    </>
  );
};

export default App;
