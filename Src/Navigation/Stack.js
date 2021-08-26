import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../BasicComponents/Landing';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Draw from './Draw';
import React from 'react';

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}  />
      <Stack.Screen name="Draw" component={Draw} options={{headerShown:false}}  />
    </Stack.Navigator>
  );
}