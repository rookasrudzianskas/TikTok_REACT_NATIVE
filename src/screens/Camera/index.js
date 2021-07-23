import { Camera } from 'expo-camera';
import React, {useEffect, useState} from 'react';
import {View, Text} from "react-native";
import "./styles";

const Cameras = () => {


    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


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

    return (

        <View style={styles.container}>
          <Camera style={styles.camera} type={type}>
          </Camera>
        </View>
    );
};

export default Cameras;