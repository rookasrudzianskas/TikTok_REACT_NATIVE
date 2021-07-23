import * as React from 'react';
import styles from "./styles.js";
import {View, StyleSheet, Image, Button, TouchableWithoutFeedback, Text} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import {useState} from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Entypo } from '@expo/vector-icons';

// working fine

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
                    <View style={styles.profilePictureContainer}>
                        <Image sourse={{uri: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg'}}/>
                    </View>
                        <View style={styles.iconContainer}>
                            <Entypo name="beamed-note" size={40} color="white" />
                            <Text>123</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Entypo name="beamed-note" size={40} color="white" />
                            <Text style={styles.statsLabel}>123</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Entypo name="beamed-note" size={40} color="white" />
                            <Text>123</Text>
                        </View>
                </View>

                <View style={styles.bottomContainer}>
                    <Text style={styles.handle}>@rookas 🛑</Text>
                    <Text style={styles.description}>Dancing together in the gym spot</Text>
                </View>

                <View style={styles.songRow}>
                    <FontAwesome5 name="music" size={24} color="white" />
                    <Text style={styles.songName}>Alive by Kygo</Text>

                </View>

            </View>

        </View>
    );
}

export default Post;
