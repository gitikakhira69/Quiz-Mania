import React from 'react';
import { StyleSheet,
         Text,
         TouchableOpacity } 
        from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import SignUp from './signup';
import Landing from './Src/BasicComponents/Landing';
import Login from './Src/Screens/Login';
import SignUp from './Src/Screens/SignUp';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginSuccess from './loginsuccess';
import Media from './MediaTwo';



const Drawer = createDrawerNavigator();

export default function Draw(){
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Landing" component={Landing} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="SignUp" component={SignUp} />
        
      </Drawer.Navigator>
    );
}