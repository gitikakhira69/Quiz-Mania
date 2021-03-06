import React from 'react';
import Landing from '../BasicComponents/Landing';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Screens/Dashboard';
import DrawCustomiztion from '../Navigation/Customization/DrawCustomiztion';
import BottomNavigator from './BottomNavigator';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/routers';
import Social from '../Screens/Social';

const Drawer = createDrawerNavigator();

export default function Draw({navigation}){
    return(
      <PaperProvider>
        <Appbar.Header>
          <Appbar.Action icon="menu"
          onPress={()=>{navigation.dispatch(DrawerActions.toggleDrawer())}}
          ></Appbar.Action>
         <Appbar.Header>
           <Appbar.Content title="Quiz" subtitle={'Quiz Mania'} />
         </Appbar.Header>
        </Appbar.Header>
        <Drawer.Navigator drawerContent={(props)=><DrawCustomiztion {...props}/>}>
          <Drawer.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown:false}} /> 
          <Drawer.Screen name="Social" component={Social} options={{headerShown:false}} />         
        </Drawer.Navigator>
      </PaperProvider>
      
    );
}