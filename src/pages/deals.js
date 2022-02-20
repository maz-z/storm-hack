import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Deals = ({navigation}) => {
    return(
        <SafeAreaView>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <View>
                    <Text>Deals yo</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Deals;