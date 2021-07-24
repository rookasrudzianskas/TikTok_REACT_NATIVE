import { Camera } from 'expo-camera';
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

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

    const navigation = useNavigation();

    const onRecord = async () => {
        if (isRecording) {
            camera.current.stopRecording();
            setIsRecording(false);
        } else {
            setIsRecording(true);
            const data = await camera.current.recordAsync();
            navigation.navigate("CreatePost", {videoUri: data.uri});
        }
    }

    return (

        <View style={styles.container}>
          <Camera onRecordingStart={() => setIsRecording(true)} onRecordingEnd={() => setIsRecording(false)} style={styles.preview} ref={camera} type={type} />
            <View style={styles.row}>
                <TouchableOpacity activeOpacity={0.8} style={styles.flip}  onPress={() => {setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                    );
                }}>
                    <Text style={{alignSelf: 'center', marginTop: 16, fontWeight: "700"}}>FLIP</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onRecord} activeOpacity={0.8} style={isRecording ? styles.buttonStop : styles.buttonRecord}>

                </TouchableOpacity>

            </View>

        </View>
    );
};

export default Cameras;
