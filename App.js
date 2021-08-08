import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Draw from './Src/Navigation/Draw';
import { Provider as PaperProvider,Appbar } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
       <Appbar.Header>
      
      <Appbar.Content title="Quiz" subtitle="Quiz Mania" />
      
    </Appbar.Header>
      <NavigationContainer>
        <Draw></Draw>
      </NavigationContainer>
    </PaperProvider>
    
  );
}

