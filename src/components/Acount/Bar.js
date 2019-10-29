import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
export default class Bar extends  React.Component{
    render(){
        return(
                <View style={styles.bar}>
                    <View style={[styles.barItem,styles.barseparator]}>
                    </View>


   

                    <View style={[styles.barItem,styles.barseparator]}>
                    </View>


                </View>   
   
        );
    }
}
const styles=StyleSheet.create({
    bar:{
        borderTopColor:'#fff',
        borderTopWidth:4,
        backgroundColor:'#fff',
        flexDirection:'row',
        borderColor:'#fff'
        

    },
    barseparator:{
        borderRightWidth:4,

    },
    barItem:{
        flex:1,
       // padding:18,
        alignItems:'center',
        backgroundColor:'#fff',
        marginTop: 20
    },
    barTop:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
        fontStyle:'italic'

    },
    barbottom:{
        color:'#fff',
        fontSize:14,
        fontWeight:'bold',
        fontStyle:'italic'

    },

}
)