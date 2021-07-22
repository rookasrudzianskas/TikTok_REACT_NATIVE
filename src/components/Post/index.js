import * as React from 'react';
import styles from "./styles.js";
import {View, StyleSheet, Button, TouchableWithoutFeedback, Text} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import {useState} from "react";

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
                <Text>I am the bottom component</Text>
            </View>

        </View>
    );
}

export default Post;
