import * as React from 'react';
import styles from "./styles.js";
import {View, StyleSheet, Image, Button, TouchableWithoutFeedback, Text} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import {useState} from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Entypo } from '@expo/vector-icons';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// working fine

const Post = ({post}) => {
    console.log(post);
    const video = React.useRef(null);
    const [paused, setPaused] = useState(true);



    const onPlayPausePress = () => {
        setPaused(!paused);
    }
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <View>
                <Video
                    ref={video}
                    style={styles.video}
                    shouldPlay={paused}
                    resizeMode="cover"
                    onError={(e) => console.log(e)}
                    source={{
                        uri: post.videoUri,
                    }}
                    isLooping
                />


            <View style={styles.uiContainer}>
                <View style={styles.rightContainer}>
                        <Image style={styles.profilePictureContainer} source={{uri: post.user.imageUri}}/>

                        <View style={styles.iconContainer}>
                            <AntDesign name="heart" size={40} color="white" />
                            {/*// <AntDesign name="hearto" size={24} color="black" />*/}
                            <Text style={styles.statsLabel}>{post.likes}</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <FontAwesome name="commenting" size={40} color="white" />
                            <Text style={styles.statsLabel}>{post.comments}</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="share-all" size={40} color="white" />
                            <Text style={styles.statsLabel}>{post.shares}</Text>
                        </View>
                </View>

                <View style={styles.bottomContainer}>
                    <View>
                        <Text style={styles.handle}>@{post.user.username} 🛑</Text>
                        <Text style={styles.description}>{post.description}</Text>

                        <View style={styles.songRow}>
                            <FontAwesome5 name="music" size={24} color="white" />
                            <Text style={styles.songName}>{post.songName}</Text>
                        </View>

                    </View>

                    <View>
                       <Image style={styles.songImage} source={{uri: post.songImage}}/>
                    </View>

                         </View>
                    </View>
                </View>

            </TouchableWithoutFeedback>

        </View>
    );
}

export default Post;
