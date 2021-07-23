import { Camera } from 'expo-camera';
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./styles";

const CreatePost = () => {

    const [description, setDescription] = useState("");

    const uploadToStorage = async(imagePath) => {
        try {

        } catch (e) {
            console.log(e);
        }
    }

    const onPublish = () => {

        // upload video to the cloud



        // create post in the database
    }

    return (
        <View style={styles.container}>
            <TextInput numberOfLines={5} placeholder={"Description"} value={description} onChangeText={setDescription} style={styles.textInput} />
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPublish} >
                <View style={styles.button}>
                     <Text style={styles.buttonText}>Publish</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CreatePost;
