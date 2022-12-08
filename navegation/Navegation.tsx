import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profiles from '../screens/Profiles';

const Stack = createNativeStackNavigator();
const Navegation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name="Profiles" component={Profiles} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navegation

const styles = StyleSheet.create({
    
})