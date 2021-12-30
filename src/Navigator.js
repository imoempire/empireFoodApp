import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Welcome from "../src/Screen/Welcome";
import SignIn from "../src/Screen/SignIn";
import Home from '../src/Screen/Home';

const Stack = createStackNavigator();

const Navigator = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='welcome' component={Welcome}/>
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='Home' component={Home} />
         </Stack.Navigator>
      </NavigationContainer>
   )
} 

export default Navigator

const styles = StyleSheet.create({})
