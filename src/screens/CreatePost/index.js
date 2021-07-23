import { Camera } from 'expo-camera';
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./styles";

const CreatePost = () => {

    const [description, setDescription] = useState("");

    const onPublish = () => {

    }

    return (
        <View style={styles.container}>
            <TextInput value={description} onTextChange={setDescription} style={styles.textInput} />
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPublish} >
                <Text>Publish</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreatePost;
