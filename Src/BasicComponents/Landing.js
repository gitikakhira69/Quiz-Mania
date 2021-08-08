import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import BasicButton from './BaiscBtn';

export default class Landing extends React.Component{
  handleLoginBtnClick=()=>{
      console.log("Login Click")
      this.props.navigation.navigate('Login') 
  }
  handleSignUpBtnClick=()=>{

  }
 render(){
  return (
    <View style={styles.container}>
      <View>
      {/* <LottieView
          autoPlay
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#eee',
          }}
          source={require('../../assets/Logo.json')}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        /> */}
      </View>
      <View>
        <Text>Quiz Mania</Text>
      </View>
      <View>
        <BasicButton
                  text="Login"
                  onPress={this.handleLoginBtnClick}
                />
        <BasicButton
                text="Sign Up"
                onPress={this.handleSignUpBtnClick}
              />        

      </View>
    </View>
  );
 }
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
