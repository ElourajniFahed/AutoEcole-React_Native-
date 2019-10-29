import{Actions} from 'react-native-router-flux'
import { TextField } from 'react-native-material-textfield';
import DefaultHeader from '../components/Default/DefaultHeader'
import CoursesCouverture from '../components/Courses/CoursesCouverture'
import CoursesContent from '../components/Courses/CoursesContent'

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
 ImageBackground,
} from 'react-native';
export default class Courses extends React.Component{
    render(){

        return(
            <View style={styles.container}>
            <DefaultHeader/>
            <CoursesContent/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    }
})