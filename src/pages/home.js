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
import { SvgFromXml, SvgXml } from 'react-native-svg';
import { back, deso} from '../assets/svg';

const Home = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <View style = {styles.header}>
                <View style = {{flexDirection: 'row', alignItems:'center', marginBottom: 5}}>
                    <View style={{marginRight:140, marginLeft: 10}}>
                        <SvgXml xml={back} width={15} height={15} />
                    </View>
                    <Text style={{fontSize:20, color: 'white'}}>Deals</Text>
                </View>
            </View>
            <View style = {styles.points}>
                
            </View>
            <View style = {styles.redeem}>
                <ScrollView horizontal={true} style={{flexDirection:'row'}} >
                    <View style= {{marginRight: 15}}>
                        <SvgXml xml={deso} width={140} height={140} />
                    </View>
                    <View style= {{marginRight: 15}}>
                        <SvgXml xml={deso} width={140} height={140} />
                    </View>
                    <View style= {{marginRight: 15}}>
                        <SvgXml xml={deso} width={140} height={140} />
                    </View>
                    <View style= {{marginRight: 15}}>
                        <SvgXml xml={deso} width={140} height={140} />
                    </View>
                </ScrollView>
            </View>
            <View style = {styles.coupon}>
                <TouchableOpacity onPress={()=> navigation.navigate('Deals')}>
                    <View style={{width:50, height:100, borderRadius: 5, backgroundColor: 'orange'}}>
                        <Text> Press ME</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Home;

const styles = StyleSheet.create({
    header: {
        width:'100%',
        height: '15%',
        backgroundColor: "#273038",
        alignItems: 'flex-start',
        justifyContent: "flex-end"
        // position:'absolute'
    },
    points: {
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    redeem:{
        flex: 1
    },
    coupon:{
        flex: 3
    }
})
