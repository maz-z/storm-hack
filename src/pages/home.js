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
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation}) => {
    return(
        <SafeAreaView>
            <View>
                <Text>Hello World!!!</Text>
                <TouchableOpacity onPress = {()=> {navigation.navigate('Deals')}}>
                    <View style = {{width: 70, height: 50, backgroundColor:'orange'}}>
                        <Text>press me</Text> 
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home;