import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { View,Text } from 'react-native';
import User from '../../Model/User';
import React, {useEffect,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../Firebase/FirebaseConfig';
  
export default function DrawCustomiztion(props) {
  const [EMA,setEMA] = useState("") ;
  const [profilePicUri, setProfilePicUri] = useState(require("../../../assets/icon.png"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [desc, setDesc] = useState("");
  const [givenQuizCount, setGivenQuizCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [performanceData, setPerformanceData] = useState({
      "total": 0,
      "correct": 0,
      "incorrect": 0,
  });
  useEffect(()=>{
    getdata()
    fetchUsersData()
  })
  async function fetchUsersData() {
    const loggedUserId = await AsyncStorage.getItem('userId');
    const email = await AsyncStorage.getItem('useremail');
    if (loggedUserId) {
        const usersDbRef = firebase.app().database().ref('users/');
        usersDbRef
            .child(loggedUserId)
            .once('value')
            .then(resp => {
                const response = resp.val();
                if (response) {
                    //for getting performance pie chart
                    //Write code
                    var total = 0;
                    var correct = 0;
                    var incorrect = 0;
                    const quizResponses = response.quizResponses || {};
                    const tempGivenQuiz = Object.keys(quizResponses).length || null;
                    for (const quizId in quizResponses) {
                        const quizResponse = quizResponses[quizId];
                        const responses = quizResponse.responses || {};
                        console.log("responses", responses);
                        const tempTotal = Object.keys(responses).length || 0;
                        total += tempTotal;
                        for (const questionId in responses) {
                            const ansResponse = responses[questionId];
                            const isCorrect = ansResponse["isCorrect"];
                            if (isCorrect) {
                                correct++;
                            }
                        }
                    }
                    incorrect = total - correct;

                    //updating state
                    setName(response.names)
                    setDesc(response.desc)
                    setAgeGroup(response.ageGroup)
                    setGivenQuizCount(tempGivenQuiz)
                    setPerformanceData({
                        total,correct,incorrect
                    })
                    setEmail(email)

                    if (response.profilePicUri) {
                        setProfilePicUri(response.profilePicUri)
                    }

                
                }
                setIsLoading(false);
            })
            
    }
}

  async function getdata(){
    var EMA = await AsyncStorage.getItem('useremail')
    setEMA(EMA)
  }
  async function handelSignOut(props){
    await AsyncStorage.removeItem("userId")
    props.navigation.push("Landing")
  }


    console.log("In Customised View")
    return (
      <View>
        <View>
          <Text>{EMA}</Text>
        </View>
        <DrawerContentScrollView {...props}>        
          <DrawerItemList {...props} />
          <DrawerItem label="SignOut"
          onPress={()=>handelSignOut(props)}
          />
          <DrawerItem label="Social"
          
          />
        </DrawerContentScrollView>
      </View> 
      
    );
  }