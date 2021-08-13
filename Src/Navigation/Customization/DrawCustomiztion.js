import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { View,Text } from 'react-native';
import User from '../../Model/User';
import React  from 'react';
  
export default function DrawCustomiztion(props) {

    console.log("In Customised View")
    return (
      <View>
        <View>
          <Text>{global.user}</Text>
        </View>
        <DrawerContentScrollView {...props}>        
          <DrawerItemList {...props} />
          <DrawerItem label="SignOut" />
        </DrawerContentScrollView>
      </View> 
      
    );
  }