import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import QuizItem from '../BasicComponents/QuizItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../Firebase/FirebaseConfig';

export default function MyQuiz({navigation}) {
    const [quiz, setQuiz] = useState([]); 
     useEffect(()=>{
         fetchUserQuiz();
     });
   async function fetchUserQuiz(){
        const loggedUserId = await AsyncStorage.getItem("userId")
        if(loggedUserId){
            const dbref = firebase.app().database().ref("quizes/") ;
            dbref.on('value',(res)=>{
                const quizes = res.val()
                if(quizes){
                    var myQuiz=[];
                for(const key in quizes){
                    const id = quizes[key].createdByUser;
                    const data = quizes[key]               

                    if(id === loggedUserId){
                       console.log("ok")
                       myQuiz.push(data)
                    }
                }
                setQuiz(myQuiz)
                }
            })

        }
    }
    //function to handle when any quiz item is clicked on
    function handleQuizItemClick(index) {
        console.log(index);
    }

    //fuction to hanlde when add new quiz btn is pressed on
    function handleAddNewQuizBtnClick() {
        console.log("add new quiz btn pressed");
        navigation.navigate("CreateQuiz");
        //redirecting to CreateQuiz.js
    }

    //component rendering
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>My Quizzes</Text>
            <View style={styles.divider}></View>

            {
                quiz.map((item, idx) => {
                    console.log(idx)
                    return (
                        
                        <QuizItem
                            key={idx}
                            index={idx}
                            name={item.quizName}
                            imageUrl={item.quizImgUri}
                            onPress={handleQuizItemClick}
                        />
                    )
                })
            }

            <TouchableOpacity style={styles.addNewBtn} onPress={handleAddNewQuizBtnClick}>
                <Text style={styles.addNewBtnText}>+ Add new quiz</Text>
            </TouchableOpacity>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 60,
        paddingHorizontal: 30,
    },

    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },

    divider: {
        paddingVertical: 8,
    },

    addNewBtn: {
        marginTop: 35,
        alignItems: "center",
    },

    addNewBtnText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#2A34DC'
    },
});