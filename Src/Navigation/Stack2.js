import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import GiveQuiz from '../Screens/GiveQuiz';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

export default function Stack2() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="GiveQuiz" component={GiveQuiz} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
  }