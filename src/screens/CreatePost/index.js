import { Camera } from 'expo-camera';
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {Storage} from "aws-amplify";
import {useRoute} from "@react-navigation/native";
import { v4 as uuidv4 } from 'uuid';


import styles from "./styles";

const CreatePost = () => {

    const [description, setDescription] = useState("");
    const route = useRoute();

    const uploadToStorage = async(imagePath) => {
        try {
            const response = await fetch(imagePath);

            const blob = await response.blob();

            const filename = 'filename.mp4';
            const s3Response = await Storage.put(filename, blob);

            console.log(s3Response);

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        uploadToStorage(route.params.videoUri);
    }, []);

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
