
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';
import Headers from '../components/Acount/Headers';
import Bar from '../components/Acount/Bar';
import AcountContent from '../components/Acount/AcountContent';

export default class Acount extends  React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Headers/>
            <Bar/>
            <AcountContent/>
            </View>
        )}
    }

    const styles=StyleSheet.create({
        container :{
            backgroundColor:'#fff',
            flex:1, //Bacground
    
        }})