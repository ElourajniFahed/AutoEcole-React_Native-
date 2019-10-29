import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';
export default class AboutUs extends  React.Component{
    go_to_login(){
        Actions.Login();
    }
    render(){
        return(
            <View style={styles.container}>
            <TouchableOpacity onPres={this.go_to_login}>
                <Text onPress={this.go_to_login}>About Us</Text>

                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container :{
        backgroundColor:'#455a64',
        flex:1, //Bacground
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1,
    }})