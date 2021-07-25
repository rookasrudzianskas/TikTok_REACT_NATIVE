import { Camera } from 'expo-camera';
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {API, Auth, graphqlOperation, Storage} from "aws-amplify";
import {useNavigation, useRoute} from "@react-navigation/native";
import { v4 as uuidv4 } from 'uuid';


import styles from "./styles";
import {createPost} from "../../graphql/mutations";

const CreatePost = () => {

    const [description, setDescription] = useState("");
    const [videoKey, setVideoKey] = useState(null);
    const route = useRoute();
    const navigation = useNavigation();
    const navigation = useNavigation();
    const navigation = useNavigation();
    const navigation = useNavigation();
    const navigation = useNavigation();
    const navigation = useNavigation();
    const navigation = useNavigation();
    const navigation = useNavigation();

    const uploadToStorage = async (imagePath) => {

        try {
            const response = await fetch(imagePath);

            const blob = await response.blob();

            const filename = `${uuidv4()}.mp4`;
            const s3Response = await Storage.put(filename, blob);

            setVideoKey(s3Response.key);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        uploadToStorage(route.params.videoUri);
    }, []);

    const onPublish = async () => {

        // upload video to the cloud
        if(!videoKey) {
            console.log("Video is not uploaded yet...");
            return;
        }

        try {

            const userInfo = await Auth.currentAuthenticatedUser();

            const newPost = {
                videoUri: videoKey,
                description: description,
                userID: userInfo.attributes.sub,
                songID: "37a054b0-adcf-445a-9a32-6eb51cfa59b8",

            }


            const response = await API.graphql(graphqlOperation(createPost, {input: newPost}));
            navigation.navigate("Home");

        } catch (e) {
            console.log(e);
        }

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
