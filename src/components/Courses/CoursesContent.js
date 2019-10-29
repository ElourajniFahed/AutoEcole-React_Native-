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
 ScrollView
} from 'react-native';
import CustomImage from '../CustomImage';
export default class CoursesContent extends React.Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.contentContainer}>
            <View style={styles.contentcouverture}>
                    <CustomImage imageSource={require('../../img/CouvertureCode.jpg')} header='علامات الطريق'paragraph=''/>
                </View>
                <View style={styles.col2}>
                    <CustomImage imageSource={require('../../img/stopandstand.jpg')} header='الوقوف و التوقف'paragraph=''/>

            </View>
            <View style={styles.col1}>
                    <CustomImage imageSource={require('../../img/mo9at3a.jpg')} header='المقاطعة'paragraph=''/>

            </View>


            <View style={styles.contentcouverture}>
                    <CustomImage imageSource={require('../../img/autoroute.png')} header='الطريق السيارة'paragraph=''/>

            </View>
                <View style={styles.col2}>
                    <CustomImage imageSource={require('../../img/speed.jpg')} header='السرعة'paragraph=''/>
                </View>


                <View style={styles.col1}>
                    <CustomImage imageSource={require('../../img/autoroute.png')} header='اضاءة العربات و اشاراتها'paragraph=''/>

                </View>
                <View style={styles.contentcouverture}>
                    <CustomImage imageSource={require('../../img/dahsboard.jpg')} header='لوحة القيادة'paragraph=''/>

                </View>
                <View style={styles.col2}>
                    <CustomImage imageSource={require('../../img/roadcharges.jpg')} header='رسوم الطريق'paragraph=''/>
                </View>
                <View style={styles.col1}>
                    <CustomImage imageSource={require('../../img/dahsboard.jpg')} header='لوحة القيادة'paragraph=''/>

                </View>

                <View style={styles.contentcouverture}>
                    <CustomImage imageSource={require('../../img/moujewza.jpg')} header='المجاوزة'/>

                </View>
                <View style={styles.col2}>
                    <CustomImage imageSource={require('../../img/awlawiya.jpg')} header='الأولوية'paragraph=''/>
                </View>
                <View style={styles.col1}>
                    <CustomImage imageSource={require('../../img/stopandstand.jpg')} header='تغيير الاتجاه بالمفترقات'paragraph=''/>

                </View>

                <View style={styles.contentcouverture}>
                    <CustomImage imageSource={require('../../img/icharatdhaw2iya.jpg')} header='الاشارات الضوئية'paragraph=''/>

                </View>
            </View> 
            </ScrollView>

        )
    }
}
const styles=StyleSheet.create({
    contentContainer:{
       flex:1,
       flexDirection:'row',
       flexWrap:'wrap',
       padding:5,


    },
    col1:{
        flex:1,
        padding:5,
    },
    col2:{
        flex:2,
        padding:5,
    },
   contentcouverture:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        padding:5,
    }
}
)