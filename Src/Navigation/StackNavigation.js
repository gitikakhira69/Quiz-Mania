import { createStackNavigator } from '@react-navigation/stack';
import MyQuiz from '../Screens/MyQuiz';
import React from 'react';
import AddNewQuiz from '../Screens/AddNewQuiz';
import CreateQuiz from '../Screens/CreateQuiz';
import QuizDetails from '../Screens/QuizDetails';

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="MyQuiz" component={MyQuiz} options={{headerShown:false}}/>
        <Stack.Screen name="AddNewQuiz" component={AddNewQuiz} options={{headerShown:false}}/>
        <Stack.Screen name="CreateQuiz" component={CreateQuiz} options={{headerShown:false}}/>
        <Stack.Screen name="QuizDetails" component={QuizDetails} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
  }