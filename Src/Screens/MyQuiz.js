import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import QuizItem from '../BasicComponents/QuizItem';


export default function MyQuiz({navigation}) {
    const [quiz, setQuiz] = useState([{
        "quiz_name": "Algebra Quiz",
        "quiz_img_uri": "https://squeakychimp.com/wp-content/uploads/2016/11/math-algebra-legging-texture.jpg",
    },
    {
        "quiz_name": "McLaren Quiz",
        "quiz_img_uri": "",
    },
    {
        "quiz_name": "Cricket Quiz",
        "quiz_img_uri": "",
    },
    {
        "quiz_name": "Advance Algorithm Quiz",
        "quiz_img_uri": "https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg",
    },
    ]); 

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
                            name={item.quiz_name}
                            imageUrl={item.quiz_img_uri}
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