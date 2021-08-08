import React from 'react';
import Landing from '../BasicComponents/Landing';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Screens/Dashboard';



const Drawer = createDrawerNavigator();

export default function Draw(){
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Landing" component={Landing} options={{headerShown:false}}/>
        <Drawer.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        
      </Drawer.Navigator>
    );
}