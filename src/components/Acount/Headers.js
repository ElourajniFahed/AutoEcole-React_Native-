
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,Image,
  ImageBackground,
} from 'react-native';
export default class Headers extends  React.Component{
    render(){
        return(

            <ImageBackground style={styles.headerBackground} source={require('../../img/1.jpg')}>
                <View style={styles.header}>
                    <View style={styles.profilpicWrap}>
                        <Image style={styles.profilpic} source={require('../../img/pr.jpg')}>

                        </Image>

                    </View>
                    <Text style={styles.name}> Name </Text>
                    <TouchableOpacity>
                    <Text style={styles.pos}> View Profile</Text>
                    </TouchableOpacity>

                </View>
   
   
   
   
             </ImageBackground>
        )
    }
}

const styles=StyleSheet.create({
    container :{
        backgroundColor:'#455a64',
        flex:1, //Bacground

    },
    headerBackground:{
        flex:1,
        width:null,
        alignSelf:'stretch',
    },

    header:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        backgroundColor:'#1c313a'
    },
    profilpicWrap:{
        width:100,
        height:100,
        borderRadius:100,
        borderWidth:16,
        backgroundColor:'rgba(0,0,0,0.5)',


    },
    profilpic:{
        flex:1,
        width:null,
        alignSelf:'stretch',
        borderRadius:100,
        borderWidth:4,
        backgroundColor:'rgba(0,0,0,0.5)',
       


    },
    name:{
        marginTop:20,
        fontSize:16,
        color:'#fff',
        fontWeight:'bold',


    },
    pos:{
        fontSize:16,
        color:'#0394c0',
        fontWeight:'300',
        fontStyle:'italic'

    }

})