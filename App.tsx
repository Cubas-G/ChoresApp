import React from 'react'
// import Navegation from './navegation/Navegation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profiles from './screens/Profiles';
import Home from './screens/Home';
import Edit from './screens/Edit';
import Add from './screens/Add';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Profiles" component={Profiles} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Edit" component={Edit} />
      <Tab.Screen name="Add" component={Add} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

