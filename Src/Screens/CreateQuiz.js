import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import BasicButton from '../BasicComponents/BaiscBtn';
import app from '../Firebase/FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../Firebase/FirebaseConfig';

export default function CreateQuiz({navigation}) {
    const [availableQuizTypes, setAvailableQuizTypes] = useState([]); //will be fetched from db
    const [image, setImage] = useState(null);
    const [quizName, setQuizName] = useState("");
    const [quizDesc, setQuizDesc] = useState("");
    const [quizType, setQuizType] = useState("");

    //component did mount
    useEffect(() => {
        //asking for permission to access phone's gallery
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
        fetchQuziTypes()
    }, []);
    async function uploadImage(createdByUser,uri){
        const timeStamp = Math.floor(Date.now() / 1000);
        const imageName = timeStamp + ".jpg";
    
        //putting image in firebase
        const storageRef = firebase.storage().ref().child( createdByUser+ "/" + imageName);
        const response = await fetch(uri);
        const blob = await response.blob();
        const resp = storageRef.put(blob);
        resp.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
                const percent = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log("percent", percent);
                
                
            },
            error => {
                console.log("image upload error: ", error.message);
                
            },
            () => {
                console.log("getDownloadURL")
                storageRef.getDownloadURL()
                    .then((downloadUrl) => {     
                        setImage(downloadUrl);
                    })
            }
        );
        return resp;
    }
    function insertQuizFirebase(createdByUser,image){
        const timestamp = Math.floor(Date.now())
        const insertKey = createdByUser + "_" + timestamp;

        const dbref = firebase.app().database().ref("quizes/")
        dbref.child(insertKey)
        .set({
            createdByUser,
            quizImageUri:image,quizName,quizType,quizDesc
        },
        (err)=>{
         if(err){
             console.log(err)
         }       
         else{
             navigation.navigate("QuizDetails",{
                 insertKey,quizImageUri:image,quizName,quizType,quizDesc
             })
         }
        }
        )
    }
     //Detch Quiz Types From Database
     function fetchQuziTypes(){
         const fetch = app.database().ref("quizTypes/")
         fetch.on('value',(res)=>{
             const quizTypes = res.val()
             if(quizTypes){
                 setAvailableQuizTypes(quizTypes)
             }
         })
     }
     
    //function to handle when Pick Image btn is clicked on
    async function handlePickImgBtnClick() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    //function to handle when any quiz item is clicked on
   async function hanldeCreateBtnClick() {
        console.log("create btn clicked");
        const createdByUser = await AsyncStorage.getItem("userId")
        if (createdByUser){
            if (image){
                await uploadImage(createdByUser,image)
                .then(()=>{
                    console.log("Image Uploaded")
                })
                insertQuizFirebase(createdByUser,image)
            }
        }
              
    }

    //component rendering
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Create Quiz</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Quiz Image</Text>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.divider}></View>
                <BasicButton
                    text="Pick Image"
                    onPress={handlePickImgBtnClick}
                />
                <View style={styles.divider}></View>

                <Text style={styles.label}>Quiz Name</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Give a name to your quiz"
                    value={quizName}
                    onChangeText={(val) => setQuizName(val)}
                />
                <View style={styles.divider}></View>

                <Text style={styles.label}>Quiz Type</Text>
                <Picker
                    style={styles.inputField}
                    selectedValue={quizType}
                    onValueChange={(quizType, itemIndex) => setQuizType(quizType)}
                >
                    <Picker.Item label="" value="" />
                    {
                        availableQuizTypes.map((item, idx) => {
                            return (
                                <Picker.Item key={idx} label={item} value={item} />
                            )
                        })
                    }
                </Picker>
                <View style={styles.divider}></View>

                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.inputField}
                    multiline
                    placeholder="What describes your Quiz?"
                    value={quizDesc}
                    onChangeText={(val) => setQuizDesc(val)}
                />
                <View style={styles.divider}></View>

                <BasicButton
                    text="Create"
                    onPress={hanldeCreateBtnClick}
                />
            </View>
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

    form: {
        marginTop: 35,
    },

    label: {
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },

    inputField: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#BFBFBF',
        paddingVertical: 6,
    },

    image: {
        alignSelf: "center",
        width: "100%",
        height: 200,
        backgroundColor: "#f1f1f1",
    },
});