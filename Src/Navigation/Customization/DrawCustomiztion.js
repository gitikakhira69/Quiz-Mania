import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { View,Text } from 'react-native';
import User from '../../Model/User';
  
export default function DrawCustomiztion(props) {
    console.log("In Customised View")
    return (
      <DrawerContentScrollView {...props}>
        
        <DrawerItemList {...props} />
        <DrawerItem label="SignOut" />
      </DrawerContentScrollView>
    );
  }