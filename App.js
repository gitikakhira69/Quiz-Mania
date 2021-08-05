import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from "./components/signup";
import Landing from './components/landing';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigation from './components/stackNavigation';
import Tabs from './components/Tab';
import Draw from './components/draw';

export default function App() {
  return (
    <NavigationContainer>
     <Draw></Draw>
  </NavigationContainer>
  );
}

