import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../src/screens/Search';
import Home from '../src/screens/Home';
import Data from '../src/screens/Data';
import Register from '../src/screens/Register';
import Edit from '../src/screens/Edit';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Data" component={Data} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  </>
);

export default Routes;
