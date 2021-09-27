import React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import UserScreen from '../Screens/UserScreen';
import Profile from '../Screens/Profile';
import StackNavigation from './StackNavigation';
import Stack2 from './Stack2';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomNavigator(){
    return(
        
            <Tab.Navigator>
                <Tab.Screen name="Stack2" component={Stack2}
                options={{headerShown:false}}  
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}/>
                <Tab.Screen name="My Quiz" component={StackNavigation}  
                options={{headerShown:false}}
                options={{
                    tabBarLabel: 'My Quiz',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-document" color={color} size={26} />
                    ),
                }}
                />
                <Tab.Screen name="Profile" component={Profile}
                 options={{headerShown:false}}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-person" color={color} size={26} />
                    ),
                }}
                />
            </Tab.Navigator>
        
    );
}