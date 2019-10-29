
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  Image,
  Dimensions,
  ScrollView,
  View,
  TouchableOpacity

} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class AcountContent extends  React.Component{
    go_to_courses(){
        
    }
    render(){
        return(
            <ScrollView>
                <View style={styles.photoGrid}>
                    <TouchableOpacity onPress={()=>Actions.Courses()}> 
                        <View style={styles.photoWrap}>
                            <Image style={styles.photo}source={require('../../img/Courses2.png')}/>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <View style={styles.photoWrap}>
                            <Image style={styles.photo}source={require('../../img/taketest.png')}/>
                        </View>
                    </TouchableOpacity>
   
                    <TouchableOpacity>

                        <View style={styles.photoWrap}>
                            <Image style={styles.photo}source={require('../../img/Dossier.jpg')}/>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.photoWrap}>
                            <Image style={styles.photo}source={require('../../img/code1.jpg')}/>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>

                        <View style={styles.photoWrap}>
                            <Image style={styles.photo}source={require('../../img/conduit.jpg')}/>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <View style={styles.photoWrap}>
                            <Image style={styles.photo}source={require('../../img/msgg.png')}/>

                        </View>
                     </TouchableOpacity>

                    
                </View>
                </ScrollView>

        
        )
    }
}

const styles=StyleSheet.create({
    photoGrid:{
        flexDirection:'row',
        flexWrap:'wrap'

    },
    photoWrap:{
        margin:2,
        height:120,
        width:(Dimensions.get('window').width / 2 ) - 4 ,

    },
    photo:{
        flex:1,
        width:null,
        alignSelf:'stretch'

    },


})