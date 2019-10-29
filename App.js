
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/pages/loginpage';
import AboutUs from './src/pages/AboutUs';
import Logo from './src/components/Logo';
import Routes from './src/Routes';


export default class App extends React.Component{
  render() {
    return (
      <Routes/>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    backgroundColor:'#455a64',
    flex:1, //Bacground
    alignItems:'center',
    justifyContent:'center',
  }
   
 });
