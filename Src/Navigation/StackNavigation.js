import { createStackNavigator } from '@react-navigation/stack';
import MyQuiz from '../Screens/MyQuiz';
import React from 'react';
import AddNewQuiz from '../Screens/AddNewQuiz';
import CreateQuiz from '../Screens/CreateQuiz';

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="MyQuiz" component={MyQuiz} />
        <Stack.Screen name="AddNewQuiz" component={AddNewQuiz}/>
        <Stack.Screen name="CreateQuiz" component={CreateQuiz}/>
      </Stack.Navigator>
    );
  }