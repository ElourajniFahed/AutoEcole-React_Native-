
import CustomImageText from '../components/CustomImageText';

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
 Image,
} from 'react-native';
export default class CustomImage extends React.Component{
    render(){
        return(
            <ImageBackground source ={this.props.imageSource}
            style={styles.image}>
                <CustomImageText
                    header={this.props.header}
                    paragraph={this.props.paragraph}
                
                />
                
            
            </ImageBackground>
        )
    }
}
const styles=StyleSheet.create({
    image:{
       width:'100%',
       alignItems:'center',
       justifyContent:'center', 
       height:200,

    },
}
)