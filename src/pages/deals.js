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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Deals = ({navigation}) => {
    return(
        <SafeAreaView>
            <View>
                <Text>Deals yo</Text>
            </View>
        </SafeAreaView>
    )
}

export default Deals;