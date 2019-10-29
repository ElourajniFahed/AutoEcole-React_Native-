import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
export default class Logo extends  React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image 
                    source={require('../img/logoauto.png')} 
                    style={{width: 100, height:100}}
                 />
                 <Text style={styles.logotext}>
                     Welcom To AutoEocle
                 </Text>
            </View>


        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1, //Bacground
        alignItems:'center',
        justifyContent:'flex-end'
    },
    logotext:{
        color:'rgba(255,255,255,0.7)',
        fontSize:18,
        marginVertical:15
    }
});

