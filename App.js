import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Draw from './Src/Navigation/Draw';
import { Provider as PaperProvider,Appbar } from 'react-native-paper';
import Stack from './Src/Navigation/Stack';
import StackNav from './Src/Navigation/Stack';


export default function App() {
  return (
    <NavigationContainer>
      <StackNav></StackNav>
    </NavigationContainer>
    
    
  );
}

