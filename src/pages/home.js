import React, { useReducer } from 'react';
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
import { back, deso, gas,cineplex, church, nike, coco} from '../assets/svg';

const Home = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <View style = {styles.header}>
                <View style = {{flexDirection: 'row', alignItems:'center', marginBottom: 10}}>
                {/* <SvgXml xml={backGround} width={50} height={50}/> */}
                    <View style={{marginRight:140, marginLeft: 10}}>
                        <SvgXml xml={back} width={15} height={15} />
                    </View>
                    <Text style={{fontSize:20, color: 'white'}}>Deals</Text>
                </View>
            </View>
            <View style = {styles.points}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: 'grey'}}>YOU'VE SAVED</Text>
                    <View style={{marginTop:15}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}} >$139.90</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style = {{color:'grey'}}>TOTAL POINTS</Text>
                    <View style={{marginTop:15}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}} >8200</Text>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', backgroundColor:'grey', marginBottom:3}}></View>
            <View style = {styles.redeem}>
                <View style ={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:15, marginTop: 15}}>
                    <Text>Eligible Prize</Text>
                    <Text style = {{color:'grey'}}>View All {`>`}</Text>
                </View>
                <ScrollView horizontal={true} style={{flexDirection:'row'}} >

                    <View style= {styles.shadow}>
                        <View>
                            <SvgXml xml={deso}/>
                        </View>

                        <View style= {{justifyContent:'flex-start', marginLeft: 5, marginTop:5}}>
                            <Text style={{fontWeight:'bold'}}>Deso $30</Text>
                            <View style= {{marginTop:10}}>
                                <Text style={{fontSize:9, color:'#5C5C5C'}}>5000 points</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=> {navigation.navigate('Deals')}}>
                            <View style={{width: '90%', height: '47%', justifyContent:'center', alignItems:'center', backgroundColor:'#273038', marginTop: 5, marginLeft:5}}>
                                <Text style = {{color:'white'}}>Redeem</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style= {styles.shadow}>
                        <View style= {{justifyContent:'center',alignItems:'center'}}>
                            <SvgXml xml={gas}/>
                        </View>

                        <View style= {{justifyContent:'flex-start', marginLeft: 5, marginTop:5}}>
                            <Text style={{fontWeight:'bold'}}>Gas $30</Text>
                            <View style= {{marginTop:10}}>
                                <Text style={{fontSize:9, color:'#5C5C5C'}}>5000 points</Text>
                            </View>
                        </View>
                        <View style={{width: '90%', height: '25%', justifyContent:'center', alignItems:'center', backgroundColor:'#273038', marginTop: 5, marginLeft:5}}>
                            <Text style = {{color:'white'}}>Redeem</Text>
                        </View>
                    </View>
                    <View style= {styles.shadow}>
                        <View style = {{marginTop: 15}}></View>
                        <View style= {{justifyContent:'center', alignItems:'center'}}>
                            
                            <SvgXml xml={cineplex}/>
                        </View>
                        <View style={{marginBottom: 11}}></View>
                        <View style= {{justifyContent:'flex-start', marginLeft: 5, marginTop:5}}>
                            <Text style={{fontWeight:'bold'}}>Cineplex $30</Text>
                            <View style= {{marginTop:10}}>
                                <Text style={{fontSize:9, color:'#5C5C5C'}}>5000 points</Text>
                            </View>
                        </View>
                        <View style={{width: '90%', height: '25%', justifyContent:'center', alignItems:'center', backgroundColor:'#273038', marginTop: 5, marginLeft:5}}>
                            <Text style = {{color:'white'}}>Redeem</Text>
                        </View>
                    </View>
                    <View style= {styles.shadow}>
                        <View style= {{backgroundColor:'black'}}>
                            <SvgXml xml={deso}/>
                        </View>

                        <View style= {{justifyContent:'flex-start', marginLeft: 5, marginTop:5}}>
                            <Text style={{fontWeight:'bold'}}>Deso $30</Text>
                            <View style= {{marginTop:10}}>
                                <Text style={{fontSize:9, color:'#5C5C5C'}}>5000 points</Text>
                            </View>
                        </View>
                        <View style={{width: '90%', height: '25%', justifyContent:'center', alignItems:'center', backgroundColor:'#273038', marginTop: 5, marginLeft:5}}>
                            <Text style = {{color:'white'}}>Redeem</Text>
                        </View>
                    </View>
                    <View style= {styles.shadow}>
                        <View style= {{backgroundColor:'black'}}>
                            <SvgXml xml={deso}/>
                        </View>

                        <View style= {{justifyContent:'flex-start', marginLeft: 5, marginTop:5}}>
                            <Text style={{fontWeight:'bold'}}>Deso $30</Text>
                            <View style= {{marginTop:10}}>
                                <Text style={{fontSize:9, color:'#5C5C5C'}}>5000 points</Text>
                            </View>
                        </View>
                        <View style={{width: '90%', height: '25%', justifyContent:'center', alignItems:'center', backgroundColor:'#273038', marginTop: 5, marginLeft:5}}>
                            <Text style = {{color:'white'}}>Redeem</Text>
                        </View>
                    </View>
                    <View>

                    </View>
                </ScrollView>
            </View>
            <View style={{flex:0.5, justifyContent:'center', marginLeft:16}}>
                <Text style={{fontSize:18}}>Discover Deals</Text>
            </View>
            <View style = {{flex:0.5,backgroundColor:'white', justifyContent:'center'}}>
                <View style = {{marginLeft:16}}>

                    <Text>Near Me</Text>
                </View>
            </View>
            <View style={{width: '100%', backgroundColor:'grey', marginBottom:3}}></View>
            <View style = {styles.coupon}>
                <ScrollView>
                    <View style = {{flexDirection:'row', width:'100%', height:100,alignItems:'flex-start', marginTop:10}}>
                        <View>
                            <SvgXml xml={church}/>
                        </View>
                        <View>
                            <View style={{marginTop:13}}>
                                <Text style={{fontSize:14}}>10% Off 4 Pieces Chicken Bundle</Text>
                                <Text style={{fontSize:13, color:'grey'}}>Church’s Texas Chicken</Text>
                            </View>
                            <View style ={{flexDirection:'row', marginTop:40, justifyContent:'space-between',alignItems:'flex-end'}}>
                                <Text style={{fontSize:10, color:'grey'}}>500m | Burnaby</Text>
                                
                                <Text style={{fontSize:13}}>Reward: 50 pts</Text>
                            </View>
                            
                        </View>
                        
                    </View>
                    <View style = {{marginTop:15, width:'100%', height:1, backgroundColor:'lightgrey'}}></View>

                    <View style = {{flexDirection:'row', width:'100%', height:100,alignItems:'flex-start', marginTop:10}}>
                        <View style={{marginRight:12}}>
                            <SvgXml xml={nike} width={135}/>
                        </View>
                        <View>
                            <View style={{marginTop:13}}>
                                <Text style={{fontSize:14}}>10% Off 4 Pieces Chicken Bundle</Text>
                                <Text style={{fontSize:13, color:'grey'}}>Church’s Texas Chicken</Text>
                            </View>
                            <View style ={{flexDirection:'row', marginTop:40, justifyContent:'space-between',alignItems:'flex-end'}}>
                                <Text style={{fontSize:10, color:'grey'}}>500m | Burnaby</Text>
                                
                                <Text style={{fontSize:13}}>Reward: 50 pts</Text>
                            </View>
                            
                        </View>
                        
                    </View>
                    <View style = {{marginTop:15, width:'100%', height:1, backgroundColor:'lightgrey'}}></View>

                    <View style = {{flexDirection:'row', width:'100%', height:100,alignItems:'flex-start', marginTop:10}}>
                        <View style={{justifyContent:'center'}}>
                            <SvgXml xml={coco}/>
                        </View>
                        <View>
                            <View style={{marginTop:13}}>
                                <Text style={{fontSize:14}}>10% Off 4 Pieces Chicken Bundle</Text>
                                <Text style={{fontSize:13, color:'grey'}}>Church’s Texas Chicken</Text>
                            </View>
                            <View style ={{flexDirection:'row', marginTop:40, justifyContent:'space-between',alignItems:'flex-end'}}>
                                <Text style={{fontSize:10, color:'grey'}}>500m | Burnaby</Text>
                                
                                <Text style={{fontSize:13}}>Reward: 50 pts</Text>
                            </View>
                            
                        </View>
                        
                    </View>
                    <View style = {{marginTop:15, width:'100%', height:1, backgroundColor:'lightgrey'}}></View>
                    
                </ScrollView>
                <View style={{marginBottom:10}}></View>
            </View>
        </View>

    )
}

export default Home;

const styles = StyleSheet.create({
    header: {
        width:'100%',
        height: '13%',
        backgroundColor: "#273038",
        alignItems: 'flex-start',
        justifyContent: "flex-end"
        // position:'absolute'
    },
    points: {
        flex:0.8,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    redeem:{
        flex: 2.1,
        backgroundColor:'white'
    },
    coupon:{
        flex: 3,
        backgroundColor:'white'
    },
    shadow:{
        shadowColor: '#171717',
        shadowOffset: {width: 4, height: 8},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor:'white', 
        height:150,
        width:108,
        marginHorizontal: 15, 
        marginTop:20,
    },
    shadow2:{
        shadowColor: '#171717',
        shadowOffset: {width:-4, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})
