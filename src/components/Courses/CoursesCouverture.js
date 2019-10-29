import React, { Component } from 'react';
import{Actions} from 'react-native-router-flux'
import { TextField } from 'react-native-material-textfield';
import CustomImageText from '../CustomImageText';


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
 Image,
} from 'react-native';
export default class CoursesCouverture extends React.Component{
    render(){
        return(
            <ImageBackground
                source={require('../../img/CouvertureCode1.jpg')} 
                style={styles.banner}>
                 <CustomImageText 
                        />
              
                </ImageBackground>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    banner:{
        width:'100%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center',
    },
    
})