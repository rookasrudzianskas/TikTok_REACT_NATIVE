import * as React from 'react';
import styles from "./styles.js";
import {View, StyleSheet, Button, TouchableWithoutFeedback, Text} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import {useState} from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";



const Post = () => {
    const video = React.useRef(null);
    const [paused, setPaused] = useState(true);



    const onPlayPausePress = () => {
        setPaused(!paused);
    }
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                    ref={video}
                    style={styles.video}
                    shouldPlay={paused}
                    resizeMode="cover"
                    onError={(e) => console.log(e)}
                    source={{
                        uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
                    }}
                    isLooping
                />

            </TouchableWithoutFeedback>

            <View style={styles.uiContainer}>
                <View style={styles.rightContainer}>
                    <Text style={{color: "#fff", fontSize: 20}}>Side</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.handle}>@rookas 🛑</Text>
                    <Text style={{color: "#fff", fontSize: 20}}>Dancing together in the gym spot</Text>
                </View>

                <View style={styles.bottomContainer}>
                </View>

                <View style={styles.icons}>
                    <FontAwesome5 name="music" size={24} color="white" />
                    <Text>Alive by Kygo</Text>

                </View>

            </View>

        </View>
    );
}

export default Post;
