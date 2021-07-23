import { Camera } from 'expo-camera';
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";

const Cameras = () => {


    const [hasPermission, setHasPermission] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const camera = useRef();


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const onRecord = async () => {
        if (isRecording) {
            camera.current.stopRecording();
            setIsRecording(false);
        } else {
            setIsRecording(true);
            const data = await camera.current.recordAsync();
            console.log(data);
        }
    }

    return (

        <View style={styles.container}>
          <Camera style={styles.preview} ref={camera} type={type} />
            <TouchableOpacity onPress={onRecord} activeOpacity={0.8} style={isRecording ? styles.buttonStop : styles.buttonRecord}>

            </TouchableOpacity>

        </View>
    );
};

export default Cameras;
