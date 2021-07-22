import * as React from 'react';
import styles from "./styles.js";
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const Post = () => {
    const video = React.useRef(null);
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                shouldPlay
                resizeMode="cover"
                source={{
                    uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
                }}
                isLooping
            />

        </View>
    );
}

export default Post;
