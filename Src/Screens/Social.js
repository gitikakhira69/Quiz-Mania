import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SnackBar from "../BasicComponents/SnackBar";
import firebase from '../Firebase/FirebaseConfig';
import SocialProfileDisplay from '../BasicComponents/SocialProfileDisplay';
import { useIsFocused } from "@react-navigation/native";

export default function Social({ navigation }) {
    const [usersQuizes, setUsersQuizes] = useState({});
    const [users, setUsers] = useState([]);
    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(true);
    const [snackBarVisible, setSnackBarVisible] = useState(false);
    const [snackBarText, setSnackBarText] = useState("");
    const [snackBarType, setSnackBarType] = useState("");

    //component did mount
    useEffect(() => {
        fetchUsersQuizes();
        fetchUsers();
    }, [isFocused])

    //function to fetch quizes of all users
    async function fetchUsersQuizes() {
        const loggedUserId = await AsyncStorage.getItem('useruid');
        if (loggedUserId) {
            const quizesDbRef = firebase.app().database().ref('quizes/');
            quizesDbRef
                .once('value')
                .then(resp => {
                    const quizes = resp.val();
                    if (quizes) {
                        var usersQuizzes = {};
                        for (const quizId in quizes) {
                            const quiz = quizes[quizId];
                         
                            const createdByUserId = quiz.createdByUserId;

                            if (createdByUserId !== loggedUserId) {
                                if (!(createdByUserId in usersQuizzes)) {
                                    usersQuizzes[createdByUserId] = [];
                                }
                                usersQuizzes[createdByUserId].push(quiz);
                            }
                        }
                        setUsersQuizes(usersQuizzes);
                    }
                })
                .catch(error => {
                    displaySnackBar("error", "Failed to get quizes");
                });
        } else {
            displaySnackBar("error", "User is not logged in");
        }
    }async function fetchUsersQuizes() {
        const loggedUserId = await AsyncStorage.getItem('useruid');
        if (loggedUserId) {
            const quizesDbRef = firebase.app().database().ref('quizes/');
            quizesDbRef
                .once('value')
                .then(resp => {
                    const quizes = resp.val();
                    if (quizes) {
                        var usersQuizzes = {};
                        for (const quizId in quizes) {
                            const quiz = quizes[quizId];
                            quiz["userId"]=quiz.createdByUser;
                            const createdByUserId = quiz.createdByUserId;

                            if (createdByUserId !== loggedUserId) {
                                if (!(createdByUserId in usersQuizzes)) {
                                    usersQuizzes[createdByUserId] = [];
                                }
                                usersQuizzes[createdByUserId].push(quiz);
                            }
                        }
                        setUsersQuizes(usersQuizzes);
                    }
                })
                .catch(error => {
                    displaySnackBar("error", "Failed to get quizes");
                });
        } else {
            displaySnackBar("error", "User is not logged in");
        }
    }async function fetchUsersQuizes() {
        const loggedUserId = await AsyncStorage.getItem('useruid');
        if (loggedUserId) {
            const quizesDbRef = firebase.app().database().ref('quizes/');
            quizesDbRef
                .once('value')
                .then(resp => {
                    const quizes = resp.val();
                    if (quizes) {
                        var usersQuizzes = {};
                        for (const quizId in quizes) {
                            const quiz = quizes[quizId];
                         
                            const createdByUserId = quiz.createdByUserId;

                            if (createdByUserId !== loggedUserId) {
                                if (!(createdByUserId in usersQuizzes)) {
                                    usersQuizzes[createdByUserId] = [];
                                }
                                usersQuizzes[createdByUserId].push(quiz);
                            }
                        }
                        setUsersQuizes(usersQuizzes);
                    }
                })
                .catch(error => {
                    displaySnackBar("error", "Failed to get quizes");
                });
        } else {
            displaySnackBar("error", "User is not logged in");
        }
    }async function fetchUsersQuizes() {
        const loggedUserId = await AsyncStorage.getItem('userId');
        if (loggedUserId) {
            const quizesDbRef = firebase.app().database().ref('quizes/');
            quizesDbRef
                .once('value')
                .then(resp => {
                    const quizes = resp.val();
                    if (quizes) {
                        var usersQuizzes = {};
                        for (const quizId in quizes) {
                            const quiz = quizes[quizId];
                         
                            const createdByUserId = quiz.createdByUser;

                            if (createdByUserId !== loggedUserId) {
                                if (!(createdByUserId in usersQuizzes)) {
                                    usersQuizzes[createdByUserId] = [];
                                }
                                usersQuizzes[createdByUserId].push(quiz);
                            }
                        }
                        setUsersQuizes(usersQuizzes);
                    }
                })
                .catch(error => {
                    displaySnackBar("error", "Failed to get quizes");
                });
        } else {
            displaySnackBar("error", "User is not logged in");
        }
    }
    //function to fetch users from firebase db
    async function fetchUsers() {
        console.log("fetchUsers");
        const loggedUserId = await AsyncStorage.getItem('userId');
        if (loggedUserId) {
            const quizesDbRef = firebase.app().database().ref('users/');
            quizesDbRef
                .once('value')
                .then(resp => {
                    const usersDB = resp.val();
                    if (usersDB) {
                        var usersArray = [];
                        for (const userId in usersDB) {
                                const user = usersDB[userId];
                                usersArray.push(user);
                        }
                        setUsers(usersArray);
                    }
                    setIsLoading(false);
                })
                .catch(error => {
                    displaySnackBar("error", "Failed to get users" + error);
                });
        } else {
            displaySnackBar("error", "User is not logged in");
        }
    }

    //function to handle when any profile card is clicked on
    function handleProfileClick(index) {
        console.log("profile clicked", index);
    }

    //function to display snackbar
    function displaySnackBar(type, text) {
        setSnackBarType(type);
        setSnackBarText(text);
        setSnackBarVisible(true);
    }

    //function to hide snackbar
    function hideSnackBar() {
        setSnackBarVisible(false);
    }

    //component rendering
    return (
        <>
            <View style={styles.container}>
                {
                    isLoading ?
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator style={styles.loader} />
                        </View>
                        :
                        users.map(function(item, idx) {
                            return (
                               <SocialProfileDisplay
                               key = {idx}
                               index = {idx}
                               profilePicUri={item.profilePicUri}
                               name={item.name}
                               email={item.email}
                               desc={item.desc}
                               quizes={usersQuizes[item.userId]}
                               navigation={navigation}
                               onPress={handleProfileClick}
                               ></SocialProfileDisplay>
                            )
                        })
                }
            </View>

            {
                snackBarVisible ?
                    <SnackBar
                        isVisible={snackBarVisible}
                        text={snackBarText}
                        type={snackBarType}
                        onClose={hideSnackBar}
                    />
                    : null
            }
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 30,
    },

    loaderContainer: {
        flex: 1,
        justifyContent: "center",
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
});