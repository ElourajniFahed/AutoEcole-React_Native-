 import React, { Component } from 'react';
 import{Actions} from 'react-native-router-flux'
 import { TextField } from 'react-native-material-textfield';

import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Logo from '../components/Logo';
import AboutUs from './AboutUs';
export default class Login extends  React.Component{
    nav_aboutus(){
    Actions.Profil() ;    }
   
    render(){
        return(
            <ImageBackground source={require('../img/bc.jpg')} style={styles.backdes}>
<View style={styles.container}>
                <Logo/>
                <View style={styles.content}>
                    <View style={styles.inputcontainer}>
                    <TextInput underlineColorAndroid='transparent' style={styles.input} placeholder='Login'/>
                    <TextInput underlineColorAndroid='transparent' secureTextEntry={true} style={styles.input} placeholder='Password'/>
                    <TouchableOpacity style={styles.buttonopacity}onPress={this.nav_aboutus}>
                        <Text style={styles.buttontext}>
                                SignIn
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.info}>
                    <Text style={styles.learn}>Learn Things About us </Text>
                    <TouchableOpacity>
                    <Text style={styles.Clickhere} onPress={this.nav_aboutus}>Click here </Text>
                    </TouchableOpacity>
                    </View>

                    
                    </View>

                </View>

                  



                <View style={styles.container}>
                    <Text style={styles.learn}> </Text>
                    <TouchableOpacity>
                        <Text style={styles.Clickhere} onPress={this.nav_aboutus}></Text>
                    </TouchableOpacity>
                    </View>
</View>
            
            </ImageBackground>

        )
    }
}

const styles=StyleSheet.create({
    container :{
        flex:1, //Bacground
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1,
    },
    info:{
        alignItems:'center'


    },
    backdes:{
        flex:1,
        alignSelf:'stretch',
        width:100,
        justifyContent:'center'

    },
    inputcontainer:{
        margin:20,
        marginBottom:0,
        padding:20,
        paddingBottom:10,
        alignSelf:'stretch',
        borderWidth:1,
        borderColor:'#fff',
        backgroundColor:'rgba(255,255,255,0.2)'
    },
    input:{
        fontSize:16,
        height:40,
        padding:10,
        marginBottom:10,
        backgroundColor:'rgba(255,255,255,1)',
        width:300  ,
        borderColor: 'transparent' },
Backgroundimg:{
        flex:1,
        width:null,
        alignSelf:'stretch',

    },
    learn:{
        color:'rgba(255,255,255,0.7)',

    },
    backdes:{
        flex:1,
        width:null,


    },
    Clickhere:{
        fontSize:20,
        fontWeight:'500'

    },
    textinputdesign:{
        backgroundColor:'#1c313a',
        width:300,
        borderRadius:25,
        paddingHorizontal:16,
        marginVertical:20,
        fontSize:16,
        color:'#ffffff',
        justifyContent:'center'

    },
    textFielddesign:{        
        width:300,
        borderRadius:25,
        paddingHorizontal:16,
        marginVertical:20,
        fontSize:16,
    },
    buttonopacity:{
        width:300,
        backgroundColor:'#1c313a',
        marginVertical:10,
        paddingVertical:12

    },
    buttontext:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        backgroundColor:'#1c313a',
        textAlign:'center'
    }


});
