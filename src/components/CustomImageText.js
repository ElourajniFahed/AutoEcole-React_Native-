
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
export default class CustomImageText extends React.Component{
    render(){
        let header=this.props.header ?
             <TouchableOpacity style={styles.container}><Text style={styles.overlayHeader}>{this.props.header}</Text>
             </TouchableOpacity>
        
        : null;
        let paragraph=this.props.paragraph ?
        <Text style={styles.overlayText}>{this.props.paragraph}</Text>
        :null;
        return(
            <View style={styles.vie}>
                {header}
                {paragraph}

            </View>
        );
    }
}
const styles=StyleSheet.create({
    vie:{},
    container:{
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.0)',
    },

   overlayHeader:{
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.6,
    shadowRadius:3,
    elevation:1,
    alignSelf:'center',
    fontSize:20,
    color:'#292929',
    fontStyle:'italic',
    textAlign:'center',
    padding:8,
    marginTop:8,
   // backgroundColor= 'rgba(255,255,255,0.6)',



   },
   overlayText:{
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.6,
    shadowRadius:3,
    elevation:1,
    alignSelf:'center',
    fontSize:20,
    color:'#292929',
    fontStyle:'italic',
    textAlign:'center',
    padding:8,
    marginTop:8,
    



   },
  
}
)