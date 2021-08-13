import React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function BottomNavigator(){
    return(
        
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="My Quiz" component={UserScreen}/>
                <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
            </Tab.Navigator>
        
    );
}