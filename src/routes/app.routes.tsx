import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../screens/Search';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} mode="modal">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);

export default Routes;
