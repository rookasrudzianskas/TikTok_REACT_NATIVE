import React from 'react';
import {View, Text} from 'react-native';
import Video from "react-native-video";

const Post = () => {
    return (
        <View>
           <Video source={{ uri: "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4"}} />
        </View>
    );
};

export default Post;
