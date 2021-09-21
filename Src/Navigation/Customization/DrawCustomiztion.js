import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { View,Text } from 'react-native';
import User from '../../Model/User';
import React  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
  
export default function DrawCustomiztion(props) {
  async function handelSignOut(props){
    await AsyncStorage.removeItem("userId")
    props.navigation.push("Landing")
  }

    console.log("In Customised View")
    return (
      <View>
        <View>
          <Text>{global.user}</Text>
        </View>
        <DrawerContentScrollView {...props}>        
          <DrawerItemList {...props} />
          <DrawerItem label="SignOut"
          onPress={()=>handelSignOut(props)}
          />
        </DrawerContentScrollView>
      </View> 
      
    );
  }