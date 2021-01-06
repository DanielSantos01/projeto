import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../screens/Search';
import Home from '../screens/Home';
import Data from '../screens/Data';
import Register from '../screens/Register';
import Edit from '../screens/Edit';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Data" component={Data} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  </>
);

export default Routes;
