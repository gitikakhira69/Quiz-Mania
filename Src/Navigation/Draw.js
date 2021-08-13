import React from 'react';
import Landing from '../BasicComponents/Landing';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Screens/Dashboard';
import DrawCustomiztion from '../Navigation/Customization/DrawCustomiztion';
import BottomNavigator from '../Screens/BottomNavigator';



const Drawer = createDrawerNavigator();

export default function Draw(){
    return(
      <Drawer.Navigator drawerContent={(props)=><DrawCustomiztion {...props}/>}>
        <Drawer.Screen name="Landing" component={Landing} options={{headerShown:false}}/>
        <Drawer.Screen name="Login" component={Login} options={{headerShown:true}}/>
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown:false}} />        
      </Drawer.Navigator>
    );
}