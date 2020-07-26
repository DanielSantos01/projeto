import React from 'react';

import {StyleSheet, ScrollView, View, Text, StatusBar, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from './telas/Search';
import Home from './telas/Home';
import Data from './telas/Data';
import Register from './telas/Register';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer theme={{colors: {
        card: 'rgba(0, 120, 255, .83)',
        background: 'white',
        text: 'white',
      }}}>
        
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

const styles = StyleSheet.create({
  ground: {
    backgroundColor: 'rgba(0, 120, 255, .75)',
  },

  groundText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  }
});

export default App;
