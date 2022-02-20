/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './src/pages/home';
import Deals from './src/pages/deals';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                headerShown: false
            }} initialRouteName="Home">
        <Stack.Screen name = "Home" component = {Home}/>
        <Stack.Screen name = "Deals" component = {Deals}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;
