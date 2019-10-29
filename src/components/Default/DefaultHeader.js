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
 Image,
} from 'react-native';

export default class DefaultHeader extends React.Component{
  AutoEcole_Name="AutoEcole"

    render(){
        return(
            <View   style={styles.header}>
                <Image style={styles.imglogo}source={require('../../img/logoauto.png')} />
                <Text style={styles.textlogo}>{this.AutoEcole_Name}</Text>
                <TouchableOpacity >

                    <Image source={require('../../img/pr.jpg')} style={styles.imgprofile} />
                </TouchableOpacity>

            </View>

        )
    }
}
const styles=StyleSheet.create({
    header:{
        height:80,
        marginTop:2,
        backgroundColor:'#1c313a',
        flexDirection:'row',
        alignItems:'center',
       // justifyContent:'center',
        padding:20,
        borderBottomWidth:4,
        borderBottomColor:'#ccc',
    },
    imglogo:{    
        width:20,
        height:20,
    },
    imgprofile:{
        width:40,
        height:40,
        borderRadius:100,
        borderWidth:4,
        backgroundColor:'#1c313a',
        marginLeft:200,
        
    },
    textlogo:{
        fontSize:10,
        marginLeft:10,
        fontStyle:'italic',
        color:'#fff',
    }
})