import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profiles from '../screens/Profiles';
import Home from '../screens/Home';
import Edit from '../screens/Edit';
import Add from '../screens/Add';

const Stack = createNativeStackNavigator();
const Navegation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Add">
       <Stack.Screen name="Profiles" component={Profiles} />
       <Stack.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
       <Stack.Screen name="Edit" component={Edit} options={{ title: 'Editar Tareas' }}/>
       <Stack.Screen name="Add" component={Add}options={{ title: 'Agregar Usuarios' }} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navegation

const styles = StyleSheet.create({

})