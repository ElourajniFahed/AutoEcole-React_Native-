 import React, { Component } from 'react';
 import{Router,Scene,Stack} from 'react-native-router-flux'
 import Login from'./pages/loginpage';
 import AboutUs from'./pages/AboutUs';
import Profil from './pages/Acount';
import Courses from'./pages/Courses';

 export default class Routes extends React.Component{
     render(){
         return(
             <Router>
                    <Scene key="Login" component={Login} title="Login" hideNavBar={true}/>
                    <Scene key="AboutUs" component={AboutUs} title="AboutUs"hideNavBar={true}/>
                    <Scene key="Profil" component={Profil} title="Profil"hideNavBar={true}/>
                    <Scene key="Courses" component={Courses} title="Courses"hideNavBar={true}/>
                 </Router>
         )
         
     }

 }
